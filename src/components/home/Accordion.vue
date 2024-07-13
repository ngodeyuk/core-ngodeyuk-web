<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/packages/ui/accordion'

defineProps<{
  items: Array<{ trigger: string; content: string }>
}>()

</script>

<template>
  <Accordion type="single" collapsible>
    <AccordionItem v-for="(item, index) in items" :key="index" :value="'item-' + (index + 1)">
      <AccordionTrigger>{{ item.trigger }}</AccordionTrigger>
      <AccordionContent>
        {{ item.content }}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>