<template>
  <section id="skills" class="mt-5em">
    <h2 class="text-center mb-1em uppercase">
      Skills
    </h2>
    <ul class="max-w-md w-[95%]  mx-auto my-0 flex justify-center flex-wrap">
      <li v-for="(skill, index) in skills" :key="index" class="btn btn-plain m-0.5em">
        {{ skill }}
      </li>
    </ul>
  </section>
</template>

<script lang='ts' setup>
const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue 3', 'Vuex', 'Pinia', 'Jest', 'Tailwind CSS', 'Bootstrap', 'JQuery', 'Git']
</script>
