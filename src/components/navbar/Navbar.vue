<script setup lang="ts">
import NavLink from "@/components/navbar/NavLink.vue"
import Button from "@/components/Button.vue";
const links = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#features' },
    { name: 'Partner', href: '#features' },
    { name: 'Contact Us', href: '#features' },
];
</script>

<template>
    <nav class="fixed pt-5 bg-background inset-x-0 top-0 z-50 shadow">
        <div class="container px-4 md:px-6">
            <div class="flex h-14 items-center">
                <div href="#" class="mr-auto flex items-center font-bold">
                    <img class="w-[100px] h-[100px]" src="/logo.png" alt="logo">
                    <h1 class="text-4xl text-emerald-500">Ngode<span class="text-white">yuk</span></h1>
                </div>
                <nav class="ml-auto flex items-center space-x-4">
                    <NavLink :links="links" />
                    <Button href="#_" title="Download" />
                </nav>
            </div>
        </div>
    </nav>
</template>