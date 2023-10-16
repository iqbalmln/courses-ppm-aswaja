<script setup lang="ts">
const usps = [
  {
    title: "Real Cases, Real Project",
    img: "ph:monitor-bold",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda consectetur expedita nihil impedit.",
  },
  {
    title: "Interaktif Tidak Membosankan",
    img: "ph:users-three-bold",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda consectetur expedita nihil impedit.",
  },
  {
    title: "Career support",
    img: "ph:presentation-chart-bold",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda consectetur expedita nihil impedit.",
  },
];
</script>

<template>
  <div class="grid md:grid-cols-3 gap-6">
    <div v-for="(usp, index) in usps">
      <div
        class="flex flex-col justify-center items-center gap-4 text-center text-white p-4"
        :class="index < 2 ? 'md:border-r' : ''"
      >
        <Icon :name="usp.img" color="white" class="text-6xl md:text-4xl" />
        <div>
          <p class="font-light text-white">{{ usp.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
