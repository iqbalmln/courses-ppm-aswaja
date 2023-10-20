<script setup lang="ts">
useHead({
  title: "Program Kursus",
});
const courses = ref([
  {
    name: "Dasar-Dasar Ilmu Pemasaran Digital untuk Menjadi Profesional Pemasaran Digital",
    slug: "digital-marketing",
    price: "Rp.1.500.000",
    description:
      "Program pelatihan ini menyediakan pemahaman dan keterampilan dalam pemasaran dan periklanan digital, dengan fokus pada Facebook dan Instagram. Peserta akan mempelajari konsep dasar, perencanaan media, teknik pembuatan iklan, strategi konsumen, dan analisis laporan iklan melalui Business Manager.",
    figure:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    mentors: [
      "Maisaroh, S.E., M.Si.",
      "Mustaghfiroh Rahayu, S.Th.I., M.A.",
      "Pusvyta Sari, S.Pd., M.Pd.",
    ],
    background: "bg-[#60a5fa]",
    active: false,
    ref: "organic",
  },
  {
    name: "Menyusun Konten Berita Digital Berdasarkan Kaidah Jurnalistik untuk Wartawan dan Kontributor Media",
    slug: "news",
    price: "Rp.1.500.000",
    description:
      "Dalam era digital, seorang jurnalis perlu memiliki kemampuan untuk menciptakan konten berita yang dapat diunggah secara efektif melalui platform online seperti blog dan media sosial. Mereka harus memiliki kompetensi digital, termasuk kemampuan mengidentifikasi, mengumpulkan, menilai, dan berbagi informasi yang relevan. Selain itu, mereka perlu mampu melakukan penelitian jurnalistik, memahami data, dan menciptakan konten multimedia.",
    figure:
      "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2992&q=80",
    mentors: [
      "Ahmad Muhlisin",
      "Anif Faizi",
      "Harsa Permata, M.Phil.",
      "Farid Assifa, S.Fil.",
      "Maratul Auliya",
    ],
    background: "bg-[#f43f5e]",
    active: false,
    ref: "journal",
  },
  {
    name: "Menyusun dan dan membentuk budaya organisasi yang kuat untuk manajer sumber daya manusia",
    slug: "organization",
    price: "Rp.1.500.000",
    description:
      "Sebagai seorang Manajer Sumber Daya Manusia, penting untuk memahami pentingnya membangun struktur organisasi yang sesuai dan efektif. Hal ini juga melibatkan pengenalan akan dampak positif kultur perusahaan pada retensi karyawan, produktivitas, kualitas kerja, dan lingkungan kerja yang positif.",
    figure:
      "https://plus.unsplash.com/premium_photo-1661398825664-775c02e30173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    mentors: ["Saeroni, S.Ag., S.H. ", "Achmad Mushaddad, S.I.P."],
    background: "bg-[#fbbf24]",
    active: false,
    ref: "product",
  },
  {
    name: "Perancangan Basis Data dengan SQL untuk calon engineer basis data",
    slug: "database-design",
    price: "Rp.1.500.000",
    description:
      "Calon engineer database cenderung menggunakan spreadsheet karena mudah digunakan, meskipun memiliki kelemahan dalam manajemen data. Sementara common database dengan SQL memungkinkan manajemen data yang lebih terstruktur dan analisis cepat, seringkali calon engineer belum mahir dalam SQL, mengakibatkan data tidak terstruktur.",
    figure:
      "https://images.unsplash.com/photo-1554098415-788601c80aef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    mentors: ["Abdulloh Badruzzaman, S.T.,M.T.", "Fadmi Rina, S.Kom., M.Kom."],
    background: "bg-[#fbbf24]",
    active: false,
    ref: "sql",
  },
  {
    name: "Merancang sistem pengelolaan limbah cair rumah tangga kawasan urban untuk insinyur sipil dan lingkungan",
    slug: "wastewater-management-system",
    price: "Rp.1.500.000",
    description:
      "Insinyur lingkungan harus memiliki kemampuan untuk mengidentifikasi jenis limbah, menganalisis karakteristik pencemar air limbah, mengevaluasi tingkat pencemaran, serta menerapkan tindakan Keselamatan dan Kesehatan Kerja (K3) dalam pengolahan air limbah. Permintaan pekerjaan di bidang insinyur lingkungan terus meningkat seiring dengan meningkatnya kesadaran akan isu lingkungan, menunjukkan peran penting mereka dalam menjaga kualitas air dan lingkungan hidup.",
    figure:
      "https://images.unsplash.com/photo-1581093196867-ca3dba3c721b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    mentors: ["Bosman Batubara, Ph.D."],
    background: "bg-[#fbbf24]",
    active: false,
    ref: "limbah",
  },
]);
</script>

<template>
  <div class="px-6 md:px-12 py-24 md:py-12 flex flex-col gap-8">
    <header>
      <h2 class="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
        Program Kursus
      </h2>
      <p class="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, odio.
      </p>
    </header>
    <section>
      <div
        v-for="course in courses"
        class="flex flex-col md:flex-row border-2 p-4 rounded-xl gap-8 mb-4"
      >
        <figure class="md:h-96 md:w-1/3">
          <img
            class="w-full h-full object-cover bg-zinc-50 rounded-l-xl"
            preload
            :src="course.figure"
            loading="lazy"
          />
        </figure>
        <div class="md:w-2/3">
          <header class="flex justify-between items-center">
            <h3
              class="uppercase tracking-wide hastag_line_decoration font-semibold md:text-xl"
            >
              #Kursus
            </h3>
            <span
              class="bg-[#5b9b2d] px-4 py-1 rounded-full text-white text-sm md:text-base"
              >Dibuka</span
            >
          </header>
          <div class="pt-8 flex flex-col gap-4">
            <h2 class="text-[#435e65] text-2xl md:text-3xl font-bold">
              {{ course.name }}
            </h2>
            <p class="text-gray-600">
              Mentor:
              <span class="font-bold text-black">{{
                course.mentors.join(", ")
              }}</span>
            </p>
            <p
              class="text-gray-600 text-sm md:text-base line-clamp-5 md:line-clamp-none"
            >
              {{ course.description }}
            </p>
            <div class="w-full flex gap-4">
              <NuxtLink :to="`courses/${course.slug}`">
                <BaseTheButton title="Detail" variant="outlined" />
              </NuxtLink>
              <BaseTheButton title="Daftar" variant="fill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.hastag_line_decoration {
  background: #085941;
  background: linear-gradient(to right, #085941 0%, #a9c999 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
