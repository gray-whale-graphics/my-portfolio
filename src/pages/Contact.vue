<template>
    <div id="home-page-content" class="flex flex-col justify-center px-6">
        <div id="home-page-hero" class="flex flex-col bg-white w-[100%] h-[80vh] rounded-2xl">
            <div class="bg-[url('/img/contact_me_illustration.jpg')] bg-cover bg-no-repeat rounded-2xl bg-center h-full w-full">
                <h1 class="text-[var(--color-deluge-blue)] font-bold  p-10">
                    <span class="text-4xl">Let's</span>
                    <br>
                    <span class="text-8xl">Chat</span>
                    <br>
                    <div class="mt-10">
                        <span class="text-2xl">(970) 901 - 4713</span>
                        <br>
                        <span class="text-lg">@graywhalegraphics</span>
                        <br>
                        <span class="text-lg">graywhalegraphics@gmail.com</span>
                    </div>
                </h1>
                <div id="view-projects-button" class="flex justify-end font-semibold text-2xl p-10 mt-[20%] mr-[50px]">
                    <a
                        href="/my-portfolio/documents/Riah_Coulter_Resume.pdf" 
                        download 
                        class="no-underline"
                    >
                        <Button class="cursor-pointer flex flex-row hover:text-gray-500"> 
                            <download-icon size="30"/>
                            <span class="px-2"> Download My Resume </span>
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import DownloadIcon from "../assets/icons/DownloadIcon.vue"
</script>