<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const test: string = "BLABLA BLUB BLUB"
const counter = ref(0)
</script>
<template>
  <div class="bg-gray">
    <h1 class="text-white">Catch all index route</h1>
    <h1 class="text-brand-primary">Classic Counter</h1>
    <p class="mt-4">{{ counter }}</p>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>
