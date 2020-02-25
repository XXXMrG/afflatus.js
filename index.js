#!/usr/bin/env node
const figlet = require('figlet');
const chalk = require('chalk');

console.clear();

console.log(
  chalk.yellow(figlet.textSync('Afflatus', { horizontalLayout: 'full' }))
);
