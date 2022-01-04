<template>
  <section id="projects" class="mt-5em projects">
    <h2 class="text-center mb-1em uppercase">
      Projects
    </h2>
    <div class="max-w-screen-xl mb-1.5em flex justify-center">
      <select
        v-model="stackItem"
        class="border-white-tertiary dark:(bg-purple-secondary border-purple-dark text-purple-trans hover:text-purple-light) border-2 px-4 py-2"
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

    <div class="max-w-screen-lg my-0 mx-auto grid grid-custom gap-2em">
      <div
        v-for="({ title, description, stack, github, demo, imageUrl }, index) in filteredProjects"
        :key="index"
        class="my-0 mx-auto group overflow-hidden shadow-xl hover:(shadow-sm transform -translate-y-1) transition-all ease-in-out duration-500 ring-1 ring-opacity-20 ring-blue-primary text-center"
      >
        <div class="relative pb-2/3">
          <img
            class="absolute h-full group-hover:blur-0 filter transition-all blur-2 w-full object-cover"
            :src="imageUrl"
            :alt="title"
          >
        </div>
        <h3 class="mt-1em">
          {{ title }}
        </h3>
        <p class="p-2em mt-1em leading-5">
          {{ description }}
        </p>
        <ul
          class="flex flex-wrap justify-center my-1.2em mx-0 text-gray-darker dark:text-purple-light"
        >
          <li
            v-for="(item, stackId) in stack"
            :key="stackId"
            class="m-0.5em font-medium text-[.8rem]"
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
.grid-custom {
  grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
}
</style>
