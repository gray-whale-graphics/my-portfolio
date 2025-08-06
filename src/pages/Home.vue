<template>
    <div id="home-page-content" class="flex flex-col justify-center px-6">
        <div id="home-page-hero" class="flex flex-col p-10 bg-white w-[100%] h-[80vh] rounded-2xl">
            <h1 class="text-[var(--color-deluge-blue)] font-bold">
                <span class="text-2xl">Hello, I am a</span>
                <br>
                <span class="text-8xl">UI/UX,</span>
                <br>
                <span class="text-4xl">Brand & Motion Designer</span>
            </h1>
            <div id="view-projects-button" class="flex justify-end font-semibold text-2xl mt-[30%] mr-[50px]">
                <router-link to="/my-notebook"> view my work > </router-link>
            </div>
        </div>
        <!-- horizontal marquee style animation -->
        <div class="overflow-hidden w-full mt-10">
            <div class="marquee-track">
                <div class="marquee-content">
                    <span>Low to High Fidelity Prototyping</span>
                    <span>Research-driven approach</span>
                    <span>Custom vector and raster graphics</span>
                    <span>Adobe After Effects</span>
                    <span>3+ years prior software experience</span>
                </div>
                <div class="marquee-content" aria-hidden="true">
                    <span>Low to High Fidelity Prototyping</span>
                    <span>Research-driven approach</span>
                    <span>Custom vector and raster graphics</span>
                    <span>Adobe After Effects</span>
                    <span>3+ years prior software experience</span>
                </div>
            </div>
        </div>

        <!-- <div id="highlights-grid" class="grid grid-cols-5 mt-10">
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
        </div> -->
    </div>
</template>

<script setup>
</script>

<style>

.marquee-track {
  display: flex;
  width: max-content;
  animation: scroll-left 30s linear infinite;
}

.marquee-content {
  display: flex;
  gap: 4rem;
  white-space: nowrap;
}

.marquee-content span {
  flex-shrink: 0;
  min-width: max-content;
  padding-right: 2rem;
  font-weight: 500;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

</style>