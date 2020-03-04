# afflatus.js

a divine creative impulse or inspiration.

## TODO

### template file control 

- [ ] use ejs or other template language

### webpack

- [x] main environment: webpack.

dependencies:  webpack, webpack-cli, webpack-dev-server.

exe command:  `npm install --save-dev ${dependencies}`

need change files: package.json & webpack.config.js (new).

subOptions:  

optional loaders:  

- [x] style support: style-loader, css-loader  
exe command: `npm install --save-dev ${dependencies}`
need change files: webpack.config.js
- [x] babel support:  babel-loader
exe command: `npm install --save-dev ${dependencies}`
need change files: webpack.config.js .babelrc (new)

optional plugins:

- [x] html & build support: html-webpack-plugin, clean-webpack-plugin.

**at least According to the webpack options generate the webpack.config.js**

### code lint

- [ ] option: eslint & prettier

devDependencies: eslint, prettier, babel-eslint, eslint-config-prettier, eslint-plugin-prettier.

### git commit lint

- [ ] option: commitizen to control git commit message.  

devDependencies: cz-conventional-changelog, husky.
exe command `npx commitizen init cz-conventional-changelog --save-dev --save-exact`  
need change files: package.json

## Reference

[commitizen-cli](https://github.com/commitizen/cz-cli)  
