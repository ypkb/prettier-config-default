# prettier-config-default

这是一个开箱即用的 Prettier 配置包，帮助你快速在项目中设置代码格式化规则。

## 安装

```bash
# 使用 npm
npm install --save-dev prettier prettier-config-default

# 使用 yarn
yarn add --dev prettier prettier-config-default

# 使用 pnpm
pnpm add -D prettier prettier-config-default
```

## 使用方法

### 1. 安装 VSCode Prettier 插件（推荐）

1. 在 VSCode 扩展商店中搜索并安装 "Prettier - Code formatter"
2. 在 VSCode 设置中启用 "Format On Save"（保存时自动格式化）:
   - 打开设置（Ctrl+,）
   - 搜索 "Format On Save"
   - 勾选 "Editor: Format On Save"

### 2. 配置 Prettier

你可以选择以下任意一种方式配置：

#### 2.1 在 package.json 中配置（推荐）

在你的 `package.json` 中添加：

```json
{
  "prettier": "prettier-config-default"
}
```

#### 2.2 使用 .prettierrc.js

创建 `.prettierrc.js` 文件并添加：

```js
module.exports = require('prettier-config-default')
```

#### 2.3 使用 .prettierrc

创建 `.prettierrc` 文件并添加：

```json
"prettier-config-default"
```

### 3. 自定义配置

如果你想要覆盖部分配置，可以：

#### 3.1 在 .prettierrc.js 中覆盖

```js
module.exports = {
  ...require('prettier-config-default'),
  semi: false, // 不使用分号
  printWidth: 80, // 修改每行最大长度
  singleQuote: false // 使用双引号
  // 其他自定义配置...
}
```

#### 3.2 在 .prettierrc 中覆盖

```json
{
  "extends": "prettier-config-default",
  "semi": false,
  "printWidth": 80,
  "singleQuote": false
}
```

### 4. 命令行使用

在 `package.json` 中添加格式化脚本：

```json
{
  "scripts": {
    "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\"",
    "format:check": "prettier --check \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\""
  }
}
```

然后可以使用以下命令：

```bash
# 格式化所有文件
npm run format

# 检查文件是否已格式化
npm run format:check
```

### 5. Git 集成（可选）

为了确保提交的代码都是格式化过的，你可以配置 husky 和 lint-staged：

1. 安装依赖：

```bash
npm install --save-dev husky lint-staged
```

2. 在 package.json 中添加配置：

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,json,css,scss,md}": ["prettier --write"]
  }
}
```

## 配置说明

这个配置包包含以下规则：

- `printWidth`: 160 - 每行代码最大长度
- `singleQuote`: true - 使用单引号
- `trailingComma`: 'all' - 多行时尽可能打印尾随逗号
- `bracketSpacing`: true - 对象字面量中的括号前后打印空格
- `bracketSameLine`: false - 多行 HTML 元素的 `>` 放在最后一行的末尾
- `arrowParens`: 'always' - 箭头函数始终包含圆括号
- `semi`: true - 语句末尾使用分号
- `tabWidth`: 2 - 缩进使用 2 个空格
- `useTabs`: false - 使用空格而不是制表符缩进
- 更多配置详见代码...

## 常见问题

### 1. 格式化没有生效？

- 确保已安装 Prettier VSCode 插件
- 检查 VSCode 是否将 Prettier 设置为默认格式化工具
- 尝试重启 VSCode

### 2. 与 ESLint 冲突？

安装 `eslint-config-prettier` 来禁用所有与 Prettier 冲突的 ESLint 规则：

```bash
npm install --save-dev eslint-config-prettier
```

然后在 `.eslintrc` 中添加：

```json
{
  "extends": ["prettier"]
}
```

## 许可证

MIT

## 贡献

欢迎提交 Issue 和 Pull Request！
