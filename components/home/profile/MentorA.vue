<script setup lang="ts"></script>

<template>
  <div class="flex gap-4 items-start justify-between p-4 overflow-y-scroll">
    <div class="flex flex-col gap-4 w-2/3">
      <header>
        <h3 class="text-2xl uppercase font-semibold">John Doe</h3>
        <p class="text-gray-600 text-sm">UI/UX Designer</p>
      </header>
      <div>
        <p class="text-xl font-semibold">School Background</p>
        <ul class="list-disc pl-4 text-sm text-gray-600">
          <li>University Of Brawijaya, Business Administration</li>
          <li>
            Practical Course, Stanford University, Yale, Michigan, Erasmus
          </li>
        </ul>
      </div>
      <div>
        <p class="text-xl font-semibold">Description</p>
        <p class="text-gray-600 text-sm">
          Taufic telah memiliki beragam pengalaman baik di dalam maupun luar
          negeri. Menjadi bagian kunci untuk me-manage business & project baik
          project private, public, and social. Memiliki keahlian mendalam untuk
          menyelesaikan complex problems dan melakukan process efficiency.
        </p>
      </div>
    </div>
    <figure class="h-32 md:h-64 w-1/3">
      <img
        class="w-full h-full object-cover rounded-md"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
      />
      <div class="flex justify-center gap-4 w-full mt-2">
        <NuxtLink to="#" target="blank">
          <Icon name="ph:linkedin-logo-fill" size="1.5rem" class="text-black" />
        </NuxtLink>
        <NuxtLink to="#" target="blank">
          <Icon name="ph:facebook-logo-fill" size="1.5rem" class="text-black" />
        </NuxtLink>
        <NuxtLink to="#" target="blank">
          <Icon name="ph:instagram-logo-fill" size="1.5rem" class="text-black" />
        </NuxtLink>
      </div>
    </figure>
  </div>
</template>

<style scoped></style>
