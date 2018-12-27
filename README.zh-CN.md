# vue-cli-plugin-element

[![Version](https://img.shields.io/npm/v/@codetrial/vue-cli-plugin-element.svg)](https://www.npmjs.com/package/@codetrial/vue-cli-plugin-element)
[![License](https://img.shields.io/npm/l/@codetrial/vue-cli-plugin-element.svg)](https://www.npmjs.com/package/@codetrial/vue-cli-plugin-element)
[![Dependencies](https://img.shields.io/david/codetrial/vue-cli-plugin-element.svg)](https://www.npmjs.com/package/@codetrial/vue-cli-plugin-element)

使用 vue-cli 及 element-ui 闪电般构建一个后台管理系统。

这个项目不仅是一个 vue-cli 插件，也是一个 vue-cli preset，希望能够帮到你！

:cn: 简体中文 | [:us: English](README.md)

## 入门指南

### 前置依赖

在开始前，你需要先安装 Vue CLI 3：

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### 安装

你可以通过 preset 的方式直接创建你的项目，它已经包含了 ESLint 等插件的配置。

```bash
vue create --preset codetrial/vue-cli-plugin-element your-awesome-project
```

如果你不想使用 preset 的方式，你也可以先通过 vue-cli 手动创建一个空的项目。

```bash
# 确保你创建的项目选择了以下功能：
# - Babel
# - PWA
# - Router
# - Vuex
# - CSS Pre-processors
# - Linter - Formatter
vue create your-awesome-project
```

然后通过 vue 将插件添加到你的项目中。

```bash
vue add @codetrial/element
```

## 文档

完整的参考文档：[:book: codetrial.github.io/element-admin](https://codetrial.github.io/element-admin)

## 示例

一个使用该插件的完整示例：[:zap: @codetrial/element-admin](https://github.com/codetrial/element-admin)

在线预览：[:telescope: element-admin.now.sh/](https://element-admin.now.sh/)

## 核心功能

:camera: **最小依赖**：仅依赖 Vue 官方库及 ElementUI 组件库，未额外引入其它第三方库，为你提供自由发挥的空间。

:tv: **目录结构**：根据项目实战经验，设计了合理、清晰的目录结构。

:telephone_receiver: **页面布局**：使用 Vue Router 嵌套路由及 ElementUI 内置组件进行布局。

:pager: **数据处理**：添加独立的 api 及 service 层，将业务逻辑从组件中抽离。

:watch: **权限控制**：为路由添加配置式拦截器，默认支持用户登录鉴权及角色鉴权。

:radio: **列表示例**：一个相对比较完整的列表页示例，包含字段查询（过滤），字段排序，页码跳转，批量操作等等。

:mag_right: **表单示例**：一个相对比较完整的表单页示例，包含表单校验、提交等操作。

:ghost: **错误页面**：内置简单的（其实是偷懒） 403、404 及 500 错误页。

## 贡献

期待你的 `pull requests`。如果你觉得有帮助，还请多多反馈！

## 技术栈

- [Vue.js](https://github.com/vuejs/vue)
- [ElementUI](https://github.com/ElemeFE/element)

## 许可

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 - present, Felix Yang
