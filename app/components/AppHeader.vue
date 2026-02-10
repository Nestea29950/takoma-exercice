<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background-header)]" style="padding: 38px 80px;">
    <nav class="grid items-center" style="grid-template-columns: auto 1fr auto;">
      <!-- Logo (gauche) -->
      <div>
        <a href="/">
          <img src="~/assets/logo-skillex.svg" alt="Skillex" class="h-8" />
        </a>
      </div>

      <!-- Liens (centre) -->
      <ul class="flex justify-center gap-8">
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

      <!-- CTA (droite) -->
      <div class="flex items-center justify-end gap-8">
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
  background-image: linear-gradient(var(--color-secondary), var(--color-secondary));
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
  color: var(--color-primary);
  font-weight: 500;
  background-size: 100% 50%;
}
</style>
