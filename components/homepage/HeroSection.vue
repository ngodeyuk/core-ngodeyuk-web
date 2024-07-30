<script setup lang="ts">
import { showModal } from '~/store/use-modal.ts'

const rating = ref(5);
const images = [
    "https://yuefii.my.id/profile.jpg",
    "https://i.pinimg.com/736x/bc/20/94/bc20948f3bccfd926b41688b38b3d9c9.jpg",
    "https://avatars.githubusercontent.com/u/116469201?v=4",
    "https://img.freepik.com/free-photo/anime-style-character-space_23-2151134100.jpg   "
]
</script>

<template>
    <section id="home" class="relative bg-white  pt-[120px] pb-[110px] lg:pt-[150px]">
        <div class="container mx-auto">
            <div class="flex flex-wrap items-center -mx-4">
                <div class="w-full px-4 lg:w-5/12">
                    <div class="hero-content">
                        <h1
                            class="mb-5 text-4xl font-bold !leading-[1.208] text-dark  sm:text-[42px] lg:text-[40px] xl:text-5xl">
                            Belajar Ngoding<br>
                            Jadi Lebih Mudah dan Menyenangkan!
                        </h1>
                        <p class="mb-8 max-w-[480px] text-base text-body-color ">
                            Apakah Anda seorang pemula dalam dunia pemrograman yang ingin belajar ngoding dengan cara
                            yang menyenangkan dan interaktif? Ngodeyuk adalah aplikasi yang tepat untuk Anda!
                        </p>
                        <ul class="flex flex-wrap items-center">
                            <li>
                               <Button @click="showModal" title="Download Sekarang"/>
                            </li>
                        </ul>
                        <div class="clients pt-16">
                            <h6 class="flex items-center mb-6 text-md font-normal text-body-color ">
                                Beberapa Pengguna Layanan Kami
                                <span class="inline-block w-8 h-px ml-3 bg-body-color"></span>
                            </h6>
                            <div class="flex flex-col md:flex-row items-center">
                                <div class="flex item-center">
                                    <div class="relative -mr-3" v-for="(image, index) in images" :key="index">
                                        <img class="w-[50px] h-[50px] object-cover rounded-full" :src="image"
                                            :alt="index">
                                    </div>
                                </div>
                                <div class="md:ml-6 mt-3 md:mt-0 flex flex-col items-center md:items-baseline">
                                    <RatingStar :rating="rating" />
                                    <p class="opacity-90 text-md"><span
                                            class="opacity-100 font-bold">126</span> Orang
                                        telah menggunakan aplikasi ini.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>