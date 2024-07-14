<script setup lang="ts">
import { onMounted, ref } from "vue";
import Button from "@/components/Button.vue";
import Typewriter from 'typewriter-effect/dist/core';

onMounted(() => {
    const target = document.querySelector('.typewriter');
    const typewriter = new Typewriter(target, {
        loop: true,
        delay: 75,
    });

    typewriter
        .pauseFor(500)
        .typeString('Jadi Lebih Mudah dan Menyenangkan!')
        .pauseFor(7000)
        .start()
});
</script>

<template>
    <main class="min-h-screen">
        <div class="container mx-auto lg:flex justify-between">
            <div class="max-w-2xl py-20 pb-40 md:py-40 space-y-5">
                <h1 class="text-4xl md:text-6xl font-medium">Belajar Ngoding <br> <span class="typewriter"></span></h1>
                <p class="text-justify text-muted-foreground text-md">Apakah Anda seorang pemula dalam dunia pemrograman yang ingin belajar dengan cara yang menyenangkan dan interaktif? Ngoding Yuk adalah aplikasi yang tepat untuk Anda!</p>
                <Button href="#_" title="Download Now" />
            </div>
            <div class="hidden lg:block mr-28 mt-3 w-[300px]">
                <img class="w-full" src="/phone.png" alt="">
            </div>
        </div>
        <div class="border w-full" />
        <div class="-mt-12 mx-auto md:ml-16 bg-background w-[400px] md:w-[500px] h-[100px] border-2 rounded-full">
            <div class="mx-14 mt-5 items-center flex justify-between">
                <div class="flex flex-col items-center">
                    <h1 class="text-2xl">400+</h1>
                    <p class="text-md text-muted-foreground font-semibold">Pengguna</p>
                </div>
                <div class="flex flex-col items-center">
                    <h1 class="text-2xl">200+</h1>
                    <p class="text-md text-muted-foreground font-semibold">Download</p>
                </div>
                <div class="flex flex-col items-center">
                    <h1 class="text-2xl">400+</h1>
                    <p class="text-md text-muted-foreground font-semibold">Reviews</p>
                </div>
            </div>
        </div>
    </main>
</template>
