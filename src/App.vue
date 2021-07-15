<template>
  <div class="flex flex-col min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
    <div class="max-w-screen-2xl mx-auto flex-auto">
      <header>
        <Brand />
      </header>

      <main>
        <div class="lg:px-12 lg:grid lg:grid-cols-2 lg:gap-12">
          <Tagline />
          <Kvadrat />
        </div>
        <Tools />
      </main>
    </div>

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
