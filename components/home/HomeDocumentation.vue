<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <figure class="satu h-32 md:h-64 w-full">
      <img
        class="w-full h-full object-cover rounded-lg"
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        alt=""
      />
    </figure>
    <figure class="dua h-32 md:h-64 w-full">
      <img
        class="w-full h-full object-cover rounded-lg"
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        alt=""
      />
    </figure>
    <figure class="tiga h-32 md:h-64 w-full">
      <img
        class="w-full h-full object-cover rounded-lg"
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        alt=""
      />
    </figure>
    <figure class="empat h-32 md:h-64 w-full">
      <img
        class="w-full h-full object-cover rounded-lg"
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        alt=""
      />
    </figure>
    <figure class="lima h-32 md:h-64 w-full">
      <img
        class="w-full h-full object-cover rounded-lg"
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        alt=""
      />
    </figure>
    <figure class="enam h-32 md:h-64 w-full">
      <img
        class="w-full h-full object-cover rounded-lg"
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
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
