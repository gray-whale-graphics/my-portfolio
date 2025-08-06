<template>
    <div class="relative inline-block text-left">
      <button
        @click="isOpen = !isOpen"
        class="inline-flex hover:text-[var(--color-deep-lilac-purple)] focus:outline-none"
      >
        My Notebook
        <!-- Riah Remember: replace with heroicon eventually -->
        <svg
          class="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
  
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          v-if="isOpen"
          class="absolute z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="py-1">
            <router-link
              @click="isOpen = !isOpen"
              to="/notebook/ux"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              UX Projects
            </router-link>
            <router-link
              @click="isOpen = !isOpen"
              to="/notebook/motion"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Motion Projects
            </router-link>
            <router-link
              @click="isOpen = !isOpen"
              to="/notebook/brand"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Brand Projects
            </router-link>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotebookDropdown',
    data() {
      return {
        isOpen: false
      }
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside)
    },
    beforeUnmount() {
      document.removeEventListener('click', this.handleClickOutside)
    },
    methods: {
      handleClickOutside(event) {
        const dropdown = this.$el
        if (dropdown && !dropdown.contains(event.target)) {
            this.isOpen = false;
        }
      }
    }
  }
  </script>

  
  <style scoped>
  .dropdown-root {
    position: relative;
  }
  </style>
  