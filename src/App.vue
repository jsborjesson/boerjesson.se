<template>
  <div class="flex flex-col min-h-screen text-gray-800 bg-gray-100 dark:bg-gray-700 dark:text-gray-200">
    <div class="flex-auto mx-auto max-w-screen-2xl">
      <Header />

      <main>
        <div class="lg:px-12 lg:grid lg:grid-cols-2 lg:gap-12">
          <Tagline />
          <Kvadrat />
        </div>

        <Tools />
        <About />
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

import About from './components/About.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Kvadrat from './components/Kvadrat.vue'
import Tagline from './components/Tagline.vue'
import Tools from './components/Tools.vue'

export default defineComponent({
  name: 'App',
  components: {
    About,
    Footer,
    Header,
    Kvadrat,
    Tagline,
    Tools,
  }
})
</script>
