import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

const $constants = {}

export default defineComponent({
  name: $prefix + 'ColorSelectPanel',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: String,
    visible: Boolean,
    alpha: Boolean,
    history: Array,
    predefine: Array,
    format: {
      type: String,
      default: 'hex',
      validator(val: string) {
        // if is hexa, rgba, hsva, hsl will throw warning message
        // Becuase should use `alpha` prop if want enable alpha
        if (val[val.length - 1] === 'a') {
          console.warn('If you want enable alpha, You should set `alpha` prop to true')
        }
        return ['hsv', 'hsl', 'rgb', 'hex'].includes(val)
      }
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
