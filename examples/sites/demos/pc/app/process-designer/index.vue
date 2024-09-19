<template>
  <div class="process-designer-demo-wrapper">
    <process-designer :data="data" />
  </div>
</template>

<script lang="ts">
import { ProcessDesigner } from '@opentiny/vue'
import { ref } from 'vue'

export default {
  components: { ProcessDesigner },
  setup() {
    const data = ref(`
<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="17.7.1">
  <process id="Process_1" isExecutable="false" />
  <bpmndi:BPMNDiagram id="BpmnDiagram_1">
    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1" />
  </bpmndi:BPMNDiagram>
</definitions>
  `)
    return {
      data
    }
  }
}
</script>

<style>
.process-designer-demo-wrapper {
  width: 100%;
  height: 500px;
}
</style>
