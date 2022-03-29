const path = require('path');
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  rootDir: path.resolve(__dirname, './'),
  testMatch: [ //匹配测试用例的文件
  '<rootDir>/tests/units/*.spec.js' 
],
  // 收集测试覆盖率
  collectCoverage: true
}
