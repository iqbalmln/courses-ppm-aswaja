<script setup lang="ts"></script>

<template>
  <footer
    class="bg-black flex flex-col gap-6 lg:gap-12 py-12 pb-6 px-6 lg:px-12 relative overflow-hidden text-white"
  >
    <section class="flex flex-col md:flex-row justify-between gap-6 lg:gap-16">
      <ul class="flex flex-col gap-3 text-sm items-start md:w-2/12 lg:w-2/12">
        <figure>
          <img src="~/assets/images/logo.png" width="100" height="100" />
        </figure>
        <li class="text-sm">Membuka Potensi, Membangun Keunggulan!</li>
      </ul>
      <ul class="flex flex-col gap-3 text-sm items-start md:w-3/12 lg:w-2/12">
        <li class="uppercase font-bold text-base lg:text-xl">peta situs</li>
        <li class="text-sm text-left">
          <NuxtLink to="/">Beranda</NuxtLink>
        </li>
        <li class="text-sm">
          <NuxtLink to="/profile/history">Profil</NuxtLink>
        </li>
        <li class="text-sm">
          <NuxtLink to="/courses">Program Kursus</NuxtLink>
        </li>
        <li class="text-sm">
          <NuxtLink to="/gallery">Blog dan Galeri</NuxtLink>
        </li>
      </ul>
      <ul class="flex flex-col gap-3 text-sm items-start md:w-4/12 lg:w-5/12">
        <li class="uppercase font-bold text-base lg:text-xl">Kontak Kami</li>
        <li class="text-sm underline">+6282245511083</li>
        <li class="text-sm">
          Jl Santri No. 2, Mlangi RT/RW 2/32, Nogotirto, Gamping, Sleman, Daerah Istimewa Yogyakarta
        </li>
      </ul>
      <ul class="flex flex-col gap-3 text-sm items-start lg:w-3/12">
        <li class="uppercase font-bold text-base lg:text-xl">Ikuti Kami</li>
        <li class="text-sm">
          <NuxtLink to="https://www.facebook.com/ponpes.aswaja.nusantara?locale=id_ID&_rdc=1&_rdr" target="_blank">
            <Icon name="ph:facebook-logo" size="1rem" />
            Facebook
          </NuxtLink>
        </li>
        <li class="text-sm">
          <NuxtLink to="https://www.instagram.com/aswaja_nusantara/" target="_blank">
            <Icon name="ph:instagram-logo" size="1rem" />
            Instagram
          </NuxtLink>
        </li>
        <li class="text-sm">
          <NuxtLink to="https://www.youtube.com/@ppmaswajanusantara1070" target="_blank">
            <Icon name="ph:youtube-logo" size="1rem" />
            Youtube
          </NuxtLink>
        </li>
      </ul>
    </section>
    <section class="flex justify-center items-center">
      <p class="text-xs">&copy; PPM Aswaja Nusantara. All right reserved.</p>
    </section>
  </footer>
</template>
