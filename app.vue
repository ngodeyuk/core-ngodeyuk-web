<script setup lang="ts">
import { modalState, hideModal } from '~/store/use-modal.ts'
const title = ref('Ngodeyuk')
useSeoMeta({
  title: `${title.value} - Belajar Coding Mudah`,
  ogTitle: `${title.value} - Belajar Coding Mudah`,
  description: `${title.value} adalah platform belajar ngoding dengan cara yang menyenangkan dan interaktif.`,
  ogDescription: `${title.value} adalah platform belajar ngoding dengan cara yang menyenangkan dan interaktif.`,
  ogImage: 'https://ngodeyuk.site/Favicon.png',
  twitterCard: 'summary_large_image',
  keywords: 'Ngodeyuk, belajar coding interaktif, platform belajar ngoding, tutorial pemrograman pemula, kursus coding online, belajar pemrograman mudah, belajar coding, tutorial coding, pemrograman, kuis coding',
  author: `${title.value} Team`,
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  canonical: 'https://ngodeyuk.site',
  'og:type': 'website',
  'og:url': 'https://ngodeyuk.site',
  'og:site_name': 'Ngodeyuk',
  'twitter:title': `${title.value} - Belajar Coding Mudah`,
  'twitter:description': `${title.value} adalah platform belajar ngoding dengan cara yang menyenangkan dan interaktif.`,
  'twitter:image': 'https://ngodeyuk.site/Favicon.png',
})
</script>


<template>
  <main class="min-h-screen bg-zinc-900">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ComingSoon :isVisible="modalState.isModalVisible" @close="hideModal" />
  </main>
</template>