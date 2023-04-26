<script setup lang="ts">
const test: string = "BLABLA BLUB BLUB";
const counter = ref(0);
</script>
<template>
  <h1>Catch all index route</h1>
  <h1>Classic Counter</h1>
  <p class="mt-4">{{ counter }}</p>
  <button @click="counter++">+</button>
  <button @click="counter--">-</button>
</template>
