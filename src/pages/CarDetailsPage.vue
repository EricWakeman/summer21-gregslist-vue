<template>
  <div class="container-fluid" v-if="car">
    <div class="row h-75">
      <div class="col-12">
        <img :src="car.imgUrl" alt="Current Car" class="img-fluid">
      </div>
    </div>
    <div class="row h-25">
      <div class="col-12">
        <h1>{{ car.make }} {{ car.model }}</h1>
      </div>
    </div>
  </div>

  <div v-else>
    loading....
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { carsService } from '../services/CarsService'

export default {
  setup() {
    const route = useRoute()

    watchEffect(() => {
      carsService.getCarById(route.params.id)
    })

    return {
      car: computed(() => AppState.activeCar)
    }
  }
}
</script>

<style>

</style>
