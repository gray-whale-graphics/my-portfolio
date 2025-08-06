<template>
    <div id="home-page-content" class="flex flex-col justify-center px-6">
        <div id="home-page-hero" class="flex flex-col p-10 bg-white w-[100%] h-[30vh] rounded-2xl">
            <h1 class="text-[var(--color-deluge-blue)] font-bold">
                <span class="text-8xl">People </span>
                <br>
                <span class="text-3xl mt-2">ignore designs that </span>
                <br>
                <span class="text-6xl">Ignore people </span>
            </h1>
        </div>
        <div id="process" class="grid grid-cols-8 mt-10">
            <div class="flex flex-col items-center justify-center"> Design Brief </div>
            <div class="flex flex-col items-center justify-center"> Research and Moodboard </div>
            <div class="flex flex-col items-center justify-center"> Sketches </div>
            <div class="flex flex-col items-center justify-center"> Low Fidelity Prototype </div>
            <div class="flex flex-col items-center justify-center"> Mid Fidelity Prototype </div>
            <div class="flex flex-col items-center justify-center"> High Fidelity Prototype </div>
            <div class="flex flex-col items-center justify-center"> Implementation </div>
            <div class="flex flex-col items-center justify-center"> User Testing </div>
        </div>
        <NotebookGrid topic='ux_projects'/>
    </div>
</template>

<script setup>
import NotebookGrid from '../../components/NotebookGrid.vue'
</script>