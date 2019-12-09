module.exports = {
  // 此项是用来告诉 eslint 找当前配置文件不能往父级查找
  root: true,

  // 此项是用来指定 javaScript 语言类型和风格，sourceType 用来指定 js 导入的方式，默认是 script, 此处设置为 module, 指某块导入方式
  parserOptions: {
    // 设置 script (默认) 或 module, 如果代码是在 ECMASCRIPT 中的模块
    sourceType: 'module',
    "ecmaVersion": 6,
    // 此项是用来指定 eslint 解析器的，解析器必须符合规则，babel-eslint 解析器是对 babel 解析器的包装使其与 ESLint 解析
    parser: 'babel-eslint',
  },

  // 此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    browser: true,
  },

  // 此项是用来配置标准的 js 风格，就是说写代码的时候要规范的写，如果你使用 vs-code 我觉得应该可以避免出错
  // extends: 'standard',

  globals: {
    NODE_ENV: false
  },

  // add your custom rules here
  'rules': {
    'genetator-start-spacing': 'off',

    'no-unused-expressions': ["error", { // 禁止无用的表达式
      "allowTernary": true,
      "allowShortCircuit": true
    }],
    'no-bitwise': ["error", { // 不允许使用位运算符
      "allow": ["~"]
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  }
}