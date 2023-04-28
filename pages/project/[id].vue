<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRoute } from "vue-router"
import projects from "@/data/projects"
const route = useRoute()
const routeId = route.params.id as unknown as number
const project = projects[routeId]
</script>
<template>
  <div>
    <h1>Catch all Projects</h1>
    {{ project }}
  </div>
</template>
