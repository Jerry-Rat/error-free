<template>
  <div>
    <loading v-if="isLoading"></loading>
    <!-- 导航栏 -->
    <efNavbar />
    <!-- 内容 -->
    <efMain />
    <!-- 底部信息 -->
    <efFooter />
  </div>
</template>

<script>
import header from "components/header";
import main from "components/main";
import footer from "components/footer";
import loading from "components/loading";
import store from "@/store";

export default {
  name: "layout",
  components: {
    efNavbar: header,
    efMain: main,
    efFooter: footer,
    Loading: loading,
  },
  data() {
    return {
      isLoading: store.state.get("isLoading"),
    };
  },
};
</script>

<style></style>
