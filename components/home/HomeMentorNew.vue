<script setup lang="ts">
const mentors = [
  {
    photo: "mentors/abdulloh.jpeg",
    name: "Abdulloh Badruzzaman, S.T.,M.T.",
    focus: [
      "Pengembangan Web",
      "Pengembangan Apps Seluler",
      "Desainer Basis Data",
    ],
    link: "https://www.linkedin.com/in/abdulloh-badruzzaman-7a68271a4/",
    slug: "abdulloh-badruzzaman",
  },
  {
    photo: "mentors/muhsin.jpg",
    name: "Ahmad Muhlisin",
    focus: ["Jurnalistik"],
    link: "#",
    slug: "ahmad-muhlisin",
  },
  {
    photo: "mentors/anif.jpg",
    name: "Anif Faizi",
    focus: [
      "Manajemen Penjualan dan pemasaran",
      "spesialis pemasaran digital",
      "wartawan",
    ],
    link: "#",
    slug: "anif-faizi",
  },
  {
    photo: "",
    name: "Bosman Batubara, Ph.D.",
    focus: ["Keteknikan Sipil", "Keteknikan Lingkungan"],
    link: "#",
    slug: "bosman-batubara",
  },
  {
    photo: "mentors/fadmi.jpg",
    name: "Fadmi Rina, S.Kom., M.Kom.",
    focus: [
      "Pengembangan Web",
      "Pengembangan Apps Seluler",
      "Desainer Basis Data",
    ],
    link: "https://www.linkedin.com/in/fadmi-rina-5604ba38/",
    slug: "fadmi-rina",
  },
  {
    photo: "mentors/harsa.jpeg",
    name: "Harsa Permata, M.Phil.",
    focus: ["Jurnalistik", "Public Relation"],
    link: "https://www.linkedin.com/in/harsa-permata-041a8272/",
    slug: "harsa-permata",
  },
  {
    photo: "",
    name: "Maisaroh, S.E., M.Si.",
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
    photo: "",
    name: "Mar'atul Uliyah, S.Pd.",
    focus: ["Jurnalistik"],
    link: "#",
    slug: "maratul-uliyah",
  },
  {
    photo: "mentors/mustaghfiroh.jpg",
    name: "Mustaghfiroh Rahayu, S.Th.I., M.A.",
    focus: ["Manejemen Sumber Daya Manusia", "spesialis pemasaran digital"],
    link: "https://www.linkedin.com/in/mustaghfiroh-rahayu-9a69ba214/",
    slug: "mustaghfiroh-rahayu",
  },
  {
    photo: "mentors/pusvyta.jpg",
    name: "Pusvyta Sari, S.Pd., M.Pd.",
    focus: [
      "Profesional Periklanan dan Pemasaran",
      "Manejemen Sumber Daya Manusia",
      "Public Relation",
    ],
    link: "https://www.linkedin.com/in/pusvyta-sari-38a39a16/",
    slug: "pusvyta-sari",
  },
  {
    photo: "mentors/saeroni.jpg",
    name: "Saeroni, S.Ag., M.H.",
    focus: ["Analis Manejemen Organisasi", "Manejemen Sumber Daya Manusia"],
    link: "#",
    slug: "saeroni",
  },
  {
    photo: "mentors/mursyaddad.jpg",
    name: "Achmad Musyaddad, S.I.P.",
    focus: ["Analis Manejemen Organisasi", "Manejemen Sumber Daya Manusia"],
    link: "#",
    slug: "achmad-musyaddad",
  },
  {
    photo: "mentors/farid.jpg",
    name: "Farid Assifa, S.Fil.",
    focus: ["Jurnalistik"],
    link: "https://www.linkedin.com/in/farid-assifa-90112645/",
    slug: "farid-assifa",
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
</script>

<template>
  <section class="grid md:grid-cols-4 gap-8">
    <div v-for="mentor in mentors">
      <NuxtLink
        :to="'/mentor/' + mentor.slug"
        class="w-full flex flex-col gap-2 drop-shadow-lg rounded p-2 bg-white hover:transform hover:scale-105 transition-all duration-300 ease-out h-[320px] md:h-[350px]"
      >
        <figure class="relative w-full h-[200px]">
          <NuxtImg
            :src="mentor.photo !== '' ? mentor.photo : 'mentors/default.webp'"
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
        <p class="text-sm font-semibold">{{ mentor.name }}</p>
      </NuxtLink>
    </div>
  </section>
</template>
