<template>
  <section class="p-6 sm:p-12">
    <p class="mb-6 italic">
      Efter {{ yearsExperience }} år som utvecklare är jag van att snabbt sätta mig in i nya tekniker och använda verktyg på deras respektive mest effektiva sätt. Nedan följer ett axplock av tekniker jag redan är van att arbeta med, ser du flera du känner igen är chansen stor att jag kan hjälpa just er!
    </p>

    <div class="flex flex-wrap justify-center">
      <a v-for="tool in tools" :key="tool.name" :href="tool.link">
        <figure class="w-20 h-20 m-6 opacity-75 transform transition-all duration-50 hover:opacity-100 hover:scale-110">
          <img
            :src="tool.logo"
            :alt="`${tool.name} logo`" />
          <figcaption class="mt-2 text-center select-none">{{ tool.name }}</figcaption>
        </figure>
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import awsLogo from "../assets/tools/aws.svg"
import djangoLogo from "../assets/tools/django.svg"
import dockerLogo from "../assets/tools/docker.svg"
import elixirLogo from "../assets/tools/elixir.svg"
import gitLogo from "../assets/tools/git.svg"
import githubLogo from "../assets/tools/github.svg"
import goLogo from "../assets/tools/go.svg"
import javascriptLogo from "../assets/tools/javascript.svg"
import jestLogo from "../assets/tools/jest.svg"
import linuxLogo from "../assets/tools/linux.svg"
import nodejsLogo from "../assets/tools/nodejs.svg"
import postgresqlLogo from "../assets/tools/postgresql.svg"
import pythonLogo from "../assets/tools/python.svg"
import railsLogo from "../assets/tools/rails.svg"
import reactLogo from "../assets/tools/react.svg"
import rubyLogo from "../assets/tools/ruby.svg"
import rustLogo from "../assets/tools/rust.svg"
import tailwindcssLogo from "../assets/tools/tailwindcss.svg"
import typescriptLogo from "../assets/tools/typescript.svg"
import vimLogo from "../assets/tools/vim.svg"
import vscodeLogo from "../assets/tools/vscode.svg"
import vuejsLogo from "../assets/tools/vuejs.svg"

interface Tool {
  name: string;
  link: string;
  logo: string;
}

const tools: Tool[] = [
  { name: "TypeScript", link: "https://www.typescriptlang.org/", logo: typescriptLogo },
  { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", logo: javascriptLogo },
  { name: "Vue", link: "https://vuejs.org/", logo: vuejsLogo },
  { name: "React", link: "https://reactjs.org/", logo: reactLogo },
  { name: "Jest", link: "https://jestjs.io/", logo: jestLogo },
  { name: "Node.js", link: "https://nodejs.org/en/", logo: nodejsLogo },
  { name: "Ruby", link: "https://www.ruby-lang.org/en/", logo: rubyLogo },
  { name: "Rails", link: "https://rubyonrails.org/", logo: railsLogo },
  { name: "Python", link: "https://www.python.org/", logo: pythonLogo },
  { name: "Django", link: "https://www.djangoproject.com/", logo: djangoLogo },
  { name: "Go", link: "https://golang.org/", logo: goLogo },
  { name: "Elixir", link: "https://elixir-lang.org/", logo: elixirLogo },
  { name: "Rust", link: "https://www.rust-lang.org/", logo: rustLogo },
  { name: "PostgreSQL", link: "https://www.postgresql.org/", logo: postgresqlLogo },
  { name: "Git", link: "https://git-scm.com/", logo: gitLogo },
  { name: "GitHub", link: "https://github.com/", logo: githubLogo },
  { name: "Vim", link: "https://www.vim.org/", logo: vimLogo },
  { name: "VS Code", link: "https://code.visualstudio.com/", logo: vscodeLogo },
  { name: "Docker", link: "https://www.docker.com/", logo: dockerLogo },
  { name: "Linux", link: "https://www.kernel.org/", logo: linuxLogo },
  { name: "AWS", link: "https://aws.amazon.com/", logo: awsLogo },
  { name: "TailwindCSS", link: "https://tailwindcss.com/", logo: tailwindcssLogo },
]

const yearsExperience = new Date().getFullYear() - 2009;

export default defineComponent({
  data() {
    return {
      tools,
      yearsExperience,
    }
  },
})
</script>
