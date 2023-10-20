<script setup lang="ts">
useHead({
  title: 'Organisasi',
})
</script>

<template>
  <div class="flex py-24 md:py-12 px-6 md:px-12 flex-col gap-8 md:gap-16">
    <section class="flex flex-col gap-8 lg:w-1/2">
      <h1 class="font-semibold text-3xl lg:text-5xl flex-1 leading-tight">
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
        <img src="~/assets/images/profile/structure.png" class="transform scale-150 md:scale-110" />
      </figure>
    </section>
  </div>
</template>

<style scoped>
.tes {
  background: url("~/assets/images/background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
