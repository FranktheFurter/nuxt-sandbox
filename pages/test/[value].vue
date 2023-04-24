<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div>
    <h1>Page: {{ route.params.value }}</h1>
  </div>
</template>

<style scoped></style>
