<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4 mb-20">
      <router-link
        v-for="project in projects"
        :key="project.slug"
        :to="`/projects/${project.slug}`"
        class="bg-white rounded-2xl p-6 shadow-md flex flex-col hover:shadow-xl transition"
      >
        <img :src="project.thumbnail" alt="" class="rounded-lg mb-4" />
        <h2 class="text-lg font-semibold">{{ project.title }}</h2>
        <p class="text-sm text-gray-600">{{ project.shortDescription }}</p>
      </router-link>
    </div>
  </template>
  
  <script>
  import projects from '../assets/data/project_directory'
  
  export default {
    name: 'NotebookGrid',
    props: {
      topic: {
        type: String,
        default: "ux_projects",
        description: "Name of project type"
      }
    },
    data() {
      return {}
    },
    computed: {
      projects() {
        console.log("TOPIC:", this.topic);
        return projects.filter(p => p.topic === this.topic)
      }
    }
  }
  </script>
  