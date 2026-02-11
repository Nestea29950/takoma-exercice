<template>
  <footer class="py-16">
    <div class="grid items-start" style="grid-template-columns: auto 1fr auto;">
      <!-- Logo -->
      <div>
        <a href="/">
          <img src="~/assets/logo-skillex.svg" alt="Skillex" class="h-8" />
        </a>
      </div>

      <!-- Liens en grille 2x2 -->
      <div class="flex justify-center">
        <div class="grid grid-cols-2 gap-x-20 gap-y-8">
          <a href="#hero" class="nav-link" data-text="Find passion">Find passion</a>
          <a href="#categories" class="nav-link" data-text="Categories">Categories</a>
          <a href="#skill" class="nav-link" data-text="Skills">Skills</a>
          <a href="#avis" class="nav-link" data-text="Customer">Customer</a>
        </div>
      </div>

      <!-- Join community -->
      <div>
        <h3 class="text-xl font-semibold mb-4">Join our community</h3>
        <div class="flex overflow-hidden border border-border bg-white">
          <input
            type="email"
            placeholder="Enter your email"
            class=" pl-6 font-regular pr-6 py-5 outline-none flex-1 bg-transparent text-black placeholder-black"
          />
          <button
            class="px-4 py-5 font-semibold text-black bg-secondary"
          >
            GO
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.nav-link {
  font-size: 16px;
  line-height: 22px;
  @apply text-text-dark;
  background-image: linear-gradient(#97c680, #97c680);
  background-size: 100% 0%;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: background-size 0.3s ease;
}

.nav-link::after {
  content: attr(data-text);
  font-weight: 500;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.nav-link:hover {
  @apply text-primary font-medium;
  background-size: 100% 50%;
}
</style>
