<template>
    <header class="px-6 py-4 flex items-center justify-between">
      <router-link to="/">
        <h1 class="text-[2em] font-bold tracking-tight hover:text-[var(--color-deep-lilac-purple)]">
            <GrayWhaleGraphicLogo :size="52" />
            Gray Whale Graphics
        </h1>
      </router-link>
  
      <nav class="flex flex-row space-x-4 text-sm font-medium pl-[20px]">
        <router-link to="/about-me" class="hover:text-[var(--color-deep-lilac-purple)]">
          About Me
        </router-link>

        <NotebookDropdown />
  
        <router-link to="/contact-me" class="hover:text-[var(--color-deep-lilac-purple)]">
          Get in Touch
        </router-link>
      </nav>
    </header>
</template>
  

<script setup>
import NotebookDropdown from './NotebookDropdown.vue';
import GrayWhaleGraphicLogo from '../assets/icons/GrayWhaleGraphicLogo.vue';
</script>

  