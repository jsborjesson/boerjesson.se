<template>
  <div class="bg-gray-100 text-gray-800">
    <Brand />
    <Kvadrat />
    <Tools />
    <Footer />
  </div>
</template>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<script lang="ts">
import { defineComponent } from 'vue'

import Brand from './components/Brand.vue'
import Footer from './components/Footer.vue'
import Kvadrat from './components/Kvadrat.vue'
import Tools from './components/Tools.vue'

export default defineComponent({
  name: 'App',
  components: {
    Brand,
    Footer,
    Kvadrat,
    Tools,
  }
})
</script>
