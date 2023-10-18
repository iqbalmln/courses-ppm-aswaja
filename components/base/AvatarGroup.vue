<script setup lang="ts">
import sarah from "~/assets/images/Sarah.png"
import fathur from "~/assets/images/Fathur.png"
import iqbal from "~/assets/images/Iqbal.png"
import galih from "~/assets/images/Galih.png"
const avatars = [
  {
    id: 0,
    src: sarah,
  },
  {
    id: 1,
    src: fathur,
  },
  {
    id: 2,
    src: iqbal,
  },
  {
    id: 3,
    src: galih,
  },
];
</script>

<template>
  <div>
    <div class="avatars">
      <a
        href="#"
        class="avatars__item"
        v-for="avatar in avatars"
        :class="avatar.id === 0 ? 'ml-0' : '-ml-2'"
      >
        <img class="avatar" :src="avatar.src" alt="" />/>
      </a>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #1f2532;
  display: flex; /* Flex container for UL. */
  height: 100vh;
  margin: 0px 0px 0px 0px;
}
.avatars {
  display: flex;
  list-style-type: none;
  margin: auto;
  padding: 0px;
  flex-direction: row;
  &__item {
    background-color: #596376;
    border: 2px solid #618264;
    border-radius: 100%;
    color: #ffffff;
    display: block;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 100;
    height: 32px;
    width: 32px;
    line-height: 32px;
    text-align: center;
    transition: margin 0.1s ease-in-out;
    overflow: hidden;
    /* margin-left: -10px; */
    &:first-child {
      z-index: 5;
    }
    &:nth-child(2) {
      z-index: 4;
    }
    &:nth-child(3) {
      z-index: 3;
    }
    &:nth-child(4) {
      z-index: 2;
    }
    &:nth-child(5) {
      z-index: 1;
    }
    &:last-child {
      z-index: 0;
    }
    img {
      width: 100%;
    }
  }
  &:hover {
    .avatars__item {
      margin-right: 10px;
    }
  }
}
</style>
