<script setup lang="ts">
import Accordion from '@/components/Accordion.vue';

const accordionItems = [
  {
    trigger: 'What is Ngodeyuk?',
    content: 'Ngodeyuk is a quiz-based learning application designed to teach coding through interactive quizzes. It covers various programming languages suitable for beginners.'
  },
  {
    trigger: 'Which programming languages does Ngodeyuk cover?',
    content: 'Ngodeyuk covers a wide range of beginner-friendly programming languages including Python, JavaScript, HTML, CSS, and more.'
  },
  {
    trigger: 'How does Ngodeyuk help in learning coding?',
    content: 'Ngodeyuk helps users learn coding by providing quizzes that test their knowledge and understanding of different programming concepts. The interactive nature of quizzes makes learning fun and engaging.'
  },
  {
    trigger: 'Who can benefit from Ngodeyuk?',
    content: 'Ngodeyuk is perfect for anyone who is new to coding and wants to build a strong foundation. Whether you are a student, a hobbyist, or someone looking to start a career in tech, Ngodeyuk has something for everyone.'
  },
  {
    trigger: 'Is Ngodeyuk free to use?',
    content: 'Yes, Ngodeyuk offers a range of free quizzes and learning resources. Premium content and additional features may be available through subscription.'
  }
]
</script>

<template>
  <main class="max-w-3xl mx-auto" id="app">
    <h1 class="mt-5 text-5xl text-emerald-500 font-bold">Welcome</h1>
    <div class="mt-5 border border-emerald-500 p-5 rounded-md shadow">
      <h1 class="text-2xl font-semibold text-emerald-500">Frequently Asked Questions</h1>
      <Accordion class="pl-5" :items="accordionItems" />
    </div>
    <router-view />
  </main>
</template>