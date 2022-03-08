<template>
  <loading v-if="this.$store.getters.getIsLoading"></loading>
  <router-view />
</template>
<script>
import loading from "components/loading";
export default {
  name: "app",
  components: {
    loading: loading,
  },
};
</script>
<style>
@import "assets/css/base.css";
</style>
