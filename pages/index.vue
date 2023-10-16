<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

definePageMeta({
  layout: "home",
});
useHead({
  title: "My App",
});

const courses = ref([
  {
    name: "Pemasaran Digital",
    price: "Rp.1.500.000",
    description:
      "Program pelatihan ini menyediakan pemahaman dan keterampilan dalam pemasaran dan periklanan digital, dengan fokus pada Facebook dan Instagram. Peserta akan mempelajari konsep dasar, perencanaan media, teknik pembuatan iklan, strategi konsumen, dan analisis laporan iklan melalui Business Manager.",
    figure:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    background: "bg-[#60a5fa]",
    active: false,
    ref: "organic",
  },
  {
    name: "Menyusun Konten Berita Digital",
    price: "Rp.1.500.000",
    description:
      "Dalam era digital, seorang jurnalis perlu memiliki kemampuan untuk menciptakan konten berita yang dapat diunggah secara efektif melalui platform online seperti blog dan media sosial. Mereka harus memiliki kompetensi digital, termasuk kemampuan mengidentifikasi, mengumpulkan, menilai, dan berbagi informasi yang relevan. Selain itu, mereka perlu mampu melakukan penelitian jurnalistik, memahami data, dan menciptakan konten multimedia.",
    figure:
      "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2992&q=80",
    background: "bg-[#f43f5e]",
    active: false,
    ref: "journal",
  },
  {
    name: "Menyusun dan dan membentuk organisasi",
    price: "Rp.1.500.000",
    description:
      "Sebagai seorang Manajer Sumber Daya Manusia, penting untuk memahami pentingnya membangun struktur organisasi yang sesuai dan efektif. Hal ini juga melibatkan pengenalan akan dampak positif kultur perusahaan pada retensi karyawan, produktivitas, kualitas kerja, dan lingkungan kerja yang positif.",
    figure:
      "https://plus.unsplash.com/premium_photo-1661398825664-775c02e30173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    background: "bg-[#fbbf24]",
    active: false,
    ref: "product",
  },
  {
    name: "Perancangan Basis Data dengan SQL",
    price: "Rp.1.500.000",
    description:
      "Calon engineer database cenderung menggunakan spreadsheet karena mudah digunakan, meskipun memiliki kelemahan dalam manajemen data. Sementara common database dengan SQL memungkinkan manajemen data yang lebih terstruktur dan analisis cepat, seringkali calon engineer belum mahir dalam SQL, mengakibatkan data tidak terstruktur.",
    figure:
      "https://images.unsplash.com/photo-1554098415-788601c80aef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    background: "bg-[#fbbf24]",
    active: false,
    ref: "sql",
  },
  {
    name: "Merancang sistem pengelolaan limbah cair",
    price: "Rp.1.500.000",
    description:
      "Insinyur lingkungan harus memiliki kemampuan untuk mengidentifikasi jenis limbah, menganalisis karakteristik pencemar air limbah, mengevaluasi tingkat pencemaran, serta menerapkan tindakan Keselamatan dan Kesehatan Kerja (K3) dalam pengolahan air limbah. Permintaan pekerjaan di bidang insinyur lingkungan terus meningkat seiring dengan meningkatnya kesadaran akan isu lingkungan, menunjukkan peran penting mereka dalam menjaga kualitas air dan lingkungan hidup.",
    figure:
      "https://images.unsplash.com/photo-1581093196867-ca3dba3c721b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    background: "bg-[#fbbf24]",
    active: false,
    ref: "limbah",
  },
]);

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

const animations = {
  animationElement: ref(null),
  title: ref(null),
  subtitle: ref(null),
  avatarGroup: ref(null),
  users: ref(null),
  buttonCta: ref(null),
  headerCourse: ref(null),
  journal: ref(null),
};

const {
  animationElement,
  title,
  subtitle,
  avatarGroup,
  users,
  buttonCta,
  headerCourse,
  journal,
} = animations;

const landingSection = () => {
  tl.from(title.value, {
    duration: 1,
    opacity: 0,
    y: -50,
  });
  tl.from(animationElement.value, {
    duration: 0.75,
    opacity: 0,
    y: -30,
  });
  tl.from(subtitle.value, {
    duration: 0.75,
    opacity: 0,
    y: -10,
  });
  tl.from(buttonCta.value, {
    duration: 0.75,
    opacity: 0,
    y: -10,
  });
  gsap.from(avatarGroup.value, {
    duration: 1,
    opacity: 0,
    x: -50,
  });
  gsap.from(users.value, {
    duration: 1,
    opacity: 0,
    x: 50,
  });
};

const courseSection = () => {
  gsap.from(headerCourse.value, {
    y: 100,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: headerCourse.value,
      start: "top bottom",
      toggleActions: "play complete none reset",
      // play pause resume reverse restart reset complete none
      // onEnter onLeave onEnterBack onLeaveBack
    },
  });
  gsap.from(".organic", {
    y: 100,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".organic",
      start: "top bottom",
      toggleActions: "play complete none reset",
    },
  });
  gsap.from(".journal", {
    y: 100,
    duration: 0.5,
    delay: 0.25,
    opacity: 0,
    scrollTrigger: {
      trigger: ".journal",
      start: "top bottom",
      toggleActions: "play complete none reset",
    },
  });
  gsap.from(".product", {
    y: 100,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".product",
      start: "top bottom",
      toggleActions: "play complete none reset",
    },
  });
  gsap.from(".sql", {
    y: 100,
    duration: 0.5,
    delay: 0.75,
    opacity: 0,
    scrollTrigger: {
      trigger: ".sql",
      start: "top bottom",
      toggleActions: "play complete none reset",
    },
  });
  gsap.from(".limbah", {
    y: 100,
    duration: 0.5,
    delay: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".limbah",
      start: "top bottom",
      toggleActions: "play complete none reset",
    },
  });
};

onMounted(() => {
  landingSection();
  courseSection();
});
</script>

<template>
  <div>
    <!-- Landing -->
    <section
      class="w-full md:h-[88vh] flex md:items-center justify-between pt-12 md:pt-0 px-6 md:px-12"
    >
      <div class="flex-1 flex flex-col gap-4 md:gap-6 mb-12 md:mb-0 mt-12">
        <BaseTag title="#Program Kursus Yogyakarta" class="self-start" />
        <div class="flex flex-col gap-4">
          <h1
            ref="animationElement"
            style="line-height: 120%"
            class="text-4xl md:text-5xl font-bold text-slate-900"
          >
            Membuka Potensi, Membangun Keunggulan!
          </h1>
          <p ref="subtitle" class="text-gray-600 text-sm md:text-base">
            Jelajahi Potensi Anda dengan Kursus Kami. Buka Pintu Menuju Keahlian
            Baru dan Kesuksesan yang Lebih Besar.
          </p>
          <div class="self-start" ref="buttonCta">
            <BaseTheButton variant="fill" title="Daftar Sekarang" />
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:items-center gap-2 text-sm">
          <div ref="avatarGroup">
            <BaseAvatarGroup />
          </div>
          <p ref="users" class="font-semibold text-gray-700">
            <span class="font-bold text-orange-500">100+</span> Orang sudah
            bergabung
          </p>
        </div>
      </div>
      <div
        class="hidden md:flex justify-center items-end flex-1 h-full relative overflow-hidden"
      >
        <div
          class="shadow-lg absolute left-1/3 top-3/4 p-2 rounded-lg flex flex-col bg-white z-10"
        >
          Skills
          <Icon name="ph:chart-bar-fill" color="orange" size="5rem" />
        </div>
        <div
          class="shadow-lg absolute left-3/4 top-1/4 p-2 flex flex-col bg-white rounded-full z-10"
        >
          <div
            class="bg-[#fff3df] p-1 rounded-full w-8 h-8 flex items-center justify-center"
          >
            <Icon name="ph:medal-fill" color="orange" size="1.5rem" />
          </div>
        </div>
        <div
          class="shadow-md absolute left-0 top-2/4 p-2 flex flex-col bg-white rounded-full z-10 transform -rotate-12"
        >
          <div
            class="bg-[#e5f5ff] p-1 rounded-full w-6 h-6 flex items-center justify-center"
          >
            <Icon name="ph:books" color="#4dc1fd" size="1.5rem" />
          </div>
        </div>
        <div
          class="shadow-md absolute right-0 top-2/4 p-2 flex flex-col bg-white rounded-full z-10 transform rotate-12"
        >
          <div
            class="bg-[#ffded7] p-1 rounded-full w-6 h-6 flex items-center justify-center"
          >
            <Icon name="ph:file" color="#fd6a69" size="1.5rem" />
          </div>
        </div>
        <div
          class="shadow-md absolute left-1/4 top-1/4 p-2 flex flex-col bg-white rounded-full z-10 transform -rotate-12"
        >
          <div
            class="bg-[#e4f5ec] p-1 rounded-full w-6 h-6 flex items-center justify-center"
          >
            <Icon
              name="ph:briefcase-simple-fill"
              color="#55bd7c"
              size="1.5rem"
            />
          </div>
        </div>
        <Swiper
          :effect="'fade'"
          :loop="true"
          :modules="[
            SwiperEffectFade,
            SwiperNavigation,
            SwiperPagination,
            SwiperAutoplay,
          ]"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
          class="h-[700px]"
        >
          <SwiperSlide class="flex flex-col">
            <img
              class="w-full object-cover bg-zinc-50"
              preload
              src="~/assets/images/model.png"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide class="flex flex-col">
            <img
              class="w-full object-cover bg-zinc-50"
              preload
              src="~/assets/images/model1.png"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <!-- USP -->
    <section class="px-6 md:px-12 py-4 flex flex-col gap-8 bg-[#48604a]">
      <HomeUSP />
    </section>
    <section
      class="tes relative px-6 md:px-12 flex flex-col gap-12 md:gap-24 py-12 md:py-24"
    >
      <!-- Mentor -->
      <section class="flex flex-col gap-8">
        <header class="text-center flex flex-col gap-2">
          <h2 class="text-3xl font-bold">Bertemu dengan para mentor</h2>
          <p class="text-xs md:text-sm text-gray-600">
            Kami memiliki kursus yang diajarkan oleh tutor profesional kami yang
            sudah lama berkecimpung di industri ini.
          </p>
        </header>
        <HomeMentorNew />
      </section>
      <!-- Courses -->
      <section class="flex flex-col gap-8 overflow-hidden">
        <header
          ref="headerCourse"
          class="flex flex-col items-center gap-4 md:gap-2 justify-center text-center"
        >
          <h3 class="text-3xl md:text-4xl font-bold">Program Kursus</h3>
          <p class="text-gray-600 text-xs md:text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
            provident.
          </p>
        </header>
        <HomeCourses :courses="courses" />
        <NuxtLink to="/courses" class="self-center">
          <BaseTheButton title="Lihat Selengkapnya" variant="outlined" />
        </NuxtLink>
      </section>
    </section>
    <!-- Testimony -->
    <section class="px-6 md:px-12 py-12 flex flex-col md:gap-8 bg-[#48604a]">
      <header class="flex items-center justify-center">
        <div>
          <h3 class="text-3xl md:text-4xl font-bold text-center text-white">
            Apa Kata Mereka
          </h3>
          <p class="text-xs md:text-sm text-center md:text-left text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
            provident.
          </p>
        </div>
      </header>
      <HomeTestimonies />
    </section>
    <section class="px-6 md:px-12 py-12 flex flex-col gap-4 md:gap-8">
      <header
        class="flex flex-col items-center gap-4 md:gap-2 justify-center text-center"
      >
        <h3 class="text-3xl md:text-4xl font-bold">Dokumentasi Kegiatan</h3>
        <p class="text-gray-600 text-xs md:text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
          provident.
        </p>
      </header>
      <HomeDocumentation />
    </section>
  </div>
</template>
<style scoped>
.tes {
  background: url("../assets/images/background.png");
  background-position: center;
  /* background-size: cover; */
  background-repeat: no-repeat;
}
</style>
