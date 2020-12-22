module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [
    [
      "import",
      {
        "libraryName": "bern-ui",//组件库名称
        "camel2DashComponentName": false,//关闭驼峰自动转链式
        "camel2UnderlineComponentName": false,//关闭蛇形自动转链式
        "style": (name) => {
          const cssName = name.split('/')[2];
          return `bern-ui/lib/style/${cssName}.css`
        }

      }
    ],
  ]
}
