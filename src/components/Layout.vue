<template>
    <div class="min-h-screen flex flex-col mx-20">
      <Header />
      <main class="flex-grow">
        <router-view />
      </main>
    </div>
  </template>
  
  <script setup>
  import Header from './Header.vue'
  </script>