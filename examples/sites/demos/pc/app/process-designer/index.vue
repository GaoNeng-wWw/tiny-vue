<template>
  <div class="process-designer-demo-wrapper">
    <process-designer @mounted="onMounted" />
  </div>
</template>

<script setup lang="ts">
import { ProcessDesigner } from '@opentiny/vue'

const onMounted = (expose) => {
  console.log(expose)
}
</script>

<style>
.process-designer-demo-wrapper {
  width: 100%;
  height: 500px;
}
</style>
