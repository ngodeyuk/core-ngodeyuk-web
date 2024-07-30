<script setup lang="ts">
import { showModal } from '~/store/use-modal.ts'
</script>
<template>
    <header class="top-0 left-0 z-50 w-full sticky bg-white">
        <div class="container mx-auto">
            <div class="relative flex items-center justify-between -mx-4">
                <div class="max-w-full px-4 w-60">
                    <a href="#" class="block w-full">
                        <h1 class="py-2 text-2xl text-center font-bold border-4 border-teal-500 rounded-md">Ngode<span
                                class="text-teal-500">yuk</span></h1>
                    </a>
                </div>
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
