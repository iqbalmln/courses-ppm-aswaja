<script setup lang="ts">
import cryptocurrency from "~/assets/images/blog/cryptocurrency.jpg"
import coffee from "~/assets/images/blog/coffee.jpg"
import webinar from "~/assets/images/blog/webinar.jpg"
import madrasahRiset from "~/assets/images/blog/madrasah-riset.jpeg"
import internetAddiction from "~/assets/images/blog/internet-addiction.jpg"
import wiseThinking from "~/assets/images/blog/wise-thinking.jpg"
</script>

<template>
  <div class="wrapper">
    <figure class="satu h-32 md:h-64 w-full">
      <img
        class="w-full h-full object-cover rounded-lg"
        :src="cryptocurrency"
        alt=""
      />
    </figure>
    <figure class="dua h-32 md:h-64 w-full">
      <img
        class="w-full h-full object-cover rounded-lg"
        :src="wiseThinking"
        alt=""
      />
    </figure>
    <figure class="tiga h-32 md:h-64 w-full">
      <img
        class="w-full h-full object-cover rounded-lg"
        :src="webinar"
        alt=""
      />
    </figure>
    <figure class="empat h-32 md:h-64 w-full">
      <img
        class="w-full h-full object-cover rounded-lg"
        :src="coffee"
        alt=""
      />
    </figure>
    <figure class="lima h-32 md:h-64 w-full">
      <img
        class="w-full h-full object-cover rounded-lg"
        :src="internetAddiction"
        alt=""
      />
    </figure>
    <figure class="enam h-32 md:h-64 w-full">
      <img
        class="w-full h-full object-cover rounded-lg"
        :src="madrasahRiset"
        alt=""
      />
    </figure>
  </div>
</template>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(4);
  gap: 1rem;
  grid-template-areas:
    "satu satu dua tiga"
    "empat lima enam enam";
}
@media (max-width: 400px) {
  .wrapper {
    display: grid;
    gap: 1rem;
    grid-template-areas:
    "satu dua"
    "tiga empat"
    "lima enam";
  }
}
.satu {
  grid-area: satu;
}
.dua {
  grid-area: dua;
}
.tiga {
  grid-area: tiga;
}
.empat {
  grid-area: empat;
}
.lima {
  grid-area: lima;
}
.enam {
  grid-area: enam;
}
</style>
