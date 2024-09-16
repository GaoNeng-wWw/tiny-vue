export default {
  column: 2,
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-us': 'Basic Usage'
      },
      desc: {
        'zh-CN': '',
        'en-US': ''
      },
      codeFiles: ['index.vue']
    },
    {
      demoId: 'getter',
      name: {
        'zh-CN': '远程获取',
        'en-US': 'Getter'
      },
      desc: {
        'zh-CN': '通过传入getData函数, 实现process-designer的远程获取功能',
        'en-US': ''
      },
      codeFiles: ['getter.vue']
    },
    {
      demoId: 'custom',
      name: {
        'zh-CN': '自定义',
        'en-US': 'custom'
      },
      desc: {
        'zh-CN': '通过传入Modeler类, 从而实现自定义效果',
        'en-US': 'By passing in the Modeler class, custom effects can be achieved'
      },
      codeFiles: ['custom-modeler.vue']
    },
    {
      demoId: 'additional-modules',
      name: {
        'zh-CN': '追加模块',
        'en-US': 'additional modules'
      },
      desc: {
        'zh-CN': '通过设置<code>additional-modules</code>属性来配置追加模块, 本示例追加了小地图模块',
        'en-US': ''
      },
      codeFiles: ['additional-modules.vue']
    }
  ]
}
