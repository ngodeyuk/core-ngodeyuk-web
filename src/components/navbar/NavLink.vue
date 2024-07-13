<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
    links: { name: string; href: string }[];
}>();
</script>


<template>
    <a v-for="link in links" :key="link.name" :href="link.href"
        class="font-medium text-md border-b-2 border-transparent transition-colors hover:scale-110 hover:border-emerald-500">
        {{ link.name }}
    </a>
</template>
