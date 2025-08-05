<template>
    <div id="home-page-content" class="flex flex-col justify-center px-6">
        <div id="home-page-hero" class="flex flex-col p-10 bg-white w-[100%] h-[50vh] rounded-2xl">
            <h1 class="text-[var(--color-deluge-blue)] font-bold">
                <span class="text-2xl">Riah Coulter</span>
                <br>
                <span class="text-6xl">Designed to design</span>
            </h1>
        </div>
        <div class="grid grid-cols-3 mt-8 ">
                <img src="/my-portfolio/img/personal_pic1.jpg" class="rounded-md grid-span-1">
                <div class="flex flex-col justify-center mx-8">
                    <h2 class="text-4xl grid-span-2"> Background </h2>
                    <p>
                        A long time ago in a galaxy far, far away...
                    </p>
                </div>
        </div>
        <div class="grid grid-cols-3 mt-8 ">
            <div class="flex flex-col justify-center mx-8 grid-span-2">
                <h2 class="text-4xl"> Background </h2>
                <p>
                    A long time ago in a galaxy far, far away...
                </p>
            </div>
            <img src="/my-portfolio/img/personal_pic1.jpg" class="rounded-md grid-span-1">
        </div>
    </div>
</template>

<script setup>
console.log("Home page loaded!")
</script>