<template>
    <div id="home-page-content" class="flex flex-col justify-center px-6">
        <div id="home-page-hero" class="flex flex-col p-10 bg-white w-[100%] h-[50vh] rounded-2xl">
            <h1 class="text-[var(--color-deluge-blue)] font-bold">
                <span class="text-8xl">People </span>
                <br>
                <span class="text-3xl mt-2">ignore designs that </span>
                <br>
                <span class="text-6xl">Ignore people </span>
            </h1>
        </div>
        <div id="my-process" class="flex flex-col p-10 bg-white w-[100%] h-[30vh] rounded-2xl mt-4">
            <h1 class="text-[var(--color-deluge-blue)] font-bold">
                <span class="text-md"> My Process </span>
            </h1>
        </div>
        <NotebookGrid topic='ux_projects'/>
    </div>
</template>

<script setup>
import NotebookGrid from '../../components/NotebookGrid.vue'
</script>