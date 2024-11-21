<template>
  <div>
    <p>颜色值: {{ color }}</p>
    <p>颜色类型: {{ value }}</p>
    <tiny-button @click="changeVisible"> Toggle </tiny-button>
    <tiny-select v-model="value">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <div style="position: relative">
      <tiny-color-select-panel
        v-model="color"
        :visible="visible"
        @confirm="onConfirm"
        @cancel="onCancel"
        :format="value"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TinySelect, TinyOption, TinyColorSelectPanel, TinyButton } from '@opentiny/vue'
import { ref } from 'vue'

const color = ref('rgb(102,204,255)')
const visible = ref(false)
const options = ref([
  { value: 'hex', label: 'Hex' },
  { value: 'rgb', label: 'rgb' },
  { value: 'hsl', label: 'hsl' },
  { value: 'hsv', label: 'hsv' }
])
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
const changeVisible = () => {
  visible.value = !visible.value
}
</script>
