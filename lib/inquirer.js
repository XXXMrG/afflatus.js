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
};
