<script>
import { renderless, api } from '@opentiny/vue-renderless/process-designer/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { useBPMN, BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } from '@opentiny/tiny-bpmn'
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-js.css'

import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
import '@bpmn-io/properties-panel/assets/properties-panel.css'

export default defineComponent({
  emits: ['importXmlError', 'importXmlSuccess', 'success', 'mounted'],
  props: [...props, 'getData', 'additionalModules', 'modeler'],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      extendOptions: { useBPMN, BpmnPropertiesPanelModule, BpmnPropertiesProviderModule }
    })
  }
})
</script>

<template>
  <div class="tiny-process-designer">
    <div ref="render" id="render" class="tiny-process-designer__render"></div>
    <div ref="properties" id="properties"></div>
  </div>
</template>
