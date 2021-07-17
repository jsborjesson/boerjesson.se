<template>
  <div class="flex px-3 py-6 sm:p-12 items-center space-x-4">
    <div class="w-8 h-8 lg:h-10 lg:w-10">
      <svg class="dark:hidden rounded" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 100V0l37.5 25L75 50 37.5 75z" fill-rule="evenodd" fill="#222" />
        <path d="M100 0L62.5 25 25 50l37.5 25 37.5 25V66.667L75 50l25-16.667V0z" fill="#bbb" fill-rule="evenodd"/>
      </svg>
      <svg class="hidden dark:block rounded" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 100V0l37.5 25L75 50 37.5 75z" fill-rule="evenodd" fill="#bbb" />
        <path d="M100 0L62.5 25 25 50l37.5 25 37.5 25V66.667L75 50l25-16.667V0z" fill="#222" fill-rule="evenodd"/>
      </svg>
    </div>
    <h1 class="flex-1 font-serif font-bold whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-3xl">
      Börjesson Consulting AB
    </h1>
    <div class="">
      <ThemeToggle />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import ThemeToggle from "./ThemeToggle.vue"

export default defineComponent({
  components: {
    ThemeToggle,
  }
})
</script>

