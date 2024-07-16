<script setup lang="ts">
import { showModal } from '~/store/use-modal.ts'
const links = [
    { name: 'Benefits', href: '#benefits' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
];
</script>
<template>
    <header class="fixed py-3 bg-zinc-900 inset-x-0 top-0 z-50 shadow">
        <div class="container px-4 md:px-6">
            <div class="flex h-14 items-center">
                <div class="mr-auto flex items-center font-bold">
                    <img class="w-[100px] h-[100px]" src="/logo.png" alt="Ngodeyuk">
                    <h1 class="hidden md:block text-4xl text-emerald-500">Ngode<span class="text-white">yuk</span></h1>
                </div>
                <nav class="hidden ml-auto md:flex items-center space-x-4">
                    <a v-for="link in links" :key="link.name" :href="link.href"
                        class="font-medium text-white text-md border-b-2 border-transparent transition-colors hover:scale-110 hover:border-emerald-500">
                        {{ link.name }}
                    </a>
                    <Button @click="showModal" title="Download" />
                </nav>
                <div class="block md:hidden items-center">
                    <Drawer>
                        <DrawerTrigger>
                            <img class="w-[40px]" src="/icons/menu.svg" alt="menu">
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerTitle class="pt-5 text-white text-2xl text-center">Menu</DrawerTitle>
                            <DrawerClose class="mt-5 w-1/2 ml-6 text-start text-lg flex flex-col space-y-3">
                                <a v-for="link in links" :key="link.name" :href="link.href"
                                    class="font-medium text-white text-md border-b-2 border-transparent transition-colors hover:scale-110 hover:border-emerald-500">
                                    {{ link.name }}
                                </a>
                                <Button @click="showModal" title="Download" />
                            </DrawerClose>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </div>
    </header>
</template>