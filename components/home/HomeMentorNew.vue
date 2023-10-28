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
import suwoko from "~/assets/images/mentors/suwoko.png";
import anis from "~/assets/images/mentors/anis.png";
import defaultImage from "~/assets/images/mentors/default.webp";

const mentors = [
  {
    photo: abdulloh,
    name: "Abdulloh Badruzzaman, S.T.,M.T.",
    job: "Dosen Prodi Informatika UNU Yogyakarta",
    focus: [
      "Pengembangan Web",
      "Pengembangan Apps Seluler",
      "Desainer Basis Data",
    ],
    link: "https://www.linkedin.com/in/abdulloh-badruzzaman-7a68271a4/",
    slug: "abdulloh-badruzzaman",
  },
  {
    photo: muhsin,
    name: "Ahmad Muhlisin",
    job: "Redaktur Berita Betanews.id",
    focus: ["Jurnalistik"],
    link: "#",
    slug: "ahmad-muhlisin",
  },
  {
    photo: anif,
    name: "Anif Faizi",
    job: "Digital Business Betanews.id",
    focus: [
      "Manajemen Penjualan dan pemasaran",
      "spesialis pemasaran digital",
      "wartawan",
    ],
    link: "#",
    slug: "anif-faizi",
  },
  {
    photo: bosman,
    name: "Bosman Batubara, Ph.D.",
    job: "Postdoctoral researcher at Human Geography and Spatial Planning Department, Utrecht University",
    focus: ["Keteknikan Sipil", "Keteknikan Lingkungan"],
    link: "#",
    slug: "bosman-batubara",
  },
  {
    photo: fadmi,
    name: "Fadmi Rina, S.Kom., M.Kom.",
    job: "Asisten Ahli Universitas Nahdlatul Ulama Yogyakarta",
    focus: [
      "Pengembangan Web",
      "Pengembangan Apps Seluler",
      "Desainer Basis Data",
    ],
    link: "https://www.linkedin.com/in/fadmi-rina-5604ba38/",
    slug: "fadmi-rina",
  },
  {
    photo: harsa,
    name: "Harsa Permata, M.Phil.",
    job: "Teaching Staff, at Islamic University of Indonesia, Boarding School",
    focus: ["Jurnalistik", "Public Relation"],
    link: "https://www.linkedin.com/in/harsa-permata-041a8272/",
    slug: "harsa-permata",
  },
  {
    photo: maisaroh,
    name: "Maisaroh, S.E., M.Si.",
    job: "Dosen Program Studi Bisnis Digital Universitas Islam Indonesia",
    focus: [
      "Manajemen Penjualan dan pemasaran",
      "Manajemen logistik, distribusi, dan halterkait",
      "spesialis pemasaran digital",
      "spesialis penembangan bisnis",
    ],
    link: "#",
    slug: "maisaroh",
  },
  {
    photo: ulya,
    name: "Mar'atul Uliyah, S.Pd.",
    job: "Pemimpin Redaksi Majalah Suluh, FPUB",
    focus: ["Jurnalistik"],
    link: "#",
    slug: "maratul-uliyah",
  },
  {
    photo: mustaghfiroh,
    name: "Mustaghfiroh Rahayu, S.Th.I., M.A.",
    job: "Dosen Jurusan Sosiologi Universitas Gadjah Mada",
    focus: ["Manejemen Sumber Daya Manusia", "spesialis pemasaran digital"],
    link: "https://www.linkedin.com/in/mustaghfiroh-rahayu-9a69ba214/",
    slug: "mustaghfiroh-rahayu",
  },
  {
    photo: pusvyta,
    name: "Pusvyta Sari, S.Pd., M.Pd.",
    job: "Kaprodi Komunikasi dan Penyiaran Islam Institut Pesantren Sunan Drajat",
    focus: [
      "Profesional Periklanan dan Pemasaran",
      "Manejemen Sumber Daya Manusia",
      "Public Relation",
    ],
    link: "https://www.linkedin.com/in/pusvyta-sari-38a39a16/",
    slug: "pusvyta-sari",
  },
  {
    photo: saeroni,
    name: "Saeroni, S.Ag., M.H.",
    job: "Sekretaris Yayasan Bumi Aswaja Yogyakarta, pendiri dan pengelola SMP, SMA dan Pesantren Bumi Cendekia",
    focus: ["Analis Manejemen Organisasi", "Manejemen Sumber Daya Manusia"],
    link: "#",
    slug: "saeroni",
  },
  {
    photo: mursyaddad,
    name: "Achmad Musyaddad, S.I.P.",
    job: "Direktur, Yayasan Sanggar Inovasi Desa",
    focus: ["Analis Manejemen Organisasi", "Manejemen Sumber Daya Manusia"],
    link: "#",
    slug: "achmad-musyaddad",
  },
  {
    photo: farid,
    name: "Farid Assifa, S.Fil.",
    job: "Editor, KOMPAS.COM",
    focus: ["Jurnalistik"],
    link: "https://www.linkedin.com/in/farid-assifa-90112645/",
    slug: "farid-assifa",
  },
  {
    photo: suwoko,
    name: "Suwoko S.Pd.",
    job: "Founder Beta Media, (betanews.id)",
    focus: ["Jurnalistik"],
    link: "#",
    slug: "suwoko",
  },
  {
    photo: anis,
    name: "Anis Susila Abadi, S.T., M.Kom.",
    job: "Dosen, Universitas Nahdlatul Ulama Yogyakarta",
    focus: [
      "Pengembangan Web",
      "Pengembangan Apps Seluler",
      "Desainer Basis Data",
    ],
    link: "#",
    slug: "anis-susila",
  },
];
const tagClass = (focus: string) => {
  return focus === "Pengembangan Web"
    ? "bg-yellow-100"
    : focus === "Pengembangan Apps Seluler"
    ? "bg-green-100"
    : focus === "Desainer Basis Data"
    ? "bg-blue-100"
    : focus === "Manajemen Penjualan dan pemasaran"
    ? "bg-red-100"
    : focus === "Keteknikan Sipil"
    ? "bg-purple-100"
    : focus === "Keteknikan Lingkungan"
    ? "bg-orange-100"
    : focus === "Jurnalistik"
    ? "bg-emerald-100"
    : focus === "Public Relation"
    ? "bg-rose-100"
    : focus === "wartawan"
    ? "bg-cyan-100"
    : focus === "Profesional Periklanan dan Pemasaran"
    ? "bg-amber-100"
    : focus === "spesialis pemasaran digital"
    ? "bg-lime-100"
    : focus === "Manejemen Sumber Daya Manusia"
    ? "bg-gray-200"
    : focus === "Analis Manejemen Organisasi"
    ? "bg-indigo-100"
    : "";
};

const visibleMentors = ref(mentors.slice(0, 4));

const showMore = () => {
  // Menambahkan 4 produk berikutnya ke daftar tampilan
  visibleMentors.value = [
    ...visibleMentors.value,
    ...mentors.slice(
      visibleMentors.value.length,
      visibleMentors.value.length + 11
    ),
  ];
};
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-8">
    <section class="grid md:grid-cols-4 gap-8">
      <div v-for="mentor in visibleMentors">
        <NuxtLink
          :to="'/mentor/' + mentor.slug"
          class="w-full flex flex-col gap-2 drop-shadow-lg rounded p-2 bg-white hover:transform hover:scale-105 transition-all duration-300 ease-out h-[480px] md:h-[500px]"
        >
          <figure class="relative w-full h-[320px]">
            <img
              :src="mentor.photo || defaultImage"
              class="rounded w-full h-full object-cover"
            />
            <NuxtLink
              class="absolute top-2 left-2 z-10 bg-white rounded"
              :to="mentor.link"
              target="_blank"
            >
              <Icon name="ph:linkedin-logo-fill" color="#1869c5" size="2rem" />
            </NuxtLink>
          </figure>
          <div class="flex flex-wrap">
            <p
              v-for="focus in mentor.focus"
              class="lowercase text-[10px] my-0.5 rounded-full px-1"
              :class="tagClass(focus)"
            >
              {{ focus }}
            </p>
          </div>
          <div>
            <p class="text-sm font-semibold">{{ mentor.name }}</p>
            <span class="text-xs leading-snug">{{ mentor.job }}</span>
          </div>
        </NuxtLink>
      </div>
    </section>
    <BaseTheButton
      @click="showMore"
      title="Lihat Semua Mentor"
      variant="outlined"
    />
  </div>
</template>
