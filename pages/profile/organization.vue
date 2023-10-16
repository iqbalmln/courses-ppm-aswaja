<script setup lang="ts">

const persons = [
  {
    name: "Muhammad Mustafied S.Fil",
    src: "https://images.unsplash.com/photo-1627091908405-30bd51eec537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    position: "Director",
  },
  {
    name: "Yhoga Tri Kurniawan S.T",
    src: "https://images.unsplash.com/photo-1598698230199-f7f08ed4234b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    position: "Operational Officer Manager",
  },
  {
    name: "Lorem Ipsum S.T",
    src: "https://images.unsplash.com/photo-1550546094-9835463f9f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2848&q=80",
    position: "Finance and Administration Manager",
  },
  {
    name: "Muhammad Mustafied S.Fil",
    src: "https://images.unsplash.com/photo-1627091908405-30bd51eec537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    position: "Director",
  },
  {
    name: "Yhoga Tri Kurniawan S.T",
    src: "https://images.unsplash.com/photo-1598698230199-f7f08ed4234b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    position: "Operational Officer Manager",
  },
  {
    name: "Lorem Ipsum S.T",
    src: "https://images.unsplash.com/photo-1550546094-9835463f9f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2848&q=80",
    position: "Finance and Administration Manager",
  },
  {
    name: "Muhammad Mustafied S.Fil",
    src: "https://images.unsplash.com/photo-1627091908405-30bd51eec537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    position: "Director",
  },
  {
    name: "Yhoga Tri Kurniawan S.T",
    src: "https://images.unsplash.com/photo-1598698230199-f7f08ed4234b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    position: "Operational Officer Manager",
  },
];
</script>

<template>
  <div class="flex py-24 md:py-12 px-6 md:px-12 flex-col gap-8 md:gap-16">
    <section class="flex flex-col gap-8 lg:w-1/2">
      <h1 class="font-semibold text-3xl lg:text-6xl flex-1 leading-tight">
        Temui tim kami yang terdiri dari
        <span class="font-light italic border-b border-black"
          >para pembuat, pemimpin,</span
        >
        dan
        <span class="font-light italic border-b border-black"
          >pemecah masalah.</span
        >
      </h1>
      <p class="text-gray-600 text-sm md:text-base">
        Kami adalah tim yang bersemangat dan berdedikasi untuk memberikan solusi
        terbaik kepada Anda. Setiap individu di dalam tim kami membawa
        pengalaman dan keahlian unik mereka untuk membantu memenuhi kebutuhan
        Anda. Berikut adalah para ahli di balik kesuksesan kami.
      </p>
    </section>
    <section class="flex justify-center px-12 gap-8 tes">
      <figure>
        <NuxtImg src="profile/structure.png" />
      </figure>
    </section>
  </div>
</template>

<style scoped>
.tes {
  background: url("./assets/images/background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
