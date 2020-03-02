/**
 * module to control project
 */
const inquirer = require('./inquirer');
const shell = require('shelljs');
const fs = require('fs');
const list = require('./static-list');
const prettier = require('prettier');
const ora = require('ora');
const output = require('./console');
const util = require('./util');
const files = require('./files');

module.exports = {
  async createProject(name) {
    const { typeName, description } = await inquirer.askProjectInfo();
    const packageFile = Object.assign({}, list.package);
    packageFile.name = name;
    packageFile.description = description;
    try {
      fs.accessSync(`./${name}`);
    } catch {
      fs.mkdirSync(`./${name}`);
    } finally {
      shell.cd(name);
      fs.writeFileSync(
        './package.json',
        prettier.format(JSON.stringify(packageFile), { parser: 'json' })
      );
    }
    const spinner = ora('installing dependencies......');
    // just collect config do not create folder
    switch (typeName) {
      case 'webpack': {
        const { loaders, plugins } = await inquirer.askWebpackConfig();
        const dependencies = util.mergeArray(
          loaders,
          plugins,
          list.webpackDeps
        );
        output.printInfo('atu will install this dependencies');
        console.log(dependencies);
        files.writeJsonFile('./package.json', {
          scripts: {
            build: 'webpack --env.production',
            start: 'webpack-dev-server --open --env.development',
          },
        });
        spinner.start();
        // shell.exec(
        //   `npm install --save-dev ${dependencies.join(' ')}`,
        //   { silent: true },
        //   (code, stdout, stderr) => {
        //     if (code === 1) {
        //       spinner.fail('error happened');
        //       output.printError(stderr);
        //     } else {
        //       spinner.succeed('succeed installed');
        //       output.printSucceed(stdout);
        //     }
        //   }
        // );
        shell.touch('webpack.config.js');
        break;
      }
      case 'vue': {
        break;
      }
      case 'react': {
        break;
      }
    }
    // TBD Universal process and create folder
  },
};
