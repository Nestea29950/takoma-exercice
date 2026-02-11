<template>


  <section id="categories" class="py-24">
      <h2 class="text-4xl font-semibold text-center leading-none mb-16">
          Unlimited access to 100+ instructors.
        </h2>
    <!-- Filtres -->
    <div class="flex justify-center gap-10 mb-16">
      <button
        v-for="filter in filters"
        :key="filter"
        class="filter-link text-lg"
        :class="activeFilter === filter ? 'active' : ''"
        :data-text="filter"
        @click="activeFilter = filter"
      >
        {{ filter }}
      </button>
    </div>

    <!-- Grille de cartes -->
    <div class="grid grid-cols-4 gap-6">
      <div v-for="(cat, i) in categories" :key="i" class="category-card group">
        <div
          class="rounded-3xl overflow-hidden aspect-square relative"
          :style="{ backgroundColor: cat.bg }"
        >
          <img
            :src="cat.image"
            :alt="cat.title"
            class="w-full h-full object-cover"
          />
          <div class="arrow-badge">
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
              <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <h3 class="text-xl font-semibold mt-4 category-title">{{ cat.title }}</h3>
        <p class="text-sm text-text-light">{{ cat.duration }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeFilter = ref('All categories')

const filters = [
  'All categories',
  'Entertainment',
  'Lifestyle',
  'Writing',
  'Business',
  'Food',
]

const categories = [
  {
    title: 'Sales Marketing',
    duration: '4 month',
    bg: '#f0ddd5',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop',
  },
  {
    title: 'Data analytics',
    duration: '3 month',
    bg: '#d5e6c8',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop',
  },
  {
    title: 'Copywriting Pro',
    duration: '2 month',
    bg: '#d9d9d9',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=400&fit=crop',
  },
  {
    title: 'Design art',
    duration: '4 month',
    bg: '#eddcf0',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop',
  },
]
</script>

<style scoped>
.filter-link {
  color: #6b7280;
  position: relative;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.filter-link::after {
  content: attr(data-text);
  font-weight: 600;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.filter-link:hover,
.filter-link.active {
  color: #1e1e2f;
  font-weight: 600;
  border-bottom-color: #1e1e2f;
}

/* Category card hover */
.category-card {
  cursor: pointer;
}

.category-card:hover .category-title {
  color: #97c680;
}

.category-title {
  transition: color 0.3s ease;
}

.arrow-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e1e2f;
  transform: translateY(-60px);
  opacity: 0;
  transition: all 0.3s ease;
}

.category-card:hover .arrow-badge {
  transform: translateY(0);
  opacity: 1;
}
</style>
