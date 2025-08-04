<template>
    <div id="home-page-content" class="flex flex-col justify-center px-6">
        <div id="home-page-hero" class="flex flex-col p-10 bg-white w-[100%] h-[50vh] rounded-2xl">
            <h1 class="text-[var(--color-deluge-blue)] font-bold">
                <span class="text-6xl">Good design </span>
                <span class="text-4xl">is</span>
                <br>
                <span class="text-8xl">Good business </span>
            </h1>
        </div>
        <div id="highlights-grid" class="grid grid-cols-5 mt-10">
            <div class="flex flex-col items-center justify-center"> Design Brief </div>
            <div class="flex flex-col items-center justify-center"> Research & Moodboard </div>
            <div class="flex flex-col items-center justify-center"> Sketches </div>
            <div class="flex flex-col items-center justify-center"> Revisions (3x) </div>
            <div class="flex flex-col items-center justify-center"> Final Deliverable Package </div>
        </div>
    </div>
</template>

<script setup>
console.log("Home page loaded!")
</script>