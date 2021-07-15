<template>
  <section class="p-12">
    <p class="mb-6 italic">
      Efter {{ yearsExperience }} år som utvecklare är jag van att snabbt sätta mig in i nya tekniker och använda verktyg på deras respektive mest effektiva sätt. Nedan följer ett axplock av tekniker jag redan är van att arbeta med, ser du flera du känner igen är chansen stor att jag kan hjälpa just er!
    </p>

    <div class="flex flex-wrap justify-center">
      <a v-for="tool in tools" :key="tool.name" :href="tool.link">
        <figure class="w-20 h-20 m-6 transform transition-all duration-50 opacity-75 hover:opacity-100 hover:scale-110">
          <img
            :src="`/images/${tool.logo}`"
            :alt="`${tool.name} logo`" />
          <figcaption class="text-center select-none mt-2">{{ tool.name }}</figcaption>
        </figure>
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
  { name: "AWS", link: "https://aws.amazon.com/", logo: "aws.svg" },
  { name: "TailwindCSS", link: "https://tailwindcss.com/", logo: "tailwindcss.svg" },
]

const startedProgramming = 2009;

export default defineComponent({
  data() {
    return {
      tools,
      yearsExperience: new Date().getFullYear() - startedProgramming,
    }
  },
})
</script>

