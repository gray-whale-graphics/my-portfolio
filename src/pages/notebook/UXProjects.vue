<template>
    <div id="home-page-content" class="flex flex-col justify-center px-6">
        <div id="home-page-hero" class="flex flex-col p-10 bg-white w-[100%] h-[30vh] text-[var(--color-deluge-blue)] rounded-2xl">
            <span class="text-4xl font-bold">People </span>
            <span class="text-8xl font-bold ">ignore designs </span>
            <span class="text-4xl font-bold mt-3">that ignore people </span>
            <span class="text-sm font-light mt-4">-Frank Chimero </span>
        </div>
        <div id="process" class="grid grid-cols-6 mt-10">
            <div class="flex flex-col items-center justify-center"> Design Brief </div>
            <div class="flex flex-col items-center justify-center"> Research and Moodboard </div>
            <div class="flex flex-col items-center justify-center"> Sketches </div>
            <div class="flex flex-col items-center justify-center"> Low to High Fidelity Wireframes</div>
            <div class="flex flex-col items-center justify-center"> Implementation </div>
            <div class="flex flex-col items-center justify-center"> User Testing </div>
        </div>
        <NotebookGrid topic='ux_projects'/>
    </div>
</template>

<script setup>
import NotebookGrid from '../../components/NotebookGrid.vue'
</script>