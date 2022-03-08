<template>
  <div>
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

export default {
  name: "layout",
  components: {
    efNavbar: header,
    efMain: main,
    efFooter: footer,
  },
};
</script>

<style></style>
