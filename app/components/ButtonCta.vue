<template>
  <component
    :is="to ? 'a' : 'button'"
    :href="to"
    class="inline-block  rounded-full px-10 py-2"
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
  background-color: var(--color-primary);
  position: relative;
}

.btn-primary::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: var(--color-secondary);
  transition: height 0.3s ease;
}

.btn-primary:hover::before {
  height: 100%;
}

.btn-ghost {
  color: var(--color-text);
  background-image: linear-gradient(var(--color-secondary), var(--color-secondary));
  background-size: 100% 0%;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: background-size 0.3s ease;
}

.btn-ghost:hover {
  color: var(--color-primary);
  font-weight: 500;
  background-size: 100% 50%;
}
</style>
