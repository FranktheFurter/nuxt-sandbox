<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
const val = route.params.value;
</script>

<template>
  <div>
    <h1>Page: {{ val }}</h1>
  </div>
</template>

<style scoped></style>
