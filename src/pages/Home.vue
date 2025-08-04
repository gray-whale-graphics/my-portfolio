<template>
    <div id="home-page-content" class="flex flex-col justify-center px-6">
        <div id="home-page-hero" class="flex flex-col p-10 bg-white w-[100%] h-[80vh] rounded-2xl">
            <h5 class="text-lg text-[var(--color-deluge-blue)] font-light"> 
                    Hello, I am a 
            </h5>
            <h1 class="text-[var(--color-deluge-blue)] font-bold">
                <span class="text-8xl">UI/UX</span>
                <br>
                <span class="text-6xl">& Motion Designer</span>
            </h1>
            <div id="view-projects-button" class="flex justify-end font-semibold text-2xl mt-[30%] mr-[50px]">
                <router-link to="/my-notebook"> view my work > </router-link>
            </div>
        </div>
        <div id="highlights-grid" class="grid grid-cols-5 mt-10">
            <div class="flex flex-col items-center justify-center"> 
                Low to High Fidelity Prototyping 
             </div>
            <div class="flex flex-col items-center justify-center"> 
                Research-driven approach
            </div>
            <div class="flex flex-col items-center justify-center"> 
                Custom vector and raster graphics 
            </div>
            <div class="flex flex-col items-center justify-center"> 
                Adobe After Effects 
            </div>
            <div class="flex flex-col items-center justify-center"> 
                3+ years prior software experience 
            </div>
        </div>
    </div>
</template>

<script setup>
</script>