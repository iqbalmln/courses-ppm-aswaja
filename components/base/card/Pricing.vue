<script setup lang="ts">
defineProps({
  courses: null,
});
</script>

<template>
  <div
    v-for="(course, index) in courses"
    class="rounded-xl p-4 bg-white flex flex-col justify-center gap-4 transition-all duration-300 border border-green-900 ease-in hover:bg-[#48604a] hover:transform hover:scale-105"
    :class="course.ref"
    @mouseover="course.active = true"
    @mouseleave="course.active = false"
  >
    <figure class="h-48 w-full">
      <img
        :src="course.figure"
        :alt="course.name"
        class="rounded-lg h-full w-full object-cover"
      />
    </figure>
    <div class="flex flex-col gap-2">
      <h3 class="font-bold text-xl" :class="course.active ? 'text-white' : ''">
        {{ course.name }}
      </h3>
      <p
        class="text-sm line-clamp-3"
        :class="course.active ? 'text-white' : 'text-gray-600'"
      >
        {{ course.description }}
      </p>
    </div>
    <div>
      <p
        class="font-semibold text-left text-3xl pb-4"
        :class="course.active ? 'text-white' : 'text-black'"
      >
        {{ course.price }}
      </p>
      <hr />
    </div>
  </div>
</template>
