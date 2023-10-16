<script setup lang="ts">
const testimonies = ref([
  {
    name: "Iqbal Maulana",
    job: "Software Engineer",
    title: "Superb",
    img: "Iqbal",
    testimony:
      "Kursus ini benar-benar mengubah cara saya memahami konsep yang rumit. Saya sangat terkesan dengan materi yang diajarkan dan cara pengajarannya yang sangat mudah dipahami.",
  },
  {
    name: "Yasmin Nazihah",
    job: "Mahasiswa",
    title: "Helpful",
    img: "Yasmin",
    testimony:
      "Instruktur kursus sangat berpengetahuan dan responsif terhadap pertanyaan saya. Saya merasa didukung sepanjang kursus.",
  },
  {
    name: "Destrian Ramadhandi",
    job: "Mahasiswa",
    title: "Trusted",
    img: "Dandi",
    testimony:
      "Saya sangat senang bahwa saya memutuskan untuk mendaftar ke kursus ini. Itu telah membuka pintu baru bagi saya dalam hal peluang karier.",
  },
  {
    name: "Sarah Sahda S",
    job: "UI/UX Designer",
    title: "Cool",
    img: "Sarah",
    testimony:
      "Saya sangat senang bahwa saya memutuskan untuk mendaftar ke kursus ini. Itu telah membuka pintu baru bagi saya dalam hal peluang karier.",
  },
  {
    name: "Galih Pratama",
    job: "Graphic Designer",
    title: "Recommended",
    img: "Galih",
    testimony:
      "Saya sangat senang bahwa saya memutuskan untuk mendaftar ke kursus ini. Itu telah membuka pintu baru bagi saya dalam hal peluang karier.",
  },
  {
    name: "Fathur Mukhlish",
    job: "Project Manager",
    title: "Like",
    img: "Fathur",
    testimony:
      "Saya sangat senang bahwa saya memutuskan untuk mendaftar ke kursus ini. Itu telah membuka pintu baru bagi saya dalam hal peluang karier.",
  },
]);
</script>

<template>
  <swiper
    :slidesPerView="3"
    :breakpoints="{
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="[SwiperPagination, SwiperAutoplay]"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :loop="true"
    class="w-full h-[300px] flex justify-center items-center"
  >
    <swiper-slide
      class="h-full !flex !justify-center !items-center md:p-4"
      v-for="testimony in testimonies"
    >
      <div class="bg-white shadow-xl rounded-xl flex p-4">
        <div class="flex flex-col gap-4">
          <h4 class="text-xl font-semibold">{{ testimony.title }}</h4>
          <p class="line-clamp-3 text-sm text-gray-600">
            {{ testimony.testimony }}
          </p>
          <div class="flex gap-4">
            <figure class="w-12 h-12 rounded-full">
              <img
                v-if="testimony.img === 'Iqbal'"
                class="w-full h-full object-cover rounded-full"
                src="~/assets/images/Iqbal.png"
                alt=""
              />
              <img
                v-if="testimony.img === 'Dandi'"
                class="w-full h-full object-cover rounded-full"
                src="~/assets/images/Dandi.png"
                alt=""
              />
              <img
                v-if="testimony.img === 'Yasmin'"
                class="w-full h-full object-cover rounded-full"
                src="~/assets/images/Yasmin.png"
                alt=""
              />
              <img
                v-if="testimony.img === 'Sarah'"
                class="w-full h-full object-cover rounded-full"
                src="~/assets/images/Sarah.png"
                alt=""
              />
              <img
                v-if="testimony.img === 'Galih'"
                class="w-full h-full object-cover rounded-full"
                src="~/assets/images/Galih.png"
                alt=""
              />
              <img
                v-if="testimony.img === 'Fathur'"
                class="w-full h-full object-cover rounded-full"
                src="~/assets/images/Fathur.png"
                alt=""
              />
            </figure>
            <div>
              <p>{{ testimony.name }}</p>
              <p>{{ testimony.job }}</p>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
