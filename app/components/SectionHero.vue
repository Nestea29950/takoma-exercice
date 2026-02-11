<template>
  <section id="hero" class="h-[calc(70vh)] mt-20 flex flex-col">
    <div class="grid grid-cols-3 items-end flex-1 min-h-0 ">
      <!-- Texte gauche -->
      <div class="flex flex-col justify-between h-full relative justify-around">
        <h1 class="text-7xl font-semibold leading-none">
          Watch.<br />Learn.<br />Grow.
        </h1>
        <div>

        </div>
        <div class="flex items-center absolute bottom-10 z-10 shadow-xl" style="width: 110%;">
          <input
            type="text"
            placeholder="Find your passion"
            class="text-lg bg-white px-8 py-10 flex-1 outline-none placeholder-primary"
          />
          <button
            class="btn-go text-4xl font-semibold px-10 py-10 text-primary cursor-pointer shrink-0 relative overflow-hidden bg-secondary"
          >
            <span class="relative z-10">Go</span>
          </button>
        </div>
      </div>

      <!-- Images droite -->
      <div class="flex gap-8 h-full col-span-2 min-h-0">
        <div
          v-for="(card, i) in cards"
          :key="i"
          class="hero-card relative rounded-3xl overflow-hidden cursor-pointer"
          :class="activeCard === i ? 'hero-card--active' : ''"
          @mouseenter="activeCard = i"
        >
          <img
            :src="card.image"
            :alt="card.title"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <!-- Overlay bas -->
          <div class="absolute bottom-10 right-0 p-6" :class="i === 0 ? 'left-20' : 'left-4'">
            <div v-if="activeCard === i" class="flex items-end justify-between text-white">
              <div>
                <p class="text-4xl  leading-tight">{{ card.title }}</p>
                <p class="text-4xl">{{ card.subtitle }}</p>
              </div>
              <div v-if="card.count" class="text-right">
                <p class="text-4xl ">{{ card.count }}</p>
                <p class="text-lg uppercase tracking-wider">topics</p>
              </div>
            </div>
            <p
              v-else
              class="text-white text-4xl "
              style="writing-mode: vertical-rl; text-orientation: mixed; rotate: 180deg;"
            >
              {{ card.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeCard = ref(0)

const cards = [
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop&crop=face',
    title: 'Writing',
    subtitle: 'Course',
    count: '100',
    label: 'Writing',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face',
    title: 'Writing',
    subtitle: 'Course',
    count: 100,
    label: 'Writing',
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop&crop=face',
    title: 'Business',
    subtitle: 'Course',
    count: 100,
    label: 'Business',
  },
]
</script>

<style scoped>
.hero-card {
  flex: 0.5;
  transition: flex 0.5s ease;
}

.hero-card--active {
  flex: 2;
}

.btn-go::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #feba88;
  transition: height 0.3s ease;
}

.btn-go:hover::before {
  height: 100%;
}
</style>
