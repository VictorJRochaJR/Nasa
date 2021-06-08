<template>
  <div class="container-fluid">
    <div class="row justify-content-center mb-2">
      <div class="col-md-4">
        <search />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <PlanetDetails />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
