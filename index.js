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
// program
//   .command('test')
//   .description('test a developing func')
//   .action(async () => {
//     console.clear();
//     const res = util.mergeArray([1, 2], [3, 4], [5, 6]);
//     console.log(res);
//   });
program.parse(process.argv);
