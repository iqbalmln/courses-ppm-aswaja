<script setup lang="ts">
import { ConcreteComponent } from "nuxt/dist/app/compat/capi";

type ComponentMentors = {
  mentorA: string | ConcreteComponent;
  mentorB: string | ConcreteComponent;
  mentorC: string | ConcreteComponent;
  mentorD: string | ConcreteComponent;
  mentorE: string | ConcreteComponent;
};

const mentors: ComponentMentors = {
  mentorA: resolveComponent("HomeProfileMentorA"),
  mentorB: resolveComponent("HomeProfileMentorB"),
  mentorC: resolveComponent("HomeProfileMentorC"),
  mentorD: resolveComponent("HomeProfileMentorD"),
  mentorE: resolveComponent("HomeProfileMentorE"),
};

const profiles = ref([
  {
    id: 0,
    name: "Kelas",
    icon: "ph:book-open-bold",
    active: true,
  },
  {
    id: 1,
    name: "Audio",
    icon: "ph:speaker-hifi-bold",
    active: false,
  },
  {
    id: 2,
    name: "Proyektor",
    icon: "ph:monitor-bold",
    active: false,
  },
  {
    id: 3,
    name: "Camera",
    icon: "ph:camera-bold",
    active: false,
  },
  {
    id: 4,
    name: "Mushola",
    icon: "ph:mosque-bold",
    active: false,
  },
]);

const currentMentor = shallowRef(mentors.mentorA);

const goToProfile = (val: number) => {
  if (val === 0) {
    currentMentor.value = mentors.mentorA;
  } else if (val === 1) {
    currentMentor.value = mentors.mentorB;
  } else if (val === 2) {
    currentMentor.value = mentors.mentorC;
  } else if (val === 3) {
    currentMentor.value = mentors.mentorD;
  } else {
    currentMentor.value = mentors.mentorE;
  }
};

const toggleActive = (selectedProfile: {
  id: number;
  name: string;
  icon: string;
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
  <div class="flex flex-col items-center gap-8 justify-between">
    <div class="flex gap-2 md:gap-6 mentorMenu  overflow-x-scroll w-full pb-4">
      <div
        v-for="(profile, index) in profiles"
        class="flex items-center justify-center md:justify-start gap-4 drop-shadow-md px-2 md:px-4 py-1 md:py-2 rounded-full cursor-pointer transition-all ease-in duration-100"
        :class="profile.active ? 'bg-[#48604a] text-white' : 'bg-white'"
        @click="
          toggleActive(profile);
          goToProfile(index);
        "
      >
        <figure class="">
          <Icon :name="profile.icon" />
        </figure>
        <div class="text-center md:text-left">
          <p class="text-xs md:text-base">{{ profile.name }}</p>
        </div>
      </div>
    </div>
    <div class="md:w-7/12 border-2 border-green-800 bg-white rounded-xl">
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
