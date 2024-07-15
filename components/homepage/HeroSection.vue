<script setup lang="ts">
import Typewriter from 'typewriter-effect/dist/core';
import { showModal } from '~/store/use-modal.ts'

const rating = ref(5);
const images = [
    "https://yuefii.my.id/profile.jpg",
    "https://i.pinimg.com/736x/bc/20/94/bc20948f3bccfd926b41688b38b3d9c9.jpg",
    "https://img.freepik.com/free-photo/beautiful-anime-character-cartoon-scene_23-2151035157.jpg",
    "https://img.freepik.com/free-photo/anime-style-character-space_23-2151134100.jpg   "
]

onMounted(() => {
    const target = document.querySelector('.typewriter');
    const typewriter = new Typewriter(target, {
        loop: true,
        delay: 75,
    });

    typewriter
        .pauseFor(500)
        .typeString('Jadi Lebih Mudah dan Menyenangkan!')
        .pauseFor(5000)
        .start();
});
</script>

<template>
    <main class="min-h-screen">
        <div class="container mx-auto lg:flex justify-between">
            <div class="max-w-2xl py-20 pb-40 md:py-40 space-y-5">
                <h1 class="text-4xl text-white md:text-6xl font-medium">Belajar Ngoding <br> <span
                        class="typewriter"></span></h1>
                <p class="text-justify text-muted-foreground text-md md:text-lg">Apakah Anda seorang pemula dalam dunia
                    pemrograman yang ingin belajar ngoding dengan cara yang menyenangkan dan interaktif? Ngodeyuk adalah
                    aplikasi yang
                    tepat untuk Anda!</p>
                <Button @click="showModal" title="Download Now" />
                <div class="flex flex-col md:flex-row items-center pt-5">
                    <div class="flex item-center">
                        <div class="relative -mr-3" v-for="(image, index) in images" :key="index">
                            <img class="w-[50px] h-[50px] object-cover rounded-full" :src="image" :alt="index">
                        </div>
                    </div>
                    <div class="md:ml-6 mt-3 md:mt-0 flex flex-col items-center md:items-baseline">
                        <RatingStar :rating="rating" />
                        <p class="text-white opacity-90 text-md"><span class="opacity-100 font-bold">126</span> Orang
                            telah menggunakan aplikasi ini.
                        </p>
                    </div>
                </div>
            </div>
            <div class="hidden lg:block mr-28 mt-3 w-[300px]">
                <img class="w-full" src="/phone.png" alt="Belajar coding interaktif">
            </div>
        </div>
    </main>
</template>