#!/usr/bin/env node
const commander = require('commander');
const output = require('./lib/console');
const project = require('./lib/project');

const program = new commander.Command();

program.version('0.1.0');

program
  .command('create <name>')
  .description('create a new project at cwd path')
  .action((name, cmdObj) => {
    output.printStart();
    project.createProject(name);
  });

program.parse(process.argv);

// console.log(shell.cat('package.json').stdout);
