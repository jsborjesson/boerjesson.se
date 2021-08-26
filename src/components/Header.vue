<template>
  <header class="flex items-center p-6 sm:p-12">
    <div class="w-8 h-8 sm:w-12 sm:h-12">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.208 132.292">
        <path d="M185.208 132.292h-79.375v-26.459h79.375zm0-52.917h-79.375V52.917h79.375zm0-52.917h-79.375V0h79.375zM132.292 0v132.292h-26.459V0zm52.916 0v132.292H158.75V0z" fill="#333"/>
        <path d="M79.51 119.085v-13.204h26.409V79.324H79.51V52.915h52.67v79.374H79.51zm52.782 13.207H52.917v-26.459h79.375zm0-79.375v79.375h-26.459V52.917zm-79.375 0h79.375v26.458H52.917zM79.375 0v79.375H52.917V0zM52.917 0h79.375v26.458H52.917z" fill="gray"/>
        <g>
        <path d="M0 119.063v-13.23h79.375v26.459H0zM52.917 0h26.458v132.292H52.917V0zM0 13.23V0h79.375v26.458H0z" fill="#ccc"/>
        </g>
      </svg>
    </div>
    <h1 class="flex-1 font-serif text-lg font-bold text-center whitespace-nowrap sm:text-left sm:ml-4 sm:text-2xl lg:text-3xl">
      Börjesson Solutions AB
    </h1>
    <div class="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12">
      <DarkMode />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import DarkMode from "./DarkMode.vue"

export default defineComponent({
  components: {
    DarkMode,
  }
})
</script>
