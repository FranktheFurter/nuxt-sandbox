<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
const propsFromRoute = route.params.value;
</script>

<template>
  <div style="cursor: pointer">
    <h1>Page: {{ propsFromRoute }}</h1>
  </div>
</template>

<style scoped></style>
