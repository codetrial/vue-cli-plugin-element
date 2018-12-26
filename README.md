# vue-cli-plugin-element

[![Version](https://img.shields.io/npm/v/@codetrial/vue-cli-plugin-element.svg)](https://www.npmjs.com/package/@codetrial/vue-cli-plugin-element)
[![License](https://img.shields.io/npm/l/@codetrial/vue-cli-plugin-element.svg)](https://www.npmjs.com/package/@codetrial/vue-cli-plugin-element)
[![Dependencies](https://img.shields.io/david/codetrial/vue-cli-plugin-element.svg)](https://www.npmjs.com/package/@codetrial/vue-cli-plugin-element)

Quickly build a backend system with vue-cli and element-ui in seconds.

This project is not only a vue-cli plugin but also a vue-cli preset. Have fun!

:us: English | [:cn: 简体中文](README.zh-CN.md)

## Getting Started

### Prerequisites

You must install Vue CLI 3 before you start.

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### Install

You can create your project directly via preset, which already includes configurations such as ESLint and other plugins.

```bash
vue create --preset codetrial/vue-cli-plugin-element your-awesome-project
```

If you don't want to use the preset , you can manually create an empty project via vue-cli.

```bash
# make sure the following features are selected:
# - Babel
# - PWA
# - Router
# - Vuex
# - CSS Pre-processors
# - Linter - Formatter
vue create your-awesome-project
```

Then add the plugin to your project via vue.

```bash
vue add @codetrial/element
```

## Docs

The full documentation: [:book: codetrial.github.io/element-admin](https://codetrial.github.io/element-admin)

## Example

A complete example project: [:zap: @codetrial/element-admin](https://github.com/codetrial/element-admin)

## Core Features

- :camera: Minimal dependencies
- :tv: Project Structure
- :telephone_receiver: View Layout
- :pager: Data Processing Layer
- :watch: Authorization
- :radio: Error Pages
- :mag_right: List Example
- :ghost: Form Example

## Contributing

Looking forward to your pull requests.

## Built With

- [Vue.js](https://github.com/vuejs/vue)
- [ElementUI](https://github.com/ElemeFE/element)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 - present, Felix Yang
