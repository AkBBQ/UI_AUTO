exports.config = {
  tests: 'y/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://www.baidu.com',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'UI',
  translation: 'zh-CN'
}