import chartPreview from './packages/preview/index.js'
const components = [
  chartPreview
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

// /* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
    install,
    chartPreview
}