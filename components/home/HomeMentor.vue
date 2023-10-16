<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ConcreteComponent } from "nuxt/dist/app/compat/capi";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from('.mentorMenu', {
    x: -100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: '.mentorMenu',
      start: "top bottom",
      toggleActions: "play complete none reset",
    },
  });
  gsap.from('.mentorContent', {
    x: 200,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: '.mentorContent',
      start: "top bottom",
      toggleActions: "play complete none reset",
    },
  });
});

type ComponentMentors = {
  mentorA: string | ConcreteComponent;
  mentorB: string | ConcreteComponent;
  mentorC: string | ConcreteComponent;
};

const mentors: ComponentMentors = {
  mentorA: resolveComponent("HomeProfileMentorA"),
  mentorB: resolveComponent("HomeProfileMentorB"),
  mentorC: resolveComponent("HomeProfileMentorC"),
};

const profiles = ref([
  {
    id: 0,
    name: "John Doe",
    job: "UI/UX Designer",
    active: true,
  },
  {
    id: 1,
    name: "Sarah Sahda",
    job: "Project Manager",
    active: false,
  },
  {
    id: 2,
    name: "Fathur Mukhlish",
    job: "Account Executive",
    active: false,
  },
]);

const currentMentor = shallowRef(mentors.mentorA);

const goToProfile = (val: number) => {
  if (val === 0) {
    currentMentor.value = mentors.mentorA;
  } else if (val === 1) {
    currentMentor.value = mentors.mentorB;
  } else {
    currentMentor.value = mentors.mentorC;
  }
};

const toggleActive = (selectedProfile: {
  id: number;
  name: string;
  job: string;
  active: boolean;
}) => {
  profiles.value.forEach((profile) => {
    if (profile !== selectedProfile) {
      profile.active = false;
    }
  });
  selectedProfile.active = !selectedProfile.active;
};
</script>

<template>
  <div class="flex flex-col md:flex-row items-center gap-8 justify-between">
    <div class="md:w-3/12 flex md:flex-col gap-2 md:gap-6 mentorMenu">
      <div
        v-for="(profile, index) in profiles"
        class="flex items-center justify-center md:justify-start gap-4 drop-shadow-md px-2 md:px-4 py-1 md:py-2 rounded-full cursor-pointer transition-all ease-in duration-100"
        :class="profile.active ? 'bg-[#48604a] text-white' : 'bg-white'"
        @click="
          toggleActive(profile);
          goToProfile(index);
        "
      >
        <figure class="w-8 md:w-12 h-8 md:h-12 rounded-full hidden md:block">
          <img
            class="w-full h-full object-cover rounded-full"
            src="https://randomuser.me/api/portraits/men/23.jpg"
            alt=""
          />
        </figure>
        <div class="text-center md:text-left">
          <p class="text-xs md:text-base">{{ profile.name }}</p>
          <p
            class="text-xs hidden md:block"
            :class="profile.active ? 'text-white' : 'text-gray-600'"
          >
            {{ profile.job }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="md:w-9/12 border-2 border-green-800 bg-white rounded-xl h-96 overflow-y-scroll mentorContent"
    >
      <transition name="tes" mode="out-in">
        <component :is="currentMentor" />
      </transition>
    </div>
  </div>
</template>
<style scoped>
.active {
  background-color: lightblue;
}
.tes-enter-active,
.tes-leave-active {
  transition: opacity 0.5s ease;
}

.tes-enter-from,
.tes-leave-to {
  opacity: 0;
}
</style>
