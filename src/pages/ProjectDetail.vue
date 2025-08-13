<template>
    <div class="p-8">
        <div class="grid grid-cols-2">
            <img :src="project.thumbnail" alt="" class="rounded-lg mb-4 grid-span-1 max-w-[80%]" />
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

        <div v-if="topic === 'motion_projects'">
          <h2 class="text-2xl px-9 mt-10 font-semibold mb-2">Animation</h2>
          <hr>
          <br>
          <div  id="animation" class="flex flex-col justify-center">
            <div v-for="animation_video in project.videos" class="relative w-[87vw] h-[80vh] overflow-hidden rounded-2xl bg-white">
              <video
                autoplay
                loop
                muted
                playsinline
                class="absolute inset-0 w-full h-full object-cover object-left bg-white"
              >
                    <source :src="animation_video" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <h2 class="text-2xl px-9 mt-10 font-semibold mb-2">Gallery</h2>
        <hr>
        <br>
        <!-- Tailwind note: break-inside-avoid - for controlling how a column or page should break within an element.-->
        <div class="columns-1 sm:columns-2 lg:columns-3 gap-4">
          <div
            v-for="(img, i) in project.images"
            :key="i"
            class="mb-4 break-inside-avoid"
          >
            <img
              :src="img"
              class="w-full object-contain rounded-lg"
            />
          </div>
        </div>
    
        <h2 class="text-2xl px-9 mt-10 font-semibold mb-2">Process Slides</h2>
        <hr>
        <br>
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
      topic() {
        return this.$route.query.topic || 'ux_projects'
      },
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
  