<script setup lang="ts">
import abdulloh from "~/assets/images/mentors/abdulloh.jpeg";
import muhsin from "~/assets/images/mentors/muhsin.jpg";
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
import jarot from "~/assets/images/mentors/jarot.jpg";
import danang from "~/assets/images/mentors/danang.jpg";
import defaultImage from "~/assets/images/mentors/default.webp";

useHead({
  title: `LPK Aswaja Nusantara - Mentor`,
});

const route = useRoute();

const mentors = [
  {
    name: "Abdulloh Badruzzaman, S.T.,M.T.",
    photo: abdulloh,
    slug: "abdulloh-badruzzaman",
    profile: "Berprofesi sebagai Dosen Informatika di UNU Yogyakarta.",
    experience: [
      {
        year: "2017 - sampai sekarang",
        job: "Dosen Prodi Informatika - UNU Yogyakarta",
      },
      {
        year: "2018 - sampai sekarang",
        job: "Kepala UPT Perpustakaan - UNU Yogyakarta",
      },
      {
        year: "2020 - 2023",
        job: "Sekretaris Pengurus Pusat • Asosiasi Perpustakaan Perguruan Tinggi Nahdlatul Ulama (APPTNU)",
      },
      {
        year: "2023 - sampai sekarang",
        job: "Pembina • Asosiasi Perpustakaan Perguruan Tinggi Nahdlatul Ulama (APPTNU)",
      },
    ],
    education: [
      {
        university: "Institut Teknologi Bandung",
        major: "Magister Teknologi Informasi (2001-2004)",
      },
      {
        university: "Universitas 17 Agustus 1945 Semarang",
        major: "Teknik Sipil (1994-1999)",
      },
    ],
    portfolio: [
      {
        project: "Pengembangan SIM Pendapatan Daerah",
        position: "Programmer",
      },
      {
        project: "Pengembangan SIM Barang Daerah",
        position: "Programmer",
      },
      {
        project: "Pengembangan SIG Jembatan",
        position: "Programmer",
      },
      {
        project: "Pengembangan SIG Jembatan",
        position: "Programmer",
      },
    ],
    publications: [],
    award: [],
  },
  {
    name: "Ahmad Muhlisin",
    photo: muhsin,
    slug: "ahmad-muhlisin",
    profile:
      "Saya adalah editor berita di Betanews.id. Setiap harinya, saya bertugas mengedit hingga menerbitkan tulisan wartawan dan membantu editor video dalam pembuatan video berita.",
    experience: [
      {
        year: "2016 - 2017",
        job: "Wartawan Wilayah Kudus dan Pati • Koran Sindo Biro Pati Kudus",
      },
      {
        year: "2017 - 2018",
        job: "Redaktur sekaligus Penerbit • Seputarmuria.com",
      },
      {
        year: "2020 - 2023",
        job: "Sekretaris Pengurus Pusat • Asosiasi Perpustakaan Perguruan Tinggi Nahdlatul Ulama (APPTNU)",
      },
      {
        year: "2023 - sampai sekarang",
        job: "Redaktur dan Asisten Video Editor • Betanews.id",
      },
    ],
    education: [],
    publications: [],
    award: [],
    portfolio: [
      {
        project:
          "Menjadi Narasumber sebanyak 18 kali pada periode 2021 di 13 Kabupaten/Kota Jawa Tengah",
        position: "Narasumber",
      },
    ],
  },
  {
    name: "Anif Faizi",
    photo: anif,
    slug: "anif-faizi",
    profile:
      "Digital Business Betanews.id. Membangun jaringan bisnis dengan memanfaatkan kemajuan digital untuk memperoleh profit dan benefit perusahaan. Menjadi Duta Betanews.id dan menawarkan kerjasama program-program tayangan dengan tujuan iklan dan promosi.",
    experience: [
      {
        year: "2011 - 2013",
        job: "Sales Supervisor • CV. Krisna Pratama Distributor Nestle Indonesia",
      },
      {
        year: "2014 - 2016",
        job: "PMM • Bank Syariah Mandiri Kudus",
      },
      {
        year: "2017 - 2020",
        job: "Team Leader • Bank BTPN WOW Kudus",
      },
      {
        year: "2023 - sampai sekarang",
        job: "Redaktur dan Asisten Video Editor • Betanews.id",
      },
    ],
    education: [
      {
        university: "MI Miftahul Falah Kutuk 1994",
        major: "",
      },
      {
        university: "Mts Miftahul Falah Kutuk 2000",
        major: "",
      },
      {
        university: "MAN 2 Kudus 2003",
        major: "",
      },
      {
        university: "Universitas Muria Kudus 2006",
        major: "",
      },
    ],
    publications: [],
    award: [],
    portfolio: [
      {
        project:
          "Menjadi Narasumber sebanyak 18 kali pada periode 2021 di 13 Kabupaten/Kota Jawa Tengah",
        position: "Narasumber",
      },
    ],
  },
  {
    name: "Fadmi Rina, S.Kom., M.Kom.",
    photo: fadmi,
    slug: "fadmi-rina",
    profile: "Berprofesi sebagai Dosen Informatika di UNU Yogyakarta.",
    experience: [
      {
        year: "2020 - 2022",
        job: "Dosen S1 Informartika",
      },
    ],
    education: [
      {
        university: "Universitas Teknologi Yogyakarta",
        major: "Sarjana Teknik Informatika",
      },
      {
        university: "Universitas Islam Indonesia",
        major: "Magister Informatika",
      },
    ],
    portfolio: [
      {
        project:
          "Desain serious game untuk indentifikasi bunyi pada anak tunarungu menggunakan user center design",
        position: "Ketua",
      },
      {
        project:
          "Pengembangan Aplikasi Pengingat Halte untuk Membantu Mahasiswa Tunarungu Dalam Menggunakan Transportasi Umum Trans Jogja berbasis Android",
        position: "Anggota",
      },
      {
        project:
          "Optimalisasi Automated Guided Vehicles untuk Sektor Pergudangan",
        position: "Anggota",
      },
    ],
    publications: [],
    award: [],
  },
  {
    name: "Harsa Permata, M.Phil.",
    photo: harsa,
    slug: "harsa-permata",
    profile: `Saya berumur 44 tahun, laki-laki, saya fasih berbahasa Inggris, bisa mengoperasikan komputer (ms word, power point, dan excel), dan saya lulus Pascasarjana Program Fakultas Filsafat Universitas Gadjah Mada Yogyakarta, jurusan Filsafat. Saya seorang penulis dan dosen yang menguasai beberapa mata kuliah seperti Logika, Etika Umum, Etika Politik, Etika Profesi Hukum, Pancasila, Kewarganegaraan. Pendidikan/Pendidikan Kewarganegaraan, Filsafat Ilmu Pengetahuan, dan guru di Mata Pelajaran Bahasa Indonesia, Bahasa Arab Dasar, dan Agama Islam Studi (untuk Program Sekolah Dasar, Program Sekolah Menengah, Program Diploma, Kurikulum Nasional, dan juga untuk Universitas Kurikulum Cambridge / IGCSE). Saya juga seorang yang cepat ramping, rajin dan orang yang bisa diandalkan; ingin mengembangkan potensi kemampuanku dengan prospek masa depan yang menarik.`,
    experience: [
      {
        year: "Sejak 2018",
        job: "Teaching Staff, at Islamic University of Indonesia, Boarding School, Since 2018. 2. Lecturer of Pancasila",
      },
      {
        year: "Sejak 2018",
        job: "Lecturer of Pancasila at Sanata Dharma University",
      },
      {
        year: "2020 - 2021",
        job: "Secondary Principal of SMP Al Azhar Cairo, Yogyakarta",
      },
      {
        year: "Sejak 2016",
        job: "Lecturer of General Studies (Ethics, Pancasila, and Civic Education) at Universal University, Batam, Riau Islands.",
      },
    ],
    education: [
      {
        university: "Universitas Teknologi Yogyakarta",
        major:
          "PhD Research Proramme in University of Bath, United Kingdom, Majoring in Politics, Languages, and International Studies, 2017 - 2019 (Unfinished)",
      },
      {
        university: "Gadjah Mada University Yogyakarta",
        major: "Master Degree Philosophy",
      },
      {
        university: "Gadjah Mada University Yogyakarta",
        major: "Majoring in Philosophy",
      },
    ],
    portfolio: [],
    award: [],
    publications: [
      {
        title:
          "“Tradisi Marxisme di Nusantara” (Marxist Tradition in the Archipelago), published and discussed at “Lembaga Filsafat Nusantara” (The Institution of Philosophy of Archipelago), Faculty of Philosophy, Gadjah Mada University, 2012.",
      },
      {
        title:
          "“Redemption Song dan Pembebasan” (Redemption Song and Liberation) A Political Philosophy Essay about Indonesian political and economic condition.",
      },
    ],
  },
  {
    name: "Mar'atul Uliyah, S.Pd.",
    photo: ulya,
    slug: "maratul-uliyah",
    profile: "Berprofesi sebagai Pemimpin Redaksi Majalah Suluh, FPUB",
    experience: [
      {
        year: "",
        job: "Pemimpin Redaksi Majalah Suluh, FPUB",
      },
      {
        year: "",
        job: "Manajer Program Islam dan Gender LKiS",
      },
      {
        year: "",
        job: "Program Penguatan Perempuan di Bantul, Perkumpulan Narasita ",
      },
      {
        year: "2003 -2005",
        job: "Pemandu dan pengelola Program Talk show Speak Up Islam Moderat di Radio Global bekerja sama dengan LKiS",
      },
    ],
    education: [
      {
        university: "Universitas Ahmad Dahlan",
        major: "Program Pengembangan Kompetensi Profesi Pendidik",
      },
      {
        university: "Universitas Negeri Yogyakarta",
        major: "S1 Bahasa dan Sastra Indonesia, Fakultas Bahasa dan Seni",
      },
      {
        university: "Pondok Pesantren Mambaul Ma’arif",
        major: "MA Negeri Denanyar",
      },
    ],
    portfolio: [
      {
        project:
          "Artikel atau opini dan resensi di pelbagai media massa dan media komunitas (Harian Jogja, Kedaulatan Rakyat, Suara Merdeka, KOMPAS, Bernas, dll)",
        position: "",
      },
      {
        project:
          "Antologi puisi bersama When The Days Were Raining : Banjarbaru's Rainy Day Literary Festival (buku bahasa Indonesia dan buku terjemahan bahasa Inggris (2019)",
        position: "",
      },
      {
        project: "Cerpen Panji Tunggul Wulung",
        position: "",
      },
    ],
    publications: [],
    award: [],
  },
  {
    name: "Mustaghfiroh Rahayu, S.Th.I., M.A.",
    photo: mustaghfiroh,
    slug: "mustaghfiroh-rahayu",
    profile: "Berprofesi sebagai Dosen Sosiologi UGM",
    experience: [
      {
        year: "August 2014 –  Dec 2022",
        job: "Sociology Department of Gadjah Mada University, Lecturer",
      },
      {
        year: "Sept 2008 – 2013",
        job: "Center for Religion and Cross-cultural Studeis, Researcher",
      },
      {
        year: "Januari 2009 – 2011",
        job: "Center for Religious and Cross-cultural Studies, Co-Teacher for Gender and Religion Class",
      },
      {
        year: "September 2008 – March 2011",
        job: "Center for Religious and Cross-cultural Studies (CRCS) Gadjah Mada University, Coordinator of Department Research and Public Education",
      },
    ],
    education: [
      {
        university: "University for Humanistics, Utrecht, the Netherlands, ",
        major: "Ph.D program on Humanities.",
      },
      {
        university: "Florida International University (Miami Florida)",
        major: "Master of Art in Religious Studies",
      },
      {
        university: "Gadjah Mada University (Yogyakarta, Indonesia), ",
        major: "Master of Art in Religious and Cross-cultural Studies",
      },
      {
        university: "State Institute of Islamic Studies “Sunan Kalijaga”",
        major: "Bachelor of Art in Qur’anic Studies",
      },
    ],
    portfolio: [],
    award: [],
    publications: [
      {
        title:
          "Masúdi, W.; Rahmawati, Ayu Diasti.; Cahyafitri, Raras.; Maika, Amelia.; Rahayu, Mustaghfiroh.; Prastowo, Fuji Riang., 2023. Morality Policies and The Prospect for Inclusive Citizenship in Decentralized Indonesia: A Study of West Java. A research report in collaboration with ICLD Swedish International Center for Local Studies",
      },
      {
        title:
          "Rahayu, M., and Abheseka, N.M.R., 2020. Village Women’s Advocacy for Strengthening Migrant Worker Protection: Safe Migration under Village and District Regulations. In A. Savirani, R. Diprose, A.S. Hartoto, and K.M.P. Setiawan [Eds], Forging Pathways for Gender-inclusive Development in Rural Indonesia: Case Studies of Women’s Collective Action and Influence on Village Law Implementation. The University of Melbourne, Universitas Gadjah Mada and MAMPU: Jakarta, pp. 165-188. doi: 10.46580/124328. ",
      },
      {
        title:
          "Rahayu, M., and Ulfa, N., 2020. Women Homeworkers: Advocating for the Recognition and the Protection of Workers’ Rights and Shifting Local Norms. In A. Savirani, R. Diprose, A.S. Hartoto, and K.M.P. Setiawan [Eds], Forging Pathways for Gender-inclusive Development in Rural Indonesia: Case Studies of Women’s Collective Action and Influence on Village Law Implementation. The University of Melbourne, Universitas Gadjah Mada and MAMPU: Jakarta, pp. 190-209. doi: 10.46580/124328.",
      },
    ],
  },
  {
    name: "Pusvyta Sari, S.Pd., M.Pd.",
    photo: pusvyta,
    slug: "pusvyta-sari",
    profile:
      "Beprofesi sebagai Dosen Manajemen Pendidikan Islam Institut Pesantren Sunan Drajad Lamongan.",
    experience: [
      {
        year: "2014 –  Sampai sekarang",
        job: "Dosen tetap Institut Pesantren Sunan Drajat (Prodi Manajemen Pendidikan Islam)",
      },
      {
        year: "2013",
        job: ":Dosen di PPT Ibnu Shina Paciran Lamongan",
      },
      {
        year: "Januari 2008 – 2011",
        job: "Koordinator Divisi Media dan Budaya Yayasan LKiS",
      },
    ],
    education: [
      {
        university: "Universitas Negeri Yogyakarta",
        major: "S2 Teknologi Pembelajaran",
      },
      {
        university: "Universitas Negeri Yogyakarta",
        major: "S1 Pedidikan Bahasa Perancis",
      },
    ],
    portfolio: [
      {
        project:
          "Penghargaan dari Direktur Lembaga Indonesia Prancis, pembacaan naskah puisi dalam lomba baca puisi “Dua Abad Victor Hugo”",
        position: "Juara I ",
      },
      {
        project:
          "Sertifikat DELF A1 (Diplome d’études en langue française 1er degré, Expression générale, Sertifikat Diploma Pelajar Bahasa Prancis tingkat 1, Ekspresi Umum)",
        position: "",
      },
      {
        project:
          "Penghargaan dari United Nations Population Fund (UNFPA) dan Badan Administrasi Kependudukan dan Mobilitas Penduduk untuk partisipan lomba lukis Poster",
        position: "",
      },
    ],
    publications: [],
    award: [],
  },
  {
    name: "Saeroni, S.Ag., M.H.",
    photo: saeroni,
    slug: "saeroni",
    profile: "Asosiate Researcher Adi Rifqi Annisa Yogyakarta.",
    experience: [
      {
        year: "2020 –  Sampai sekarang",
        job: "Sekretaris Yayasan Bumi Aswaja Yogyakarta, pendiri dan pengelola SMP, SMA, dan Pesantren Bumi Cendikia",
      },
      {
        year: "2020 - Sampai Sekarang",
        job: "Koordinator Nasional Aliansi Laki-laki Baru",
      },
      {
        year: "2020 - Sampai Sekarang",
        job: "Assosiace Researcher di Rifka Annisa Yogyakarta ",
      },
      {
        year: "2020 – Sampai Sekarang",
        job: "Anggota LAKPESDAM PWNU DI. Yogyakarta",
      },
    ],
    education: [
      {
        university: "Fakultas Hukum, Universitas Gajah Mada, Yogyakarta",
        major: "Magister Ilmu Hukum",
      },
      {
        university: "Fakultas Syariah, IAIN Sunan Kalijaga, Yogyakarta",
        major: "Jinayah-Siyasah",
      },
    ],
    portfolio: [],
    award: [],
    publications: [
      {
        title:
          "Penelitian Perkawinan Anak di Nusa Tengga Timur (Lembata, Nagekeo dan Timor Tengah Selatan), Yayasan Plan Internasional Indonesia (YPII), 2021",
      },
      {
        title:
          "Respon Kelompok Islam Moderat terhadap Radikalisme/Konservatisme dalam isu Keluarga dan Perempuan, Peneliti, CRCS UGM 2020",
      },
      {
        title:
          "Analisis Respon dan Biaya Pencegahan Dan Penanganan Kekerasan Dalam Rumah Tangga Di Tingkat Desa, Peneliti, RudgersWPF - Rifka Annisa, 2020",
      },
      {
        title:
          "Aspek Pyco-Legal dalam Penindakan Terhadap Pelaku Kekerasan Dalam Rumah Tangga: Sebuah Studi Implementasi Pasal 50 Huruf b Undang-Undang Nomor 23 Tahun 2004 Tentang Penghapusan Kekerasan Dalam Rumah Tangga, Advisor, 2020",
      },
    ],
  },
  {
    name: "Achmad Musyaddad, S.I.P.",
    photo: mursyaddad,
    slug: "achmad-musyaddad",
    profile: "lorem ipsum dolor sit amet consectur",
    experience: [
      {
        year: "2023 - 2025",
        job: "Direktur, Yayasan Sanggar Inovasi Desa",
      },
      {
        year: "2018 - 2022",
        job: "Peneliti, LPPM UNU Yogyakarta",
      },
      {
        year: "2012 - 2018",
        job: "Direktur, Centre for LEAD",
      },
      {
        year: "2006 - 2008",
        job: "Staf Media dan Komunikasi, Komisi Penyiaran Indonesia Pusat",
      },
    ],
    education: [
      {
        university: "Universitas Gadjah Mada, Yogyakarta",
        major: "S1 Ilmu Pemerintahan, Fakultas Ilmu Sosial dan Ilmu Politik",
      },
    ],
    portfolio: [
      {
        project:
          "Pesantren EMAS (Ekosistem Madani Atasi Sampah), PWNU-UNU Yogyakarta-Desa Panggungharjo, 2023.",
        position: "Konsultan",
      },
      {
        project:
          "Pengembangan Kawasan Perdesaan, Dinas Pemberdayaan Masyarakat Desa Provinsi Sumatera Selatan, 2023.",
        position: "Konsultan",
      },
      {
        project:
          "Pengembangan Assesment Tools dan Analisis Capaian Kemandirian Kampung di Kabupaten Berau, YSID-Yayasan Konservasi Alam Nusantara, 2023.",
        position: "Peneliti",
      },
      {
        project:
          "Pengembangan Aplikasi Sistem Informasi Desa, YSID-Yayasan Konservasi Alam Nusantara, 2022.",
        position: "Konsultan",
      },
    ],
    publications: [],
    award: [],
  },
  {
    name: "Maisaroh, S.E., M.Si.",
    photo: maisaroh,
    slug: "maisaroh",
    profile:
      "Berprofesi sebagai Dosen Program Studi Bisnis Digital Program Sarjana Terapan Fakultas Bisnis dan Ekonomika Universitas Islam Indonesia",
    experience: [
      {
        year: "",
        job: "Dosen Program Studi Bisnis Digital Universitas Islam Indonesia",
      },
    ],
    education: [
      {
        university: "Unversitas Sebelas Maret",
        major: "Mahasiswa Program Doktor Ilmu Ekonomi Fakultas Ekonomi",
      },
      {
        university: "Universitas Gadjah Mada Yogyakarta",
        major:
          "Magister Sains Program, Jurusan Ilmu-Ilmu Sosial, Program Study Manajemen",
      },
      {
        university: "Universitas Muhammadiyah Yogyakarta",
        major: "Fakultas Ekonomi, Jurusan Manajemen",
      },
    ],
    portfolio: [],
    publications: [
      {
        title:
          "Analisis Faktor-Faktor Penentu Kesuksesan Pendidikan Entrepreneurship ( sebagai ketua tim mandiri), Jurnal Econosains FE UNJ, 2009",
      },
      {
        title:
          "Peningkatan Hasil Belajar Siswa Dengan Menggunakan Metode Pembelajaran Active Learning Tipe Quiz Team Pada Mata Pelajaran Ketrampilan Dasar Komunikasi di SMK 1 Bogor, Jurnal Ekonomi dan Pendidikan FISE UNY, 2011",
      },
      {
        title:
          "Hubungan antara Persepsi Pengelola Akademik Tentang Total Quality Management (TQM) dengan Pengintegrasiannya Dalam Kurikulum Pendidikan Tinggi UNJ, Jurnal Ekonomi dan Pendidikan FISE UNY, 2011",
      },
      {
        title:
          "Tantangan dan Peluang Perbankan Syariah Dalam Pengembangan Usaha Kecil dan Menengah Untuk Memperkuat Kesejahteraan Umat, Jurnal Econosains FE UNJ, 2011",
      },
    ],
    award: [],
  },
  {
    name: "Farid Assifa, S.Fil.",
    photo: farid,
    slug: "farid-assifa",
    profile:
      "Selama 17 tahun berkarir menjadi wartawan mulai dari cetak hingga online dan sudah mendapat sertifikat kompetensi Ahli Madya dari Dewan Pers. Pengalaman liputan baik dalam maupun luar negeri. Pengalaman liputan di luar negeri di antaranya di Singapura; China; Jepang dan; Nairobi, Kenya (liputan kegiatan PBB). Selama menjadi wartawan di Kompas.com bergabung dengan Google Network Initiatives untuk pelatihan cek fakta, serta memberikan pelatihan jurnalisme online dan literasi digital di berbagai kegiatan, seperti program Literasi Digital Kementerian Informasi dan Komunikasi (Kominfo). Di sela senggang, waktu dihabiskan untuk blogging dengan memiliki beberapa blog, mulai dari teknolist.blog dan dehoussydesign.blog.",
    experience: [
      {
        year: "Juni - Juli 2023",
        job: "PETUGAS PENYELENGGARA IBADAH HAJI (PPIH) 1444H/2023M, KEMENAG",
      },
      {
        year: "Juni 2012 - Sampai Sekarang",
        job: "EDITOR, KOMPAS.COM",
      },
      {
        year: "Jan 2012 - Mei 2015",
        job: "EDITOR, KORAN HARIAN RADAR TASIKMALAYA (JAWA POS GROUP)",
      },
    ],
    education: [
      {
        university: "FAKULTAS FILSAFAT UGM",
        major: "SARJANA FILSAFAT",
      },
    ],
    portfolio: [],
    award: [],
    publications: [
      {
        title:
          "Buku 50 Pemikir Pendidikan dari Piaget Sampai Sekarang (terj), 2003, Jendela Press, Jogjakarta",
      },
      {
        title:
          "Buku Dua Periode Kepemimpinan Drs H Tatang Farhanul Hakim MPd, 2011, Yff, Bandung.",
      },
      {
        title:
          "Skripsi, “Pendidikan Sebagai Ruang Publik dalam Perspektif Teori Kritis Jurgen Habermas”, 2005, unpublished.",
      },
    ],
  },
  {
    name: "Suwoko",
    photo: suwoko,
    slug: "suwoko",
    profile: "Berprofesi sebagai Founder Beta Media, (betanews.id)",
    experience: [
      {
        year: "2020 - Sampai Sekarang",
        job: "Founder Beta Media (betanews.id)",
      },
      {
        year: "2013 - 2015",
        job: "Editor Koran Muria/MuriaNews.com",
      },
      {
        year: "2011 - 2013",
        job: "Reporter Warta Jateng/Tribun Jateng",
      },
    ],
    education: [
      {
        university: "Universitas Muria Kudus",
        major: "FKIP BI T",
      },
      {
        university: "Ponpes Raudlatul Muta’allimin, Kudus",
        major: "",
      },
      {
        university: "MAN 2 Kudus",
        major: "",
      },
    ],
    portfolio: [],
    publications: [],
    award: [
      {
        title: "Peraih Beasiswa Liputan anti-Korupsi AJI Jakarta tahun 2012",
      },
      {
        title: "Pemenang Karya Jurnalistik Anggaran AJI Yogyakarta tahun 2012",
      },
      {
        title:
          "Pemenang Penulisan Artikel antar-Jurnalis se-Jateng UMK tahun 2014",
      },
    ],
  },
  {
    name: "Anis Susila Abadi, S.T., M.Kom.",
    photo: anis,
    slug: "anis-susila",
    profile:
      "Berprofesi sebagai Dosen di Universitas Nahdlatul Ulama Yogyakarta",
    experience: [
      {
        year: "2023 - Sampai Sekarang",
        job: "Direktur Aset dan Infrastruktur, UNU Yogyakarta",
      },
      {
        year: "2022 - 2023",
        job: "Direktur Kemahasiswaan, UNU Yogyakarta",
      },
      {
        year: "2020 - 2022",
        job: "Wakil Dekan Fakultas Teknologi Informasi, UNU Yogyakarta",
      },
    ],
    education: [],
    portfolio: [],
    publications: [],
    award: [],
  },
  {
    name: "Jarot Waskito",
    photo: jarot,
    slug: "jarot-waskito",
    profile:
      "Memulai fokus di dunia videografi sejak 2008. Sampai saat ini sudah membahkan banyak karya video baik video dokumenter, film pendek, maupun klip video liputan. Bisa bekerja secara tim maupun individu untuk menghasilkan karya video.",
    experience: [
      {
        year: "2022",
        job: "Video Jingle, Lapas Perempuan Yogyakarta",
      },
      {
        year: "2022",
        job: "Baskoro & Sekar: Pernikahan Penghayat Kerokhanian Sapta Darma, Video Dokumenter, Yayasan LKiS",
      },
      {
        year: "2020",
        job: "Company Profile, Balai Sertifikasi Industri",
      },
      {
        year: "2020",
        job: "Penghayat Lahir Batin, Video Dokumenter, Yayasan LKiS",
      },
    ],
    education: [
      {
        university: "Universitas Negeri Yogyakarta",
        major: "Sastra Indonesia",
      },
    ],
    portfolio: [],
    publications: [],
    award: [],
  },
  {
    name: "Danang Teguh Qoyyimi, S.Si., M.Sc., M.Act.Sc., Ph.D.",
    photo: danang,
    slug: "danang-teguh",
    profile: "Berprofesi sebagai Dosen di UGM",
    experience: [
      {
        year: "2008 - Sampai Sekarang",
        job: "Dosen",
      },
    ],
    education: [
      {
        university: "University of Waterloo, Canada",
        major:
          "M.Act.Sc., Professional master program in Actuarial Science, Oct, 2018",
      },
      {
        university: "University of Western Ontario, London, Ontario, Canada",
        major: "Ph.D., Statistics, Actuarial Science, Feb 2016",
      },
      {
        university: "Universitas Gadjah Mada, Yogyakarta, Indonesia",
        major: "M.Sc., Mathematics, Oct, 2008",
      },
    ],
    portfolio: [
      {
        project:
          "Modeling and Understanding Indonesian Tropical Peatland for Sustainable Development",
        position: "researcher",
      },
      {
        project:
          "The application of actuarial models on earthquake financing in Indonesia",
        position: "principal investigator",
      },
      {
        project: "The adapted Preston Curve to manage longevity risk",
        position: "principal investigator",
      },
    ],
    publications: [
      {
        title:
          "Qoyyimi, D. T. and Utama, R.C. (2023). Adapted Preston’s Curve: a Proxy Method for Longevity Risk Analysis on Indonesian Pension Plan. BAREKENG: Journal of Mathematics and Its Applications, 17(2): 0897–0904.",
      },
      {
        title:
          "Yogesswara, G.A.P., Qoyyimi, D. T. and Abdurakhman (2023). Managing Heart Related diseases Risks in BPJS Kesehatan using Collective Risk Models Media Statistika, 15(2): 175–185.",
      },
      {
        title:
          "Qoyyimi, D. T. and Zitikis, R. (2015). Measuring association via lack of comonotonicity: the LOC index and a problem of educational assessment. Dependence Modeling, 3(1): 83–97.",
      },
    ],
    award: [
      {
        title:
          "READI (Risk Management, Economic Sustainability, and Actuarial Science Development in Indonesia) scholarship, University of Waterloo",
      },
      {
        title:
          "Directorate General of Higher Education of Indonesia Scholarship for Ph.D study",
      },
    ],
  },
];
</script>

<template>
  <div class="px-6 md:px-12 py-24 md:py-12">
    <h2 class="text-green-aswaja text-3xl md:text-5xl font-bold mb-4">
      Detail Profil Mentor
    </h2>
    <section
      v-for="mentor in mentors"
      v-show="mentor.slug === route.params.slug"
      class="flex flex-col-reverse md:flex-row justify-between gap-12"
    >
      <div class="flex-1 flex flex-col gap-4">
        <div>
          <p class="font-bold">Nama:</p>
          <h1 class="text-gray-600 text-sm md:text-base">{{ mentor.name }}</h1>
        </div>
        <div v-if="mentor.slug !== 'achmad-musyaddad'">
          <p class="font-bold">Profil Singkat:</p>
          <p class="text-gray-600 text-sm md:text-base">{{ mentor.profile }}</p>
        </div>
        <div v-show="mentor.experience.length > 0">
          <p class="font-bold pb-1">Pengalaman:</p>
          <ul class="pl-4 flex flex-col gap-2">
            <li
              v-for="exp in mentor.experience"
              class="list-disc text-gray-600 text-sm md:text-base"
            >
              <p>{{ exp.year }}</p>
              <p>{{ exp.job }}</p>
            </li>
          </ul>
        </div>
        <div v-show="mentor.education.length > 0">
          <p class="font-bold pb-1">Edukasi:</p>
          <ul class="pl-4 flex flex-col gap-2">
            <li
              v-for="ed in mentor.education"
              class="list-disc text-gray-600 text-sm md:text-base"
            >
              <p>{{ ed.university }}</p>
              <p>{{ ed.major }}</p>
            </li>
          </ul>
        </div>
        <div v-show="mentor.portfolio.length > 0">
          <p class="font-bold pb-1">Portfolio:</p>
          <ul class="pl-4 flex flex-col gap-2">
            <li
              v-for="porto in mentor.portfolio"
              class="list-disc text-gray-600 text-sm md:text-base"
            >
              <p>{{ porto.project }}</p>
              <p>{{ porto.position }}</p>
            </li>
          </ul>
        </div>
        <div v-show="mentor.publications.length > 0">
          <p class="font-bold pb-1">Publikasi:</p>
          <ul class="pl-4 flex flex-col gap-2">
            <li
              v-for="publication in mentor.publications"
              class="list-disc text-gray-600 text-sm md:text-base"
            >
              <p>{{ publication.title }}</p>
            </li>
          </ul>
        </div>
        <div v-show="mentor.award.length > 0">
          <p class="font-bold pb-1">Penghargaan:</p>
          <ul class="pl-4 flex flex-col gap-2">
            <li
              v-for="award in mentor.award"
              class="list-disc text-gray-600 text-sm md:text-base"
            >
              <p>{{ award.title }}</p>
            </li>
          </ul>
        </div>
      </div>
      <figure
        class="w-[350px ]md:w-[500px] h-[350px] md:h-[500px] border-2 border-green-aswaja rounded-xl"
      >
        <img
          :src="mentor.photo || defaultImage"
          alt=""
          class="w-full h-full object-cover rounded-xl"
        />
      </figure>
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
