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
  printError(text) {
    console.log(chalk.red(text));
    process.exit(1);
  },
  printSucceed(text) {
    console.log(chalk.greenBright(text));
  },
  printInfo(text) {
    console.log(chalk.bgGreen.black(text));
  },
};
