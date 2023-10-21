<script setup lang="ts">
const menus = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Profil",
    url: "/profile",
    children: [
      {
        name: "Sejarah",
        url: "/profile/history",
      },
      {
        name: "Visi, Misi, dan Tujuan",
        url: "/profile/vision-and-mision",
      },
      {
        name: "Organisasi",
        url: "/profile/organization",
      },
      {
        name: "Fasilitas",
        url: "/profile/facilites",
      },
    ],
  },
  {
    name: "Program Kursus",
    url: "/courses",
  },
  {
    name: "Blog dan Galeri",
    url: "/gallery",
  },
];

const router = useRouter();

const isOpen = ref<boolean>(false);

const mobile = ref<boolean>(false);

const mouseover = () => {
  isOpen.value = true;
};

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const mouseleave = () => {
  isOpen.value = false;
};

onMounted(() => {
  const userAgent = navigator.userAgent;
  if (/Android|iPhone/i.test(userAgent)) {
    mobile.value = true;
  } else {
    mobile.value = false;
  }
});

const goTo = (route: string) => {
  if (isDown.value === true) {
    isDown.value = false;
    router.push(route);
  } else {
    router.push(route);
  }
};
const isDown = ref(false);

const goDown = () => {
  isDown.value = !isDown.value;
};
</script>

<template>
  <header class="w-full fixed md:static z-50 bg-white md:bg-transparent py-2">
    <nav class="flex justify-between items-center w-[92%] mx-auto">
      <figure>
        <img class="w-16 cursor-pointer" src="~/assets/images/logo.png" />
      </figure>
      <div
        class="absolute md:static bg-white md:bg-transparent min-h-fit left-0 z-50 w-full md:w-auto flex p-3"
        :class="
          isDown ? 'top-[10vh] duration-500' : 'top-[-700%] duration-1000'
        "
      >
        <ul
          class="flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-8"
        >
          <li v-for="menu in menus">
            <NuxtLink
              v-if="!menu.children"
              @click="goTo(menu.url)"
              class="cursor-pointer"
              activeClass="text-[#618264] border-b-2 border-[#618264] font-bold"
            >
              {{ menu.name }}
            </NuxtLink>
            <p
              v-if="menu.children && !mobile"
              class="relative h-auto md:p-5 cursor-pointer hidden md:block"
              @mouseover="mouseover"
              @mouseleave="mouseleave"
            >
              <span>
                {{ menu.name }}
              </span>
              <transition name="fade">
                <ul
                  v-if="isOpen"
                  class="md:absolute top-full left-0 list-none md:bg-zinc-50 pt-8 md:px-4 md:pb-4 md:rounded-lg md:shadow-md"
                  :class="isOpen ? 'flex flex-col gap-8' : 'hidden'"
                >
                  <li v-for="child in menu.children" class="w-52">
                    <NuxtLink
                      :to="child.url"
                      activeClass="text-[#618264] border-b-2 border-[#618264] font-bold"
                    >
                      {{ child.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </transition>
            </p>
            <p
              v-if="menu.children && mobile"
              class="relative h-auto md:p-5 cursor-pointer block md:hidden"
              @click="toggleMenu"
            >
              <span>
                {{ menu.name }}
              </span>
              <transition name="fade">
                <ul
                  v-if="isOpen"
                  class="md:absolute top-full left-0 list-none md:bg-zinc-50 pt-8 md:px-4 md:pb-4 md:rounded-lg md:shadow-md"
                  :class="isOpen ? 'flex flex-col gap-8' : 'hidden'"
                >
                  <li v-for="child in menu.children" class="w-52">
                    <NuxtLink
                      :to="child.url"
                      activeClass="text-[#618264] border-b-2 border-[#618264] font-bold"
                      class="hover:text-[#618264]"
                    >
                      {{ child.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </transition>
            </p>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-6">
        <BaseTheButton
          class="hidden md:block"
          title="Daftar Sekarang"
          variant="outlined"
        />
        <div class="block md:hidden">
          <Icon name="ph:list" @click="goDown" size="1.5rem" />
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: translateY(-20%);
}
.fade-enter-active {
  transition: all 300ms ease;
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20%);
}
.fade-leave-active {
  transition: all 300ms ease;
}
.isOpen {
  display: block;
}
</style>
