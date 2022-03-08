<template>
  <div class="loading-back">
    <div class="spinner-grow text-info loading" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Loading",
  components: {},
};
</script>
<style scoped>
.loading {
  position: fixed;
  top: 25%;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.loading-back {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 2000;
}
</style>
