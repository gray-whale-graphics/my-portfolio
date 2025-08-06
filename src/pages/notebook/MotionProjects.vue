<template>
    <div id="home-page-content" class="flex flex-col justify-center px-6">
        <div class="relative w-full h-[60vh] overflow-hidden rounded-2xl bg-white">
            <video
                autoplay
                loop
                muted
                playsinline
                class="absolute inset-0 w-full h-full object-cover object-center bg-white"
            >
                <source src="/my-portfolio/videos/MotionPageScene.mp4" type="video/mp4" />
            </video>
        </div>
        <NotebookGrid topic="motion_projects"/>
    </div>
</template>

<script setup>
import NotebookGrid from '../../components/NotebookGrid.vue'
</script>