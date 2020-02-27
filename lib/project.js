/**
 * module to control project
 */
const inquirer = require('./inquirer');
const shell = require('shelljs');
const fs = require('fs');
const list = require('./static-list');
const prettier = require('prettier');
const ora = require('ora');

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
    const spinner = ora('installing dependencies......').start();
    // just collect config do not create folder
    switch (typeName) {
      case 'webpack': {
        shell.exec(
          `npm install --save-dev ${list.webpackDeps.join(' ')}`,
          { silent: true },
          (code, stdout, stderr) => {
            if (code === 1) {
              spinner.fail('error happened');
              console.log(stderr);
              process.exit(1);
            } else {
              spinner.succeed('succeed installed');
              console.log(stdout);
            }
          }
        );
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
