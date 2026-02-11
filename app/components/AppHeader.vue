<template>
  <header class="fixed top-0 flex justify-between left-0 right-0 py-8 xl:px-44 lg:px-16 z-50 bg-background-header">
    <nav class="grid grid-cols-4 items-center justify-between w-full">
      <div class="w-full flex justify-start">
        <a href="/">
          <img src="~/assets/logo-skillex.svg" alt="Skillex" class="h-10" />
        </a>
      </div>

     
      <ul class="flex justify-start gap-8 col-span-2">
        <li v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            class="nav-link"
            :class="activeSection === link.id ? 'active' : ''"
            :data-text="link.label"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="flex items-center justify-end gap-8 w-full">
        <a href="" class="nav-link" data-text="Login">Login</a>
        <ButtonCta variant="primary" to="/free-trial">Free Trial</ButtonCta>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const links = [
  { id: 'hero', label: 'Find passion' },
  { id: 'categories', label: 'Categories' },
  { id: 'skill', label: 'Skills' },
  { id: 'avis', label: 'Customer' },
]

const activeSection = ref('hero')

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      }
    },
    { rootMargin: '-40% 0px -40% 0px' },
  )

  for (const link of links) {
    const el = document.getElementById(link.id)
    if (el) observer.observe(el)
  }

  onUnmounted(() => observer.disconnect())
})
</script>

<style scoped>
.nav-link {
  font-size: 16px;
  line-height: 22px;
  background-image: linear-gradient(theme('colors.secondary'), theme('colors.secondary'));
  background-size: 100% 0%;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: background-size 0.3s ease;
}

.nav-link::after {
  content: attr(data-text);
  font-weight: 600;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.nav-link:hover,
.nav-link.active {
  @apply text-primary font-medium;
  background-size: 100% 50%;
}
</style>
