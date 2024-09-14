<template>
  <div class="tiny-process-designer">
    <div id="render" class="tiny-process-designer__render"></div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/process-designer/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { onMounted } from 'vue'
import { useBPMN } from '@opentiny/tiny-bpmn'

export default defineComponent({
  emits: [],
  props: [...props],
  setup(props, context) {
    onMounted(() => {
      useBPMN({
        container: '#render'
      })
    })
    return setup({ props, context, renderless, api })
  }
})
</script>
