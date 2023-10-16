<script setup lang="ts">
defineProps(["courses"]);
</script>

<template>
  <section
    class="grid grid-cols-1 md:grid-cols-3 gap-12 md:w-11/12 mx-auto pb-4"
  >
    <BaseCardPricing :courses="courses" />
  </section>
</template>
