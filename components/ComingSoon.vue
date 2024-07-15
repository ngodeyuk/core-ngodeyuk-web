<script setup lang="ts">
const props = defineProps({
    isVisible: {
        type: Boolean,
        required: true
    }
})

const emit = defineEmits(['close'])

const closeModal = () => {
    emit('close')
}
</script>

<template>
    <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-zinc-900 p-10 rounded-lg shadow-lg">
            <h2 class="text-2xl text-white font-bold mb-2">Coming Soon</h2>
            <p class="text-muted-foreground">Aplikasi ini sedang dalam pengembangan. Silakan periksa kembali nanti.</p>
            <button @click="closeModal" class="mt-4 px-4 py-1.5 bg-emerald-500 text-white text-sm rounded-lg">Close</button>
        </div>
    </div>
</template>