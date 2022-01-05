<template>
  <section id="projects" class="mt-5em projects">
    <h2 class="text-center mb-1em uppercase">
      Projects
    </h2>
    <div class="flex max-w-screen-xl mb-1.5em justify-center">
      <select
        v-model="stackItem"
        class="border-white-tertiary border-2 py-2 px-4 dark:(bg-purple-secondary border-purple-dark text-purple-trans hover:text-purple-light) "
      >
        <option
          v-for="(stack, id) in stackArray"
          :key="id"
          class="bg-blue-primary bg-opacity-20"
          :value="stack"
        >
          {{ stack }}
        </option>
      </select>
    </div>

    <div class="grid-custom sm:mx-auto sm:max-w-screen-lg sm:my-0 sm:grid sm:gap-2em <sm:pb-14 <sm:flex <sm:w-full <sm:gap-6 <sm:snap <sm:snap-x <sm:relative <sm:snap-mandatory <sm:overflow-x-auto">
      <div
        v-for="({ title, description, stack, github, demo, imageUrl }, index) in filteredProjects"
        :key="index"
        class="mx-auto  shadow-xl my-0 ring-blue-primary text-center transition-all ease-in-out ring-1 ring-opacity-20 duration-500 group overflow-hidden <sm:max-h-full <sm:flex-shrink-0 <sm:max-w-72 <sm:snap-start <sm:inline-block hover:(shadow-sm transform -translate-y-1) "
      >
        <div class="pb-2/3 relative">
          <img
            class="h-full object-cover w-full transition-all absolute filter blur-2 group-hover:blur-0"
            :src="imageUrl"
            :alt="title"
          >
        </div>
        <h3 class="mt-1em">
          {{ title }}
        </h3>
        <p class="mt-1em p-2em leading-5 <sm:p-0.5em">
          {{ description }}
        </p>
        <ul
          class="flex flex-wrap my-1.2em mx-0 text-gray-darker justify-center dark:text-purple-light"
        >
          <li
            v-for="(item, stackId) in stack"
            :key="stackId"
            class="font-medium m-0.5em text-[.8rem]"
          >
            {{ item }}
          </li>
        </ul>
        <a :href="github" aria-label="source code" class="inline-block link--icon">
          <carbon-logo-github />
        </a>
        <a :href="demo" aria-label="source code" class="inline-block link--icon">
          <gridicons-external />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import projects from '@/projects.json'
const stackItem = ref('All')
const stackArray = [
  'All',
  ...projects.reduce((acc, project) => {
    project.stack.forEach((item) => {
      if (!acc.includes(item)) acc.push(item)
    })
    return acc
  }, [] as string[]),
]

const filteredProjects = computed(() => {
  if (stackItem.value === 'All') return projects
  return projects.filter((project) => {
    return project.stack.includes(stackItem.value)
  })
})
</script>

<style>
@media  only screen and (min-width: 667px) {
.grid-custom {
  grid-template-columns: repeat(auto-fill, minmax(16em, 1fr));
}
}

</style>
