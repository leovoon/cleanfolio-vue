<template>
  <div class="flex flex-col mt-3em items-center <md:items-start">
    <h1>Hi, I am <span class="about__name text-blue-primary dark:text-purple-dark">Leo Voon.</span></h1><h2 class="about__role mt-1.2em">
      A Front End Developer.
    </h2><p class="about__desc text-1rem mt-2.4em max-w-lg leading-5">
      Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.
    </p>
    <div class="flex mt-2.4em items-center">
      <BaseButton title="resume" class="mr-1em" />
      <a href="https://github.com" aria-label="github" class="inline-flex items-center mr-0.8em link--icon">
        <carbon-logo-github />
      </a>
      <a href="https://linkedin.com" aria-label="linkedin" class="inline-flex items-center mr-0.8em link--icon">
        <carbon-logo-linkedin />
      </a>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style>

</style>
