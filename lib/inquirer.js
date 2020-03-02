/**
 * module to control command line interaction
 */
const inquirer = require('inquirer');
const list = require('./static-list');

module.exports = {
  askProjectInfo() {
    const questions = [
      {
        name: 'description',
        type: 'input',
        message: 'input project description',
      },
      {
        name: 'typeName',
        type: 'list',
        message: 'Which type project you want to create',
        choices: list.typeChoice,
      },
    ];
    return inquirer.prompt(questions);
  },
  askWebpackConfig() {
    const questions = [
      {
        name: 'loaders',
        type: 'checkbox',
        message: 'Select webpack loaders',
        choices: list.webpackLoaders,
        default: list.webpackDefaultLoaders,
      },
      {
        name: 'plugins',
        type: 'checkbox',
        message: 'Select webpack plugins',
        choices: list.webpackPlugins,
        default: list.webpackDefaultPlugins,
      },
    ];
    return inquirer.prompt(questions);
  },
};
