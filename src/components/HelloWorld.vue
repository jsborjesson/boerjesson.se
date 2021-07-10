<template>
  <h1 class="text-4xl px-12 py-12 font-bold text-gray-900">Börjesson Consulting AB</h1>

  <section>
    <figure class="p-12">
      <blockquote>
        <p class="font-coustard text-8xl -mb-16">&quot;</p>
        <p style="text-indent: 3rem;">
          Jag tycker om att arbeta med system som gör skillnad där det spelar roll, och som behöver kunna skala och fungera stabilt under många år, därför hjälper jag företag att utveckla robusta system som effektivt löser verkliga problem och känns moderna att använda.
        </p>
      </blockquote>
      <figcaption class="mt-4 ml-4 italic">&mdash; Jimmy Börjesson</figcaption>
    </figure>
  </section>

  <section class="bg-black text-gray-100 p-12">
    <p style="text-indent: 3rem;">
      Jag är ansluten till Kvadrat, Sveriges lyckligaste konsulter. Vi erbjuder våra kunder en unik kombination av konsultens expertis och egenföretagarens engagemang, attityd och motivation att alltid lyckas. Kvadrat bildades 1988 och idag är vi ca 500 Kvadratare med kontor i Stockholm, Göteborg, Malmö, Linköping, Norrköping, Jönköping, Växjö, Örebro, Borlänge och Sundsvall.
    </p>
  </section>

  <section class="flex flex-wrap p-12 justify-center">
    <div v-for="tool in tools" :key="tool.name" class="w-20 h-20 m-6">
      <a :href="tool.link">
        <img
          :src="`/images/${tool.logo}`"
          :alt="`${tool.name} logo`" />
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Tool {
  name: string;
  link: string;
  logo: string;
}

const tools: Tool[] = [
  { name: "TypeScript", link: "https://www.typescriptlang.org/", logo: "typescript.svg" },
  { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", logo: "javascript.svg" },
  { name: "Vue", link: "https://vuejs.org/", logo: "vuejs.svg" },
  { name: "React", link: "", logo: "react.svg" },
  { name: "Jest", link: "", logo: "jest.svg" },
  { name: "Node.js", link: "", logo: "nodejs.svg" },
  { name: "Ruby", link: "", logo: "ruby.svg" },
  { name: "Rails", link: "", logo: "rails.svg" },
  { name: "Python", link: "", logo: "python.svg" },
  { name: "Django", link: "", logo: "django.svg" },
  { name: "Go", link: "", logo: "go.svg" },
  { name: "Elixir", link: "", logo: "elixir.svg" },
  { name: "Rust", link: "", logo: "rust.svg" },
  { name: "Postgres", link: "", logo: "postgresql.svg" },
  { name: "Git", link: "", logo: "git.svg" },
  { name: "GitHub", link: "", logo: "github.svg" },
  { name: "Vim", link: "", logo: "vim.svg" },
  { name: "VS Code", link: "", logo: "vscode.svg" },
  { name: "Docker", link: "", logo: "docker.svg" },
  { name: "Linux", link: "", logo: "linux.svg" },
]

export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      tools,
    }
  }
})
</script>
