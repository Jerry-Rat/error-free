<template>
  user
  <button class="w-100 btn btn-lg btn-primary" @click="test1()">test1</button>
</template>

<script>
import { test } from "api/test.js";
export default {
  name: "User",
  components: {},
  methods: {
    test1() {
      this.$store.commit("setIsLoading", true);
      test()
        .then((res) => {
          this.$store.commit("setIsLoading", false);
          console.log(res);
        })
        .catch((error) => {
          this.$store.commit("setIsLoading", false);
          console.log(error);
        });
    },
  },
};
</script>
<style scoped></style>
