<template>
  <div>
    <div style="position: relative">
      <p>颜色值: {{ color }}</p>
      <p>颜色类型: {{ value }}</p>
      <tiny-color-picker v-model="color" :visible="visible" @confirm="onConfirm" @cancel="onCancel" :format="value" />
    </div>
    <tiny-select v-model="value">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script setup lang="ts">
import { TinyColorPicker, TinySelect, TinyOption } from '@opentiny/vue'
import { ref } from 'vue'

const color = ref('rgb(102,204,255)')
const visible = ref(false)
const options = ref(['hex', 'hsv', 'hsl', 'rgb'])
const value = ref('rgb')

const hidden = () => {
  visible.value = false
}
const onConfirm = () => {
  hidden()
}
const onCancel = () => {
  hidden()
}
</script>
