<template>
  <section id="avis" class="py-24">
    <!-- Titre -->
    <h2 class="text-4xl font-semibold text-center mb-16">
      What our customer say<span class="text-[var(--color-secondary)]">.</span>
    </h2>

    <!-- Carousel -->
    <div class="relative">
      <div
        ref="track"
        class="flex gap-6 transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentOffset}px)` }"
      >
        <div
          v-for="(review, i) in reviews"
          :key="i"
          ref="cards"
          class="flex-shrink-0 w-80 bg-white rounded-2xl p-8 flex flex-col justify-between"
          style="min-height: 240px;"
        >
          <p class="text-base leading-relaxed mb-8">{{ review.text }}</p>
          <div class="flex items-center gap-4 mt-auto">
            <img
              :src="review.avatar"
              :alt="review.name"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p class="font-semibold text-sm">{{ review.name }}</p>
              <p class="text-sm text-[var(--color-secondary)]">{{ review.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Flèches -->
    <div class="flex justify-center gap-16 mt-10">
      <button
        class="text-2xl text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
        @click="prev"
      >
        &larr;
      </button>
      <button
        class="text-2xl text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
        @click="next"
      >
        &rarr;
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const reviews = [
  {
    text: 'The explanations are clear, the teachers are responsible and friendly, and the homework is real practice',
    name: 'Rob Zuber',
    role: 'CEO',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    text: 'I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client',
    name: 'Melanie Pickett',
    role: 'IT Manager',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    text: 'I really like the speakers of the course and the quality of the lectures. There is always feedback',
    name: 'Regis Wilson',
    role: 'Engineer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    text: 'A new profession is a lot of vivid impressions. Today I was at the presentation of the regional business award',
    name: 'Emma Watson',
    role: 'Cook',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    text: 'The course exceeded my expectations. The practical assignments helped me land my dream job within weeks',
    name: 'James Chen',
    role: 'Designer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  },
  {
    text: 'The course exceeded my expectations. The practical assignments helped me land my dream job within weeks',
    name: 'James Chen',
    role: 'Designer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  },
  {
    text: 'The course exceeded my expectations. The practical assignments helped me land my dream job within weeks',
    name: 'James Chen',
    role: 'Designer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  },
  {
    text: 'The course exceeded my expectations. The practical assignments helped me land my dream job within weeks',
    name: 'James Chen',
    role: 'Designer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  },
  {
    text: 'The course exceeded my expectations. The practical assignments helped me land my dream job within weeks',
    name: 'James Chen',
    role: 'Designer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  },
]

const currentIndex = ref(0)
const currentOffset = ref(0)
const cards = ref<HTMLElement[]>([])

const cardWidth = 320
const gap = 24

function next() {
  if (currentIndex.value < reviews.length - 1) {
    currentIndex.value++
    currentOffset.value = currentIndex.value * (cardWidth + gap)
  }
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
    currentOffset.value = currentIndex.value * (cardWidth + gap)
  }
}
</script>
