<template>
  <div class="spinner-grow text-info loading" role="status">
    <span class="visually-hidden">Loading...</span>
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
  top: 150px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 2000;
}
</style>
