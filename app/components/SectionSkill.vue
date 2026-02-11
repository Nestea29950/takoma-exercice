<template>
  <section id="skill" class="py-24">
    <!-- Ligne du haut : titre + description -->
    <div class="flex items-center w-full mb-24">
      <h2 class="text-5xl font-semibold leading-tight flex-1">
        Get the skills you <br> need for a job that <br>  is in demand<span class="text-secondary">.</span>
      </h2>
      <p class="text-xl flex-1 mr-20">
        The modern labor market dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
      </p>
    </div>

    <!-- Ligne du bas : skills + image -->
    <div class="grid grid-cols-4 gap-16 items-start">
      <!-- Skills avec icônes -->
      <div class="flex flex-col items-center py-8">
        <div v-for="(skill, i) in skills" :key="i" class="flex items-start gap-6">
          <!-- Icône + ligne pointillée -->
          <div class="flex flex-col items-center">
            <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0">
              <img :src="skill.icon" :alt="skill.title" class="w-6 h-6" />
            </div>
            <div v-if="i < skills.length - 1" class="w-px border-[1px] border-dashed border-primary h-16 my-4"></div>
          </div>
          <!-- Texte -->
          <div class="pt-2">
            <p class="text-xl font-semibold mb-1">{{ skill.title }}</p>
            <p class="text-text-light leading-relaxed">{{ skill.description }}</p>
          </div>
        </div>
      </div>

      <!-- Image + bandeau stats -->
      <div class="relative col-span-3">
        <!-- Bandeau stats -->
        <div
          class="absolute -top-16 right-20 z-10 flex items-center gap-12 px-14 py-10 bg-secondary"
        >
          <div class="flex items-center gap-3">
            <span class="text-5xl text-primary">10</span>
            <span class="text-xs font-semibold uppercase tracking-wider text-primary leading-tight">Years<br>Experiences</span>
          </div>
          <div class="w-px h-12 bg-primary opacity-30"></div>
          <div class="flex items-center gap-3">
            <span class="text-5xl text-primary">250</span>
            <span class="text-xs font-semibold uppercase tracking-wider text-primary leading-tight">Types of<br>Courses</span>
          </div>
        </div>

        <!-- Image -->
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=900&fit=crop&crop=face"
          alt="Professional working"
          class="w-full h-[500px] object-cover rounded-3xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import iconLeadership from '~/assets/leadership.svg'
import iconResponsability from '~/assets/responsability.svg'
import iconLight from '~/assets/light.svg'

const skills = [
  {
    icon: iconLeadership,
    title: 'Leadership',
    description: 'Fully committed to the success company',
  },
  {
    icon: iconResponsability,
    title: 'Responsibility',
    description: 'Employees will always be my top priority',
  },
  {
    icon: iconLight,
    title: 'Flexibility',
    description: 'The ability to switch is an important skill',
  },
]
</script>
