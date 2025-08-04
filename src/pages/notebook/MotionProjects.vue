<template>
    <div id="home-page-content" class="flex flex-col justify-center px-6">
        <div id="home-page-hero" class="flex flex-col p-10 bg-white w-[100%] h-[50vh] rounded-2xl">
            <h1 class="text-[var(--color-deluge-blue)] font-bold">
                <span class="text-8xl">More </span>
                <br>
                <span class="text-4xl">than motion </span>
            </h1>
        </div>
        <div id="ux-projects" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
            <div class="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between h-full">
                <h2 class="text-lg font-semibold mb-2">Motion Project 1</h2>
                <p class="text-sm text-gray-600">Short project description goes here.</p>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between h-full">
                <h2 class="text-lg font-semibold mb-2">Motion Project 2</h2>
                <p class="text-sm text-gray-600">Short project description goes here.</p>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between h-full">
                <h2 class="text-lg font-semibold mb-2">Motion Project 3</h2>
                <p class="text-sm text-gray-600">Short project description goes here.</p>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between h-full">
                <h2 class="text-lg font-semibold mb-2">Motion Project 4</h2>
                <p class="text-sm text-gray-600">Short project description goes here.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
console.log("Home page loaded!")
</script>