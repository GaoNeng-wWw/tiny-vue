<template>
  <tiny-checkbox v-model="checked" border>
    <tiny-tooltip content="备选项1 提示文字 提示文字" effect="light" placement="top">
      <div class="content-overflow">备选项1 提示文字 提示文字</div>
    </tiny-tooltip>
  </tiny-checkbox>
</template>

<script>
import { Checkbox, Tooltip } from '@opentiny/vue'

export default {
  components: {
    TinyCheckbox: Checkbox,
    TinyTooltip: Tooltip
  },
  data() {
    return {
      checked: false
    }
  }
}
</script>

<style scoped>
.content-overflow {
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}
</style>
