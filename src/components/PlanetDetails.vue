<template>
  <div class="card">
    <div class="card-body text-center">
      <h1><span>{{ planet.title }}</span></h1>
      <img :src="planet.url" alt="" height="300">
    </div>
    <p class="mt-3 border-top">
      {{ planet.explanation }}
    </p>
  </div>
  <template>
  </template>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      planet: computed(() => AppState.planet)
    }
  }
}
</script>
