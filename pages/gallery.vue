<script setup lang="ts">
import cryptocurrency from "~/assets/images/blog/cryptocurrency.jpg"
import coffee from "~/assets/images/blog/coffee.jpg"
import webinar from "~/assets/images/blog/webinar.jpg"
import study from "~/assets/images/blog/study.jpg"
import crypto from "~/assets/images/blog/crypto.jpg"
import digitalization from "~/assets/images/blog/digitalization.jpg"
import khalaqoh from "~/assets/images/blog/khalaqoh.jpg"
import opinionLeader from "~/assets/images/blog/opinion-leader.jpg"
import coffeeAndOrange from "~/assets/images/blog/coffee-and-orange.jpg"
import socialMediaCommunication from "~/assets/images/blog/social-media-communication.jpg"
import communicationCollaboration from "~/assets/images/blog/communication-collaboration.jpg"
import startupGeneration from "~/assets/images/blog/startup-generation.jpg"
import gamification from "~/assets/images/blog/gamification.jpg"
import digitalRoom from "~/assets/images/blog/digital-room.jpg"
import digitalZone from "~/assets/images/blog/digital-zone.jpg"
import academyCommunity from "~/assets/images/blog/academy-community.jpg"
import wiseThinking from "~/assets/images/blog/wise-thinking.jpg"
import internetAddiction from "~/assets/images/blog/internet-addiction.jpg"
import sustainableBusiness from "~/assets/images/blog/sustainable-business.jpg"
import madrasahRiset from "~/assets/images/blog/madrasah-riset.jpeg"

const galleries = reactive([
  {
    image: cryptocurrency,
    title: "Pengenalan Cryptocurrency",
    description:
      "Crypto: Mata Uang Digital Masa Depan - Short Course untuk Pemahaman Dasar.",
    date: "Jumat, 14 Januari 2022",
  },
  {
    image: coffee,
    title: "Pelatihan Kopi dan hal yang berhubungan dengan kopi",
    description:
      "Jadilah Ahli Kopi: Pelatihan Barista untuk Seni Penyeduhan Kopi yang Menggugah Selera!",
    date: "7 deseber 2019",
  },
  {
    image: webinar,
    title: "Webinar Career Preparation",
    description:
      "PPM Aswaja Nusantara: Short Course Persiapan Karir untuk Masa Depan Berkilau!",
    date: "16 Januari 2022",
  },
  {
    image: study,
    title: "Persiapan Studi Lanjut & Strategi Meraih Beasiswa",
    description:
      "Webinar: Rahasia Sukses Dapatkan Beasiswa S2 – Persiapan yang Tepat untuk Masa Depan Berkilau!",
    date: "16 Januari 2022",
  },
  {
    image: crypto,
    title: "Cryptocurrency 101 : Dasar - Dasar Blockchain dan Web 3",
    description:
      "Menggali Dunia Crypto: Short Course untuk Masyarakat Umum. Pelajari Mekanisme Dasar dan Potensi Mata Uang Digital sebagai Masa Depan Universal.",
  },
  {
    image: digitalization,
    title: "REVOLUSI DIGITAL: METAVERSE DAN FUTURE LIFE",
    description:
      "Meta: Menggali Potensi Metaverse - Pelajari Peluang dan Tantangan dalam Era Baru Digital bersama PPM Aswaja Nusantara.",
    date: "23 januari 2022",
  },
  {
    image: khalaqoh,
    title: "Khalaqoh Publik : Peta Pemikir Islam Indonesia Mutakhir",
    description:
      "Kholaqoh Publik: Pemikiran Islam Indonesia saat ini. pembicara Prof. Greg Barton dan Kiyai Muhammad Mustafid Diskusi mengenai pengaruh sistem pendidikan, organisasi Islam, dan golongan pemikiran (Reaksioner, Konservatif, Progresif)",
    date: "30 januari 2023",
  },
  {
    image: opinionLeader,
    title:
      "Menebar Kebenaran, Menjadi Opinion Leader: Strategi Menembus Jurnal Internasional",
    description:
      "Mengubah Dunia Melalui Gagasan: Memimpin dengan Kebenaran di Panggung Internasional. Let's Become Trusted Opinion Leaders in the Realm of Innovation and Ideas.",
    date: "26 Oktober 2017",
  },
  {
    image: coffeeAndOrange,
    title: "PELATIHAN TENAGA KERJA MANDIRI ' PELATIHAN KOPI DAN JERUK NIPIS '",
    description:
      "Kerja sama antara Kementerian Tenaga kerja dan PPM Aswaja Nusantara untuk menyambut pembukaan lapangan kerja baru sebagai barista sebagai akibat cafe booming.",
    date: "23 November 2019",
  },
  {
    image: socialMediaCommunication,
    title: "Strategi Komunikasi Efektif Pada Media Sosial",
    description:
      "Pengasuh Yayasan PPM Aswaja Nusantara Muhammad Mustafied  sebagai Mentor untuk mendorong transformasi digital untuk pemuda yang lebih bijak menggukan media sosial. ",
    date: "16 Mei 2023",
  },
  {
    image: communicationCollaboration,
    title: "Komunikasi, Interaksi, dan Kolaborasi di Dunia Digital",
    description:
      "Pengasuh Yayasan PPM Aswaja Nusantara Muhammad Mustafied  sebagai Mentor literasi digital dengan fokus pada Budaya Digital, Etika Digital, dan Keamanan Digital. Mahasiswa akan memahami pengaruh teknologi, etika online, dan cara melindungi data pribadi.",
    date: "29 Agustus 2023",
  },
  {
    image: startupGeneration,
    title:
      "Startup Generation : Membangun Bisnis Inovatif dengan Literasi Digital",
    description:
      "Mentor Aswaja Nusantara Mustaghfiroh Rahayu.  Seminar ini bertujuan untuk memberikan pemahaman mendalam tentang bagaimana literasi digital dapat menjadi landasan yang kuat dalam mengembangkan bisnis startup yang inovatif",
    date: "27 Juli 2023",
  },
  {
    image: gamification,
    title:
      "Gamifikasi Untuk Innovasi Pembelajaran Kewirusahaan Kontekstual dan Bermakna",
    description:
      "Mentor Aswaja Nusantara Mustaghfiroh Rahayu ... . Seminar ini membahas bagaimana penggunaan teknik-teknik gamifikasi dapat meningkatkan keterlibatan dan pemahaman mahasiswa dalam memahami konsep-konsep kewirausahaan secara lebih kontekstual dan bermakna.",
    date: "28 Juli 2023",
  },
  {
    image: digitalRoom,
    title: "Berkolaborasi dan Komunikasi dalam Ruang Digital",
    description:
      "Peserta mempelajari strategi, alat, dan praktik terbaik yang diperlukan untuk membangun kerjasama yang sukses, mengelola proyek, dan memfasilitasi komunikasi yang efisien dalam lingkungan online yang semakin terhubung, membekali mereka dengan keterampilan yang relevan dan mendalam dalam dunia digital saat ini. Oleh Pengasuh Yayasan PPM Aswaja Nusantara Muhammad Mustafied.",
    date: "27 Juni 2023",
  },
  {
    image: digitalZone,
    title: "Tangkas dan Cermat Berbahasa di Ranah Digital",
    description:
      "Peserta diajak untuk memahami cara menghindari kesalahpahaman, menyampaikan pesan dengan jelas, dan menggunakan bahasa dengan tepat dalam dunia digital yang cenderung cepat dan dinamis. Oleh Pengasuh Yayasan PPM Aswaja Nusantara Muhammad Mustafied.",
    date: "20 Juni 2023",
  },
  {
    image: academyCommunity,
    title: "Peran Komunitas Akademik dalam Pendidikan di Era Digital",
    description:
      "Mentor Aswaja Nusantara Saeroni sebagai narasumber Webinar membahas peran mahasiswa dalam pendidikan digital dengan fokus pada etika, budaya, dan keamanan digital dalam era pembelajaran online.",
    date: "17 Juni 2023",
  },
  {
    image: wiseThinking,
    title: "Berfikir Bijak Sebelum Mengunduh di Internet",
    description:
      "Mentor Aswaja Nusantara Achmad Mursyadad sebagai narasumber membahas pentingnya memahami budaya digital, etika digital, dan keamanan digital, untuk mempromosikan perilaku online yang cerdas, etis, dan aman.",
    date: "15 Juni 2023",
  },
  {
    image: internetAddiction,
    title: "Internet Addiction : How Much Is It Too Much",
    description:
      "Mentor Aswaja Nusantara Saeroni sebagai narasumber Webinar 'Internet Addiction: How Much Is It Too Much' mendalami kecanduan internet, menggali tanda-tanda, dampak fisik dan mental, serta mengedukasi mengenai budaya, etika, dan keamanan digital.",
    date: "09 Juni 2023",
  },
  {
    image: sustainableBusiness,
    title: "Peran Inovasi Digital dalam Membangun Bisnis Berkelanjutan",
    description:
      "Pengasuh Yayasan PPM Aswaja Nusantara Muhammad Mustafied sebagai narasumber Webinar tentang 'Peran Inovasi Digital dalam Bisnis Berkelanjutan' merinci pentingnya budaya digital, etika digital, dan keamanan digital, serta bagaimana inovasi digital mendukung keselamatan sosial, lingkungan, dan pertumbuhan bisnis.",
    date: "9 Mei 2023",
  },
  {
    image: madrasahRiset,
    title: "Aswaja Nusantara Program Madrasah RISET",
    description:
      "PPM Aswaja Nusantara Program Madrasah RISET telah sukses mengadakan Pelatihan Riset yang dimulai pada 15 Februari 2020 dan berlangsung selama 9 bulan. Pelatihan tersebut berhasil dibimbing oleh para ahli di bidangnya seperti Prof. Dr. M. Baiquni, MA., Gus Muhammad Mustafid, S. Fill., dan lain-lain. Selama pelatihan, berbagai tema riset telah dibahas, meliputi Kedaulatan Pangan, Kurikulum Pendidikan, Pesantren Mandiri, Islam Nusantara, dan Big Data. Sebagai hasil dari pelatihan ini, banyak peserta yang telah berhasil mempublikasikan jurnal ilmiah.",
    date: "15 Februari 2020",
  },
]);
const selectedItem: any = ref(null);
const isModalVisible = ref(false);

const showDetail = (item: any) => {
  selectedItem.value = item;
  isModalVisible.value = true;
};

const hideDetail = () => {
  selectedItem.value = null;
  isModalVisible.value = false;
};
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-24 md:py-12 px-6 md:px-12">
    <div v-for="(item, index) in galleries" :key="index">
      <figure
        class="card cursor-pointer p-2.5 border w-full h-[250px]"
        @click="showDetail(item)"
      >
        <img
          :src="item.image"
          alt="Card Image"
          class="w-full h-full object-cover"
        />
      </figure>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="isModalVisible" class="modal">
        <div class="modal-content flex flex-col lg:flex-row w-[80%] lg:w-[60%] p-8 md:p-5">
          <Icon name="ph:x-bold" class="cursor-pointer close text-xl" @click="hideDetail" />
          <img :src="selectedItem.image" alt="Detail Image" height="300" class="object-cover w-[300px]" />
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1 md:gap-2">
              <h3 class="font-semibold text-base md:text-xl">Judul Kegiatan</h3>
              <h3 class="text-gray-600 text-sm md:text-base">{{ selectedItem.title }}</h3>
            </div>
            <div class="flex flex-col gap-1 md:gap-2">
              <h3 class="font-semibold text-base md:text-xl">Tanggal Kegiatan</h3>
              <h3 class="text-xs md:text-sm text-gray-600">{{ selectedItem.date }}</h3>
            </div>
            <div class="flex flex-col gap-1 md:gap-2">
              <h3 class="font-semibold text-base md:text-xl">Deskripsi Kegiatan</h3>
              <p class="text-xs md:text-sm text-gray-600">{{ selectedItem.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>

.modal {
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  background-color: white;
  gap: 1rem;
  position: relative;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 300ms ease;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 300ms ease;
}
</style>
