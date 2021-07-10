<template>
  <HelloWorld />
  <Tools />
  <Footer />
</template>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Tools from './components/Tools.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Tools,
    Footer,
  }
})
</script>
