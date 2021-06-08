<template>
  <form @submit.prevent="findPlanet">
    <div>
      <!-- <input type="text" class="form-control" placeholder="search for a date" v-model="state.query"> -->
      <input type="date"
             id="start"
             name="trip-start"
             min="2018-01-01"
             max="2018-12-31"
             v-model="state.query"
      >
      <button type="submit"
              class="btn btn-primary btn-sm"
      >
        Search Date
      </button>
    </div>
  </form>
</template>

<script>
import { reactive } from 'vue'
import { planetService } from '../services/PlanetService'

export default ({
  setup() {
    const state = reactive({
      query: null
    })
    return {
      state,
      test() {
      },
      findPlanet() {
        console.log('findplanet')
        planetService.findPlanet(state.query)
        state.query = ''
      }
    }
  }
})
</script>
