const fs = require('fs')

const removeFiles = (files = []) => {
  files.forEach(path => {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path)
    }
  })
}

module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      'element-ui': '^2.4.11'
    }
  })

  api.injectImports(api.entryFile, `import './registerElementUI'`)

  api.render('./template/structure')

  api.onCreateComplete(() => {
    removeFiles([
      api.resolve('src/components/HelloWorld.vue'),
      api.resolve('src/store.js')
    ])
  })
}
