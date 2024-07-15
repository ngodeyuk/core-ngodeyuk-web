<script setup lang="ts">
const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="flex items-center">
    <template v-for="star in 5">
      <svg v-if="star <= rating" class="h-6 w-6 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20" fill="currentColor" :key="star">
        <path fill-rule="evenodd"
          d="M10 14.262l-4.097 2.275a1 1 0 0 1-1.45-1.054l.785-4.585L1.41 7.973a1 1 0 0 1 .568-1.705l4.602-.67L9.572 1.55a1 1 0 0 1 1.856 0l2.993 4.048 4.602.67a1 1 0 0 1 .568 1.705l-3.514 3.485.785 4.585a1 1 0 0 1-1.45 1.054L10 14.262z" />
      </svg>
      <svg v-else class="h-6 w-6 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
        fill="currentColor">
        <path fill-rule="evenodd"
          d="M10 14.262l-4.097 2.275a1 1 0 0 1-1.45-1.054l.785-4.585L1.41 7.973a1 1 0 0 1 .568-1.705l4.602-.67L9.572 1.55a1 1 0 0 1 1.856 0l2.993 4.048 4.602.67a1 1 0 0 1 .568 1.705l-3.514 3.485.785 4.585a1 1 0 0 1-1.45 1.054L10 14.262z" />
      </svg>
    </template>
  </div>
</template>
