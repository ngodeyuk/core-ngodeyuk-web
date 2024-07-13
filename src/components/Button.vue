<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
    href: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});
</script>

<template>
    <a :href="href" class="relative inline-block px-4 py-2 font-medium group">
        <span
            class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 rounded-md bg-emerald-800 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span
            class="absolute inset-0 w-full h-full bg-emerald-500 border-2 rounded-md border-emerald-800 group-hover:bg-emerald-600"></span>
        <span class="relative text-white group-hover:text-white">{{ title }}</span>
    </a>
</template>