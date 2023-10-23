<script setup lang="ts">
import abdulloh from "~/assets/images/mentors/abdulloh.jpeg";
import muhsin from "~/assets/images/mentors/muhsin.jpg";
import bosman from "~/assets/images/mentors/bosman.jpeg";
import anif from "~/assets/images/mentors/anif.jpg";
import fadmi from "~/assets/images/mentors/fadmi.jpg";
import harsa from "~/assets/images/mentors/harsa.jpeg";
import mustaghfiroh from "~/assets/images/mentors/mustaghfiroh.jpg";
import pusvyta from "~/assets/images/mentors/pusvyta.jpg";
import saeroni from "~/assets/images/mentors/saeroni.jpg";
import mursyaddad from "~/assets/images/mentors/mursyaddad.jpg";
import farid from "~/assets/images/mentors/farid.jpg";
import maisaroh from "~/assets/images/mentors/maisaroh.jpg";
import ulya from "~/assets/images/mentors/ulya.jpg";
import discuss from "~/assets/images/courses/man-hp.png";
import man from "~/assets/images/courses/man-work.png";
import woman from "~/assets/images/courses/women.png";
import defaultImage from "~/assets/images/mentors/default.webp";

useHead({
  title: "LPK Aswaja Nusantara - Program Kursus",
});

const route = useRoute();
const courses = ref([
  {
    name: "Dasar-Dasar Ilmu Pemasaran Digital untuk Menjadi Profesional Pemasaran Digital",
    slug: "digital-marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    mentors: [
      {
        name: "Maisaroh, S.E., M.Si.",
        image: maisaroh,
      },
      {
        name: "Mustaghfiroh Rahayu, S.Th.I., M.A.",
        image: mustaghfiroh,
      },
      {
        name: "Pusvyta Sari, S.Pd., M.Pd.",
        image: pusvyta,
      },
    ],
    faq: [
      {
        id: 0,
        question: "Apa yang dipelajari?",
        image: discuss,
        answer:
          "Pelatihan ini akan memberikan pemahaman mendalam, pengetahuan, serta keterampilan terkait konsep dasar dalam pemasaran dan periklanan digital, perencanaan media dasar untuk iklan di platform Facebook dan Instagram, teknik pembuatan iklan melalui Business Manager, strategi menarik konsumen melalui iklan di Facebook dan Instagram, serta analisis laporan iklan dalam Business Manager.",
      },
      {
        id: 1,
        question: "Apa kompetensi yang dipelajari dan peluang pekerjaannya?",
        image: man,
        answer:
          "Program ini mempersiapkan peserta untuk menguasai konsep pemasaran digital, fokus pada Facebook dan Instagram. Mereka akan belajar membuat iklan, mengelola konten pemasaran, dan mengoptimalkan iklan. Setelah program, peserta bisa menggunakan pengetahuan ini untuk menarik target konsumen dengan kreativitas.",
      },
      {
        id: 2,
        question: "Karir dalam Pemasaran Digital",
        image: woman,
        answer:
          "Sebagai pemasar digital, mereka dapat menawarkan jasa strategi pemasaran kepada berbagai perusahaan. Peran pemasar digital juga mencakup menjadi seorang spesialis media sosial, bekerja di perusahaan atau agensi yang menangani proyek dari berbagai perusahaan.",
      },
    ],
  },
  {
    name: "Menyusun Konten Berita Digital Berdasarkan Kaidah Jurnalistik untuk Wartawan dan Kontributor Media",
    slug: "news",
    image:
      "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2992&q=80",
    mentors: [
      {
        name: "Ahmad Muhlisin",
        image: muhsin,
      },
      {
        name: "Anif Faizi",
        image: anif,
      },
      {
        name: "Harsa Permata, M.Phil.",
        image: harsa,
      },
      {
        name: "Farid Assifa, S.Fil.",
        image: farid,
      },
      {
        name: "Maratul Auliya",
        image: ulya,
      },
    ],
    faq: [
      {
        id: 0,
        question: "Apa yang Dipelajari?",
        image: discuss,
        answer:
          "Dalam era digital, seorang jurnalis harus memiliki kemampuan untuk menciptakan konten berita jurnalistik yang dapat diunggah dengan baik melalui platform online seperti blog dan media sosial, sesuai dengan tren pembacaan berita yang cenderung beralih ke internet.",
      },
      {
        id: 1,
        question: "Kompetensi yang Diperlukan",
        image: man,
        answer:
          "Jurnalis modern perlu memiliki keterampilan digital yang mencakup kemampuan mengidentifikasi, mengumpulkan, menilai, dan berbagi informasi relevan. Mereka juga harus mampu melakukan penelitian jurnalistik, memahami data, dan menciptakan konten multimedia. Untuk mempelajari ini, langkah-langkah seperti memahami dasar-dasar jurnalisme, mempelajari teknologi terkait jurnalisme, dan membangun jaringan narasumber melalui media sosial penting. Selain itu, memahami cara membangun merek pribadi juga diperlukan.",
      },
      {
        id: 2,
        question: "Kurikulum bagi Jurnalis Masa Kini",
        image: woman,
        answer:
          "Semua ini membentuk kurikulum yang kuat bagi jurnalis masa kini yang ingin berhasil dalam era digital yang terus berkembang.",
      },
    ],
  },
  {
    name: "Menyusun dan dan membentuk budaya organisasi yang kuat untuk manajer sumber daya manusia",
    slug: "organization",
    image:
      "https://plus.unsplash.com/premium_photo-1661398825664-775c02e30173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    mentors: [
      {
        name: "Saeroni, S.Ag., S.H.",
        image: saeroni,
      },
      {
        name: "Achmad Mushaddad, S.I.P.",
        image: mursyaddad,
      },
    ],
    faq: [
      {
        id: 0,
        question: "Membangun Struktur Organisasi yang Efektif",
        image: discuss,
        answer:
          "Sebagai seorang Manajer Sumber Daya Manusia, penting bagi seseorang untuk mengakui betapa krusialnya membangun struktur organisasi yang sesuai dan efektif untuk perusahaan. Bab ini akan menjelaskan mengapa struktur organisasi yang baik penting dan bagaimana hal itu memengaruhi kesuksesan perusahaan.",
      },
      {
        id: 1,
        question: "Peran Kultur Perusahaan yang Positif",
        image: man,
        answer:
          "Manajer Sumber Daya Manusia harus memahami bagaimana kultur perusahaan yang positif dapat mempengaruhi retensi karyawan, produktivitas, kualitas pekerjaan, serta menciptakan lingkungan kerja yang sehat dan positif. Bagian ini akan membahas pentingnya kultur perusahaan dan cara membangunnya.",
      },
      {
        id: 2,
        question: "Merancang Visi dan Misi Perusahaan",
        image: woman,
        answer:
          "Langkah awal dalam pemahaman ini adalah merancang struktur organisasi yang tepat dan mengadaptasi visi serta misi perusahaan agar sesuai dengan kebutuhan. Bab ini akan menjelaskan bagaimana merancang visi dan misi yang sesuai dengan struktur organisasi perusahaan dan mengapa hal ini penting dalam menciptakan kultur perusahaan yang baik.",
      },
    ],
  },
  {
    name: "Perancangan Basis Data dengan SQL untuk calon engineer basis data",
    slug: "database-design",
    image:
      "https://images.unsplash.com/photo-1554098415-788601c80aef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    mentors: [
      {
        name: "Abdulloh Badruzzaman, S.T.,M.T.",
        image: abdulloh,
      },
      {
        name: "Fadmi Rina, S.Kom., M.Kom.",
        image: fadmi,
      },
    ],
    faq: [
      {
        id: 0,
        question: "Tantangan Calon Engineer Database",
        image: discuss,
        answer:
          "Calon engineer database cenderung menggunakan spreadsheet karena mudah digunakan, meskipun memiliki kelemahan dalam manajemen data. Bab ini akan menguraikan mengapa calon engineer seringkali memilih spreadsheet dan mengapa ini bisa menjadi tantangan dalam manajemen data perusahaan.",
      },
      {
        id: 1,
        question: "Manfaat Penggunaan SQL dalam Manajemen Data",
        image: man,
        answer:
          "Sementara common database dengan SQL memungkinkan manajemen data yang lebih terstruktur dan analisis cepat, seringkali calon engineer belum mahir dalam SQL, mengakibatkan data tidak terstruktur. Bab ini akan menjelaskan bagaimana SQL dapat meningkatkan manajemen data dan mengapa pemahaman SQL penting.",
      },
      {
        id: 2,
        question: "Pentingnya Pengetahuan Dasar SQL",
        image: woman,
        answer:
          "Dampaknya, perusahaan kesulitan mengambil keputusan yang tepat. Oleh karena itu diperlukan pengetahuan dasar SQL untuk calon engineer database yang seringkali dibutuhkan di era digital ini. Bagian ini akan membahas kebutuhan dan manfaat memahami dasar-dasar SQL dalam profesi calon engineer database.",
      },
    ],
  },
  {
    name: "Merancang sistem pengelolaan limbah cair rumah tangga kawasan urban untuk insinyur sipil dan lingkungan",
    slug: "wastewater-management-system",
    image:
      "https://images.unsplash.com/photo-1581093196867-ca3dba3c721b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    mentors: [
      {
        name: "Bosman Batubara, Ph.D.",
        image: bosman,
      },
    ],
    faq: [
      {
        id: 0,
        question: "Tantangan Kualitas Air Global",
        image: discuss,
        answer:
          "Data dari worldwaterday.org menunjukkan bahwa 1,8 miliar penduduk dunia masih mendapatkan air minum dari sumber terkontaminasi limbah, meningkatkan risiko penularan penyakit serius. Bab ini akan menguraikan tantangan global terkait kualitas air dan dampaknya pada kesehatan masyarakat.",
      },
      {
        id: 1,
        question: "Peran Insinyur Lingkungan",
        image: man,
        answer:
          "Masalah limbah ini belum sepenuhnya tertangani, terutama di sektor industri yang melibatkan insinyur lingkungan. Bagian ini akan membahas peran insinyur lingkungan dalam menghadapi masalah limbah dan mengapa mereka memiliki peran krusial dalam upaya menjaga kualitas air dan lingkungan hidup.",
      },
      {
        id: 2,
        question: "Kompetensi yang Diperlukan oleh Insinyur Lingkungan",
        image: woman,
        answer:
          "Insinyur lingkungan harus memiliki kemampuan untuk mengenali jenis limbah, menentukan karakteristik sumber pencemar air limbah, menilai tingkat pencemar air limbah, serta menjalankan tindakan Keselamatan dan Kesehatan Kerja (K3) dalam pengolahan air limbah. Bagian ini akan menguraikan kompetensi yang diperlukan oleh insinyur lingkungan untuk mengatasi tantangan ini.",
      },
    ],
  },
]);
</script>

<template>
  <div>
    <div v-for="course in courses" class="">
      <section
        class="flex flex-col gap-12"
        v-if="course.slug === route.params.slug"
      >
        <header class="flex justify-end relative px-6 md:px-12 pt-24 md:py-12">
          <div
            class="absolute left-4 md:left-0 top-1/2 transform -translate-y-1/3 md:-translate-y-1/2 bg-zinc-50 p-2 md:p-8 w-7/12 font-semibold"
          >
            <h2 class="text-2xl md:text-5xl leading-tight">{{ course.name }}</h2>
          </div>
          <figure class="h-[400px] md:h-[500px] w-2/3 self-end">
            <img
              :src="course.image"
              alt=""
              class="w-full h-full object-cover"
            />
          </figure>
        </header>
        <div
          class="bg-[#48604a] px-6 md:px-12 py-12 flex flex-col gap-8 items-center justify-center"
        >
          <div class="text-white text-center flex flex-col gap-2">
            <h3 class="text-3xl md:text-3xl text-center font-semibold">
              Mentor yang akan mengajar
            </h3>
            <p class="text-sm md:text-base">
              Mentor lami memiliki pemahaman mendalam tentang materi
              kursus dan memiliki pengalaman nyata dalam aplikasi praktisnya.
            </p>
          </div>
          <div class="flex flex-col md:flex-row gap-8 text-white">
            <figcaption
              v-for="mentor in course.mentors"
              class="flex flex-col items-center"
            >
              <div class="w-[100px] md:w-[200px] h-[100px] md:h-[200px]">
                <img
                  :src="mentor.image || defaultImage"
                  alt=""
                  class="w-full h-full object-cover rounded-full"
                />
              </div>
              <p class="mt-4">{{ mentor.name }}</p>
            </figcaption>
          </div>
        </div>
        <div
          v-for="faq in course.faq"
          class="flex flex-col gap-4 px-6 md:px-12"
        >
          <div
            class="flex items-start gap-4 md:w-2/3"
            :class="faq.id === 1 ? 'self-end flex-row-reverse' : 'self-start'"
          >
            <figure class="md:w-[300px] hidden md:block">
              <img
                :src="faq.image"
                alt=""
                class="w-full h-full object-contain"
              />
            </figure>
            <div class="flex flex-col gap-4">
              <h3 class="font-semibold text-xl md:text-2xl">{{ faq.question }}</h3>
              <p class="text-gray-600 text-justify text-sm md:text-base">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
        <div
          class="w-10/12 text-blue-brand flex flex-col gap-6 text-center bg-[#48604a] rounded-xl mx-auto py-6 mb-12 text-white"
        >
          <header class="flex flex-col gap-2">
            <h2 class="text-2xl md:text-3xl">
              Segera Bergabung <span class="font-bold border-b">Sekarang!</span>
            </h2>
            <p class="text-xs md:text-sm">
              Jadilah bagian dari kursus berkualitas kami. Daftar sekarang dan dapatkan penawaran istimewa, harga hanya Rp. 1.5 juta!
            </p>
          </header>
          <div>
            <div
              class="flex flex-col md:flex-row items-center justify-center gap-4"
            >
              <button class="border border-white px-4 py-2 rounded-full">
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
