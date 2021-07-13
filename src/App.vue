<template>
  <div class="flex flex-col min-h-screen bg-gray-100 text-gray-800">
    <header>
      <Brand />
    </header>

    <main class="flex-auto">
      <Tagline />
      <Kvadrat />
      <Tools />
    </main>

    <footer>
      <Footer />
    </footer>
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
import Tagline from './components/Tagline.vue'
import Tools from './components/Tools.vue'

export default defineComponent({
  name: 'App',
  components: {
    Brand,
    Footer,
    Kvadrat,
    Tagline,
    Tools,
  }
})
</script>
