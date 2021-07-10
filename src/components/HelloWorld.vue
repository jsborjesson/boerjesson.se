<template>
  <h1 class="text-4xl px-12 py-12 font-serif font-bold text-gray-900">Börjesson Consulting AB</h1>

  <section>
    <figure class="p-12">
      <blockquote>
        <p class="font-serif text-6xl -mb-12 text-gray-800">&quot;</p>
        <p style="text-indent: 2.5rem;">
          Jag tycker om att arbeta med system som gör skillnad där det spelar roll, och som behöver kunna skala och fungera stabilt under många år, därför hjälper jag företag att utveckla robusta system som effektivt löser verkliga problem och känns moderna att använda.
        </p>
      </blockquote>
      <figcaption class="mt-6 text-gray-800 font-cursive text-xl text-right">&mdash; Jimmy Börjesson</figcaption>
    </figure>
  </section>

  <section class="bg-kvadrat text-gray-100 p-12">
    <a href="https://www.kvadrat.se/">
      <img class="w-40 mb-6" src="/images/kvadrat.svg" alt="Kvadrat logo" />
    </a>

    <p style="text-indent: 2.5rem;">
      Jag är ansluten till <strong>Kvadrat</strong>, Sveriges lyckligaste konsulter. Vi erbjuder våra kunder en unik kombination av konsultens expertis och egenföretagarens engagemang, attityd och motivation att alltid lyckas. Kvadrat bildades 1988 och idag är vi ca 500 Kvadratare med kontor i Stockholm, Göteborg, Malmö, Linköping, Norrköping, Jönköping, Växjö, Örebro, Borlänge och Sundsvall.
    </p>

    <div class="flex flex-col justify-end space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 mt-6">
      <a
        href="https://www.kvadrat.se/anlita-kvadrat/hitta-konsult/jimmy-borjesson/" alt="CV Jimmy Börjesson"
        class="flex py-3 px-6 bg-white text-black font-bold rounded"
      >
        <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
        </svg>
        Läs mitt CV
      </a>
      <a
        href="https://www.kvadrat.se/anlita-kvadrat/hitta-konsult/jimmy-borjesson/" alt="CV Jimmy Börjesson"
        class="flex py-3 px-6 bg-white text-black font-bold rounded"
      >
        <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4l-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z"/>
        </svg>
        CV som PDF
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
})
</script>
