<script setup lang="ts">
type Props = {
  title: string;
  background?: string;
};
const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  background: 'bg-[#618264]'
});
</script>

<template>
  <span class="px-4 py-2 text-sm text-white rounded-lg" :class="background">{{ props.title }}</span>
</template>

<style scoped></style>
