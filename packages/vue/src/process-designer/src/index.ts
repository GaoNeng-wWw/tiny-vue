import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'

const $constants = {}

export default defineComponent({
  name: $prefix + 'ProcessDesigner',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: String
  },
  setup(props, context) {
    return $setup({ props, context, template: () => PCTemplate })
  }
})
