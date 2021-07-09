<template>
  <h1 class="text-4xl px-12 font-bold">Börjesson Consulting AB</h1>

  <figure class="p-12">
    <blockquote>
      <p class="font-coustard text-8xl -mb-16">&quot;</p>
      <p style="text-indent: 3rem;">
        Jag tycker om att arbeta med system som gör skillnad där det spelar roll, och som behöver kunna skala och fungera stabilt under många år, därför hjälper jag företag att utveckla robusta system som effektivt löser verkliga problem och känns moderna att använda.
      </p>
    </blockquote>
    <figcaption class="mt-4 ml-4 italic">&mdash; Jimmy Börjesson</figcaption>
  </figure>

  <section class="bg-kvadrat text-gray-100 p-12">
    <p style="text-indent: 3rem;">
      Jag är ansluten till Kvadrat, Sveriges lyckligaste konsulter. Vi erbjuder våra kunder en unik kombination av konsultens expertis och egenföretagarens engagemang, attityd och motivation att alltid lyckas. Kvadrat bildades 1988 och idag är vi ca 500 Kvadratare med kontor i Stockholm, Göteborg, Malmö, Linköping, Norrköping, Jönköping, Växjö, Örebro, Borlänge och Sundsvall.
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
})
</script>
