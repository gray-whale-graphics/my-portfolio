<template>
    <div id="home-page-content" class="flex flex-col justify-center px-6">
        <div id="home-page-hero" class="flex flex-col p-10 bg-white w-[100%] h-[70vh] rounded-2xl">
            <h1 class="text-[var(--color-deluge-blue)] font-bold">
                <span class="text-8xl">More </span>
                <br>
                <span class="text-4xl">than motion </span>
            </h1>
        </div>
        <NotebookGrid topic="motion_projects"/>
    </div>
</template>

<script setup>
import NotebookGrid from '../../components/NotebookGrid.vue'
</script>