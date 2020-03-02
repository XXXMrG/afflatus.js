// const fs = require('fs');
const path = require('path');
const fs = require('fs');
const prettier = require('prettier');

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },
  /**
   * sync write a json file, will merge the data
   */
  writeJsonFile: (path, data) => {
    const dataString = fs.readFileSync(path, 'utf8');
    const dataJson = JSON.parse(dataString);
    Object.assign(dataJson, data);
    const newString = prettier.format(JSON.stringify(dataJson), {
      parser: 'json',
    });
    fs.writeFileSync(path, newString);
  },
};
