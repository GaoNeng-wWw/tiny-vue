import type { PropType } from '@opentiny/vue-common'
import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'
import '@opentiny/vue-theme/process-designer/index.less'
import type { Modeler } from '@opentiny/tiny-bpmn'

const $constants = {}

export interface ProcessDesignerProps {
  getData: () => Promise<string>
  additionModules?: any[]
  modeler?: Modeler
  data?: string
}

export const processDesignerProps = {
  _constants: {
    type: Object,
    default: () => $constants
  },
  getData: {
    type: Function as PropType<() => Promise<string>>,
    required: true
  },
  additionModules: {
    type: Array as PropType<any[]>,
    requrie: false
  },
  modeler: {
    type: Object as PropType<Modeler>,
    require: false
  },
  data: {
    type: String,
    requrie: false
  }
}

export default defineComponent({
  name: $prefix + 'ProcessDesigner',
  props: {
    ...$props
  },
  setup(props, context) {
    return $setup({ props, context, template: () => PCTemplate })
  }
})
