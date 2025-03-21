/*
 * @Author: mengshuaihao
 * @Date: 2025-03-21 15:01:56
 * @LastEditors: mengshuaihao
 * @LastEditTime: 2025-03-21 15:08:33
 * @FilePath: \prettier-config-default\index.js
 * @Description:
 */
module.exports = {
  // 一行最多多少个字符
  printWidth: 160,
  // 使用单引号而不是双引号
  singleQuote: true,
  // 在对象或数组最后一个元素后面是否加逗号
  trailingComma: 'all',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // 标签的反尖括号需要换行
  bracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'ignore',
  // 换行符使用 lf
  endOfLine: 'lf',
  // 格式化嵌入的内容
  embeddedLanguageFormatting: 'auto',
  // 每个语句的末尾是否需要分号
  semi: false,
  // Tab 缩进的空格数
  tabWidth: 2,
  // 是否使用 tab 进行缩进
  useTabs: false,
  // vue 文件中的 script 和 style 内是否缩进
  vueIndentScriptAndStyle: false,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 是否缩进 JSX 中的子元素
  jsxBracketSameLine: false
}
