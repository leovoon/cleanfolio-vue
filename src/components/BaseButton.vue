<template>
  <button
    class="border border-2 text-center px-4 py-2 transition-colors ease-out cursor-pointer text-blue-primary border-blue-primary dark:(border-purple-dark text-purple-dark hover:text-purple-light hover:border-purple-light)"
  >
    {{ title }}
  </button>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: 'Button',
  },
})
</script>
