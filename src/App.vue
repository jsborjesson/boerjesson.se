<template>
  <HelloWorld />
  <Tools />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Tools from './components/Tools.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Tools,
  }
})
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
