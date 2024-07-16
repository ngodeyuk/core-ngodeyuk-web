<script setup lang="ts">
const benefits = [
    {
        id: 1,
        title: "Belajar ngoding lebih menyenangkan:",
        desc: "Kuis interaktif yang membuat belajar coding tidak lagi membosankan."
    },
    {
        id: 2,
        title: "Berkompetisi:",
        desc: "Papan peringkat yang mendorong Anda untuk belajar lebih giat."
    },
    {
        id: 3,
        title: "Fleksibilitas waktu:",
        desc: "Belajar kapan saja dan di mana saja sesuai dengan jadwal Anda."
    }
]
const features = [
    {
        id: 1,
        title: "Kuis Interaktif:",
        desc: "Ratusan soal pemrograman dari berbagai tingkat kesulitan."
    },
    {
        id: 2,
        title: "Papan Peringkat:",
        desc: "Kompetisi dengan teman-teman dan lihat siapa yang paling cepat menyelesaikan kuis."
    },
    {
        id: 3,
        title: "Pembelajaran Terstruktur:",
        desc: "Materi pembelajaran yang disusun untuk mempermudah pemahaman."
    },
    {
        id: 4,
        title: "Multi-Bahasa:",
        desc: "Pilihan bahasa pemrograman yang dapat dipelajari sesuai kebutuhan."
    }
]
</script>

<template>
    <main id="benefits" class="lg:h-[600px]">
        <div class="container mx-auto lg:flex justify-between md:py-10 gap-10">
            <div>
                <h1 class="text-2xl md:text-4xl text-white font-medium">Manfaat yang Anda Dapatkan</h1>
                <div class="mt-5 border-2 border-emerald-500 shadow shadow-emerald-500 rounded-2xl p-5">
                    <ul v-for="benefit in benefits">
                        <li :key="benefit.id" class="my-5">
                            <div class="flex items-center gap-2">
                                <img class="bg-emerald-500 rounded-full" src="/icons/check.svg" alt="icon">
                                <h3 class="text-white text-lg">{{ benefit.title }}</h3>
                            </div>
                            <p class="text-muted-foreground text-md">{{ benefit.desc }}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-10 pb-10 md:pb-0">
                <h1 class="text-2xl md:text-4xl text-white font-medium">Fitur Unggulan Kami</h1>
                <div class="mt-5 border-2 border-white shadow shadow-white rounded-2xl p-5">
                    <ul v-for="feature in features">
                        <li :key="feature.id" class="my-5">
                            <div class="flex items-center gap-2">
                                <img src="/icons/check.svg" alt="icon">
                                <h3 class="text-white text-lg">{{ feature.title }}</h3>
                            </div>
                            <p class="text-muted-foreground text-md">{{ feature.desc }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>