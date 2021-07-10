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
  { name: "React", link: "https://reactjs.org/", logo: "react.svg" },
  { name: "Jest", link: "https://jestjs.io/", logo: "jest.svg" },
  { name: "Node.js", link: "https://nodejs.org/en/", logo: "nodejs.svg" },
  { name: "Ruby", link: "https://www.ruby-lang.org/en/", logo: "ruby.svg" },
  { name: "Rails", link: "https://rubyonrails.org/", logo: "rails.svg" },
  { name: "Python", link: "https://www.python.org/", logo: "python.svg" },
  { name: "Django", link: "https://www.djangoproject.com/", logo: "django.svg" },
  { name: "Go", link: "https://golang.org/", logo: "go.svg" },
  { name: "Elixir", link: "https://elixir-lang.org/", logo: "elixir.svg" },
  { name: "Rust", link: "https://www.rust-lang.org/", logo: "rust.svg" },
  { name: "PostgreSQL", link: "https://www.postgresql.org/", logo: "postgresql.svg" },
  { name: "Git", link: "https://git-scm.com/", logo: "git.svg" },
  { name: "GitHub", link: "https://github.com/", logo: "github.svg" },
  { name: "Vim", link: "https://www.vim.org/", logo: "vim.svg" },
  { name: "VS Code", link: "https://code.visualstudio.com/", logo: "vscode.svg" },
  { name: "Docker", link: "https://www.docker.com/", logo: "docker.svg" },
  { name: "Linux", link: "https://www.kernel.org/", logo: "linux.svg" },
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
