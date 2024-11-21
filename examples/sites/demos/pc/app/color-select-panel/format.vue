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

<script>
import { TinyColorSelectPanel, TinyButton, TinySelect, TinyOption } from '@opentiny/vue'

export default {
  components: {
    TinyColorSelectPanel,
    TinyButton,
    TinySelect,
    TinyOption
  },
  data() {
    return {
      color: 'rgb(102,204,255)',
      visible: false,
      predefine: new Array(8).fill(0).map(() => this.randomHex()),
      options: [
        { value: 'hex', label: 'Hex' },
        { value: 'rgb', label: 'rgb' },
        { value: 'hsl', label: 'hsl' },
        { value: 'hsv', label: 'hsv' }
      ],
      value: 'rgb'
    }
  },
  methods: {
    changeVisible() {
      this.visible = !this.visible
    },
    hidden() {
      this.visible = false
    },
    onConfirm() {
      this.hidden()
    },
    onCancel() {
      this.hidden()
    },
    randomHex() {
      return (
        '#' +
        Math.floor(Math.random() * 0xffffff)
          .toString(16)
          .padEnd(6, '0')
      )
    }
  }
}
</script>
