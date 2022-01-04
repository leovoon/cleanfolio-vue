<template>
  <header class="flex mx-auto max-w-screen-lg h-8em my-0 w-[95%] items-center justify-between <md:h-6em">
    <Logo />
    <nav class="flex justify-between items-center">
      <teleport to="#app">
        <ul v-if="showNav" class="bg-white-primary flex flex-col h-full list-none mr-1.5em w-full inset-0 justify-center items-center fixed dark:bg-purple-tertiary">
          <li v-for="item in menu" :key="item" class="mx-0 ml-1.5em my-2em  " @click="toggleNav()">
            <a :href="'#' + item" class="font-medium text-gray-darker lowercase block  dark:text-purple-light">{{ item }}</a>
          </li>
        </ul>
        <a v-if="showNav" class="m-1.5em mr-0.5em top-0 right-0 z-30 fixed  " @click="toggleNav()">
          <carbon-close class="link--icon" />
        </a>
      </teleport>
      <ul v-if="!showNav" class=" flex list-none mr-1.5em <sm:hidden ">
        <li v-for="item in menu" :key="item" class="mx-0 ml-1.5em my-2em">
          <a :href="'#' + item" class="font-medium text-gray-darker lowercase block  dark:text-purple-light">{{ item }}</a>
        </li>
      </ul>

      <button class="ml-1.5em !outline-none" @click="toggleDark()">
        <carbon-moon v-if="isDark" class="link--icon" />
        <carbon-sun v-else class="link--icon" />
      </button>

      <a class="ml-1.5em hidden <sm:block" @click="toggleNav()">
        <carbon-menu class="link--icon" />
      </a>
    </nav>
  </header>
</template>

<script setup lang='ts'>
import { useToggle } from '@vueuse/core'
import { isDark, toggleDark } from '@/composables'

const [showNav, toggleNav] = useToggle()

const menu = ['projects', 'skills', 'contact']
</script>
