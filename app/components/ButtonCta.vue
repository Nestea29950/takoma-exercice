<template>
  <component
    :is="to ? 'a' : 'button'"
    :href="to"
    class="inline-block  rounded-full px-10 py-2 lg:text-sm xl:text-base"
    :class="variant === 'primary'
      ? 'btn-primary text-white overflow-hidden relative'
      : 'btn-ghost'"
  >
    <span v-if="variant === 'primary'" class="relative z-10"><slot /></span>
    <slot v-else />
  </component>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'ghost'
  to?: string
}>()
</script>

<style scoped>
.btn-primary {
  @apply bg-primary relative;
}

.btn-primary::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #97c680;
  transition: height 0.3s ease;
}

.btn-primary:hover::before {
  height: 100%;
}

.btn-ghost {
  @apply text-text-dark;
  background-image: linear-gradient(#97c680, #97c680);
  background-size: 100% 0%;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: background-size 0.3s ease;
}

.btn-ghost:hover {
  @apply text-primary font-medium;
  background-size: 100% 50%;
}
</style>
