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
import ElNavbar from "components/ElNavbar";
import ElMain from "components/ElMain";
import ElFooter from "components/ElFooter";
export default {
  name: "layout",
  components: {
    efNavbar: ElNavbar,
    efMain: ElMain,
    efFooter: ElFooter,
  },
};
</script>

<style></style>
