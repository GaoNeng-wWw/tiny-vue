<template>
  <div class="clear-no-match-value">
    <div>
      <span>单选：</span>
      <tiny-select v-model="val" :clear-no-match-value="true" placeholder="请选择">
        <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
      </tiny-select>
    </div>
    <div>
      <span>多选：</span>
      <tiny-select v-model="multiVal" :clear-no-match-value="true" multiple placeholder="请选择">
        <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
      </tiny-select>
    </div>
  </div>
</template>

<script>
import { Select, Option } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  data() {
    return {
      options: [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭' }
      ],
      val: '11',
      multiVal: ['选项2', '11']
    }
  }
}
</script>

<style lang="less" scoped>
.clear-no-match-value {
  .tiny-select {
    width: 230px;
    margin-right: 20px;
    margin-bottom: 10px;
  }
}
</style>
