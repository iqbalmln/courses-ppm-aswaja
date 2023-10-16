<script setup lang="ts">
type Props = {
  title: string;
  variant?: "outlined" | "fill";
};

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  variant: "fill",
});

const variantClass = {
  outlined: "border-2 border-[#48604a] text-[#48604a]",
  fill: "bg-[#48604a] text-white",
};
const baseClass = `${variantClass[props.variant]} px-6 py-2 rounded-full`;
</script>

<template>
  <button :class="baseClass">{{ title }}</button>
</template>
