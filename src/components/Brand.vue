<template>
  <div class="p-12 flex items-start justify-between">
    <div class="flex flex-col space-y-4 items-start sm:flex-row sm:space-y-0 sm:items-center">
      <svg class="mr-4 w-8 h-8 lg:w-12 lg:h-12 rounded" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 100V0l37.5 25L75 50 37.5 75z" fill-rule="evenodd" fill="#222" />
        <path d="M100 0L62.5 25 25 50l37.5 25 37.5 25V66.667L75 50l25-16.667V0z" fill="#bbb" fill-rule="evenodd"/>
      </svg>
      <h1 class="mr-8 text-xl font-serif font-bold md:text-3xl lg:text-4xl col-span-4">
        Börjesson Consulting AB
      </h1>
    </div>
    <ThemeToggle />
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

