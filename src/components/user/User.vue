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
      test()
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped></style>
