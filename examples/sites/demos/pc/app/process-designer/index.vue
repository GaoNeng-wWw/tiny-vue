<template>
  <div class="process-designer-demo-wrapper">
    <process-designer />
  </div>
</template>

<script lang="ts">
import { ProcessDesigner } from '@opentiny/vue'
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-js.css'

import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
import '@bpmn-io/properties-panel/assets/properties-panel.css'

export default {
  components: { ProcessDesigner },
  setup() {
    return {}
  }
}
</script>

<style>
.process-designer-demo-wrapper {
  width: 100%;
  height: 500px;
}
</style>
