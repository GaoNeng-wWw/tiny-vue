# Use with Rsbuild

Rsbuild is build tool driven by Rspack. This artical will use Rsbuils create mininal TinyVue project

## Install

Before the start, you may need install [yarn](https://github.com/yarnpkg/yarn) or [pnpm](https://pnpm.io/zh)

```bash
pnpm create rsbuild
```

During the initialization, `create-rebuils` provide a series of templates are provided, here we choose the `Vue 3` template.

During this period, the tool will automatically initialize the project structure for us and install important dependencies (`TinyVue` has not been installed yet, we will install it in the next section)

## Install TinyVue

This section will install and introduce TinyVue from yarn, npm, pnpm, or bun

```bash
pnpm add @opentiny/vue
```

After installation, modify `rsbuild.cnfig.ts`

```typescript
import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'

export default defineConfig({
  plugins: [pluginVue()],
  source: {
    define: {
      'process.env': JSON.stringify({ ...process.env })
    }
  }
})
```

After the modification is completed, we will make the necessary changes `src/App.vue`

```html
<template>
  <div class="content">
    <h1>TinyVue x Rsbuild</h1>
    <p>Start building amazing things with Rsbuild.</p>
    <tiny-button-group>
      <tiny-button> Click Me </tiny-button>
    </tiny-button-group>
  </div>
</template>

<script lang="ts" setup>
  import { TinyButton, TinyButtonGroup } from '@opentiny/vue'
</script>

<style scoped>
  .content {
    display: flex;
    min-height: 100vh;
    line-height: 1.1;
    text-align: center;
    flex-direction: column;
    justify-content: center;
  }

  .content h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }

  .content p {
    font-size: 1.2rem;
    font-weight: 400;
    opacity: 0.5;
  }
</style>
```

After the modification is completed, when we run `pnpm dev` and the following image appears, it means the startup is successful

![alt text](../resource/tinyvue-x-rsbuild.png)

You can go to [here](https://github.com/GaoNeng-wWw/tiny-vue-rsbuild.git) Find examples of this tutorial in
