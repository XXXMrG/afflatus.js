/**
 * module to control console input
 */
const figlet = require('figlet');
const chalk = require('chalk');

module.exports = {
  printStart() {
    console.clear();
    console.log(
      chalk.yellow(figlet.textSync('Afflatus', { horizontalLayout: 'full' }))
    );
  },
};
