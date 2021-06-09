<template>
  <div class="container-fluid">
    <div class="row">
      <House v-for="house in houses" :key="house.id" :house="house" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { housesService } from '../services/HousesService'
export default {
  setup() {
    onMounted(() => {
      housesService.getHouses()
    })

    return {
      houses: computed(() => AppState.houses)
    }
  }
}
</script>

<style>

</style>
