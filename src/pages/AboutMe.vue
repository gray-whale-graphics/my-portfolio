<template>
    <div id="home-page-content" class="flex flex-col justify-center px-6">
        <div id="home-page-hero" class="flex flex-col p-10 bg-white w-[100%] h-[50vh] rounded-2xl">
            <h1 class="text-[var(--color-deluge-blue)] font-bold">
                <span class="text-2xl">Riah Coulter</span>
                <br>
                <span class="text-6xl">Designed to design</span>
            </h1>
        </div>
        <div id="my-background" class="grid grid-cols-3 mt-8 mx-20">
                <img src="/my-portfolio/img/myforestpic.jpg" class="rounded-md col-span-1">
                <div class="flex flex-col ml-8 col-span-2">
                    <h2 class="text-4xl grid-span-2 mt-10"> Background </h2>
                    <p class="pt-10">
                        I'm a graphic designer and UX specialist with a 
                        background in computational linguistics and 
                        programming—which basically means I speak both human and 
                        machine. I started Gray Whale Graphics because whales 
                        keep me grounded. They're massive, majestic, and 
                        marvelously made—strong, smart, empathetic, and 
                        adaptable. Just like whales dive deep, I dive deep into 
                        research to craft meaningful, story-driven design 
                        solutions. In a sea full of content (and a rising tide 
                        of AI-generated noise), my job is to help clients 
                        navigate the waters with clarity, purpose, and a little 
                        creative flair. At the end of the day, I'm here to bring 
                        your “tale” to life—and have a whale of a time doing it.
                    </p>
                </div>
        </div>

        <div id="my-faith" class="grid grid-cols-3 mt-8 mx-20">
            <div class="flex flex-col mr-8 col-span-2">
                <h2 class="text-4xl mt-10"> Faith </h2>
                <p class="pt-10">
                    My friendship with Jesus Christ is the foundation of my both 
                    my personal and professional life. He is my source of peace, 
                    purpose, joy and strength. I believe that creativity is a 
                    reflection of the Creator, and I aim to honor Him in the way 
                    I serve others through design, integrity, and compassion. 
                    Every project is an opportunity to steward the gifts He’s 
                    given me and to reflect His love in both the process and the 
                    final product.
                </p>
            </div>
            <img src="/my-portfolio/img/pexels-tara-winstead-8383646.jpg" class="rounded-md col-span-1">
        </div>

        <div id="experience" class="flex flex-col mx-20 mt-10">
            <h2 class="text-4xl mb-4"> Experience </h2>
            <hr>
            <div class="grid grid-cols-2 gap-4 mt-10">
                <div> 
                    <ul class="flex flex-col justify-center gap-10">
                        <li> 
                            <b>UI/UX & Graphic Designer | Redshred LLC</b>
                            <br>
                            Aug 2024 - Present
                        </li>
                        <li> 
                            <b>Graphic Designer | Holy Trinity Episcopal School</b>
                            <br>
                            Gray Whale Graphics [freelance]       April 2025 - Present
                        </li>
                        <li> 
                            <b>Computational Linguist & Data Scientist | Redshred LLC</b>
                            <br>
                            Aug 2022 - Aug 2024
                        </li>
                    </ul>
                </div>
                <div> 
                    <ul class="flex flex-col justify-center gap-10">
                        <li> 
                            <b>Natural Language Processing Intern | Redshred LLC</b>
                            <br>
                            Jan 2022 - May 2022
                        </li>
                        <li> 
                            <b>Graduate Research Assistant | University of Arizona</b>
                            <br>
                            May 2021 - Dec 2021
                        </li>
                        <li> 
                            <b>Language Software Development Intern | Summer Institute of Linguistics (SIL)</b>
                            <br>
                            Aug 2020 - Feb 2021
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="Education" class="flex flex-col mx-20 mt-10 mb-20">
            <div class="grid grid-cols-2 gap-4 mt-10">
                <div> 
                    <h2 class="text-4xl mb-4"> Education </h2>
                    <hr class="mb-10">
                    <ul class="flex flex-col justify-center gap-10">
                        <li> 
                            <b>GRAPHIC DESIGN & WEB DEVELOPMENT </b>
                            <br>
                            F.I.R.S.T Institute • Aug 2025 • Orlando, FL
                            <br>
                            Diploma
                        </li>
                        <li> 
                            <b>HUMAN LANGUAGE TECHNOLOGY</b>
                            <br>
                            University of Arizona • April 2022 • Tucson, AZ
                            <br>
                            Master's Degree
                        </li>
                        <li> 
                            <b>LINGUISTICS & LANGUAGES EMPHASIS</b>
                            <br>
                            Unversity of Arizona • Aug 2021 • Tucson, AZ
                            <br>
                            Bachelor's Degree
                        </li>
                    </ul>
                </div>
                <div> 
                    <h2 class="text-4xl mb-4"> Proficiencies </h2>
                    <hr class="mb-10">
                    <div class="grid grid-cols-2">
                        <ul class="flex flex-col justify-center gap-10">
                            <li> <b>Adobe Photoshop</b></li>
                            <li> <b>Adobe Illustrator</b></li>
                            <li> <b>Adobe InDesign</b></li>
                            <li> <b>Adobe After Effects</b></li>
                            <li> <b>Adobe Figma</b></li>
                            <li> <b>Adobe Figjam</b></li>
                        </ul>
                        <ul class="flex flex-col justify-center gap-10">
                            <li> <b>WordPress</b></li>
                            <li> <b>Python</b></li>
                            <li> <b>C#</b></li>
                            <li> <b>JavaScript</b></li>
                            <li> <b>HTML, CSS, Tailwind</b></li>
                            <li> <b>Vue 2, Vue 3</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
console.log("Home page loaded!")
</script>