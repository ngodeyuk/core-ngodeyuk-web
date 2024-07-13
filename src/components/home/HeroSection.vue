<script setup lang="ts">
import Button from "@/components/Button.vue"
</script>

<template>
    <main class="min-h-screen">
        <div class="container mx-auto flex justify-between">
            <div class="max-w-2xl py-40 space-y-5">
                <h1 class="text-6xl font-medium">Belajar Ngoding <br> Jadi Lebih Mudah dan Menyenangkan!</h1>
                <p class="text-muted-foreground text-md">Apakah Anda seorang pemula dalam dunia pemrograman yang ingin belajar dengan cara yang menyenangkan dan interaktif? Ngoding Yuk adalah aplikasi yang tepat untuk Anda!</p>
                <Button href="#_" title="Download Now" />
            </div>
            <div class="mr-28 mt-3 w-[300px]">
                <img class="w-full" src="/phone.png" alt="">
            </div>
        </div>
        <div class="border w-full" />
        <div class="-mt-12 ml-16 bg-background w-[500px] h-[100px] border-2 rounded-full">
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