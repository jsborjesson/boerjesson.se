<template>
  <h1>Börjesson Consulting AB</h1>

  <figure>
    <blockquote>
      Jag tycker om att arbeta med system som gör skillnad där det spelar roll, och som behöver kunna skala och fungera stabilt under många år, därför hjälper jag företag att utveckla robusta system som effektivt löser verkliga problem och känns moderna att använda.
    </blockquote>
    <figcaption>&mdash; Jimmy Börjesson</figcaption>
  </figure>

  <section>
    <p>
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
