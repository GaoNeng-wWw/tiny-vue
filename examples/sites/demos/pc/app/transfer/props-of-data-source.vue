<template>
  <tiny-transfer v-model="value" :data="data" :props="{ key: 'value', label: 'desc' }"></tiny-transfer>
</template>

<script lang="jsx">
import { Transfer } from '@opentiny/vue'

export default {
  components: {
    TinyTransfer: Transfer
  },
  data() {
    const generateData = () => {
      const data = []

      for (let i = 1; i <= 15; i++) {
        data.push({
          value: i,
          desc: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }

      return data
    }

    return {
      data: generateData(),
      value: [1, 4]
    }
  }
}
</script>
