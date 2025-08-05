<template>
    <div class="p-8">
        <div class="grid grid-cols-2">
            <img :src="project.thumbnail" alt="" class="rounded-lg mb-4" />
            <div class="flex flex-col justify-center">
                <h1 class="text-4xl text-[var(--color-iridium-gray)] font-bold mb-4">{{ project.title }}</h1>
                <p class="mb-8 text-gray-600 my-4">{{ project.content }}</p>
                <div class="flex flex-row">
                    <div 
                        v-for="tag in project.tags" 
                        :key="tag" 
                        class="rounded-full text-white bg-[var(--color-deep-lilac-purple)] text-xs py-2 px-4 m-1"
                    >
                        {{ tag }}
                    </div>
                </div>
            </div>
        </div>
        <h2 class="text-2xl px-9 mt-10 font-semibold mb-2">Gallery</h2>
        <hr>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <img v-for="(img, i) in project.images" :key="i" :src="img" class="rounded-lg" />
        </div>
    
        <h2 class="text-2xl px-9 mt-10 font-semibold mb-2">Process Slides</h2>
        <hr>
        <div class="flex flex-col max-w-[80%] mx-auto">
            <img v-for="(slide, i) in project.slides" :key="i" :src="slide" />
        </div>
    </div>
  </template>
  
  <script>
  import projects from '../assets/data/project_directory'
  
  export default {
    name: 'ProjectDetail',
    computed: {
      project() {
        const match = projects.find(p => p.slug === this.$route.params.slug)
        if (!match) {
          // fallback behavior if slug is not found or redirect
          return { title: 'Not found', content: '', images: [], slides: [] }
        }
        return match
      }
    }
  }
  </script>
  