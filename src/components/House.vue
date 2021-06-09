<template>
  <div class="col-lg-4 my-3 card">
    <div class="bg-white rounded card-header">
      <div class="text-center">
        <img :src="house.imgUrl" height="250" class="img-fluid" />
      </div>
    </div>
    <div class="card-body">
      <p>
        <b>Beds:{{ house.bedrooms }}   Baths:{{ house.bathrooms }}</b>
      </p>
      <p>Stories: {{ house.levels }} Year Built:{{ house.year }}</p>
      <p>
        <em>${{ house.price.toFixed(2) }}</em>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    house: { type: Object, required: true }
  },
  setup() {
    return {

    }
  }
}
</script>

<style>

</style>
