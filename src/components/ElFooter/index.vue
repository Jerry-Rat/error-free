<!-- 底部信息 -->
<template>
  <footer class="sticky-bottom">
    <div>底部内容</div>
    <a>a标签</a>
  </footer>
</template>

<script>
export default {
  name: "efFooter",
  components: {},
};
</script>

<style>
footer {
  background-color: var(--bs-body-color);
  color: var(--bs-gray-500);
  padding-top: 0;
  padding-bottom: 0;
}
footer a {
  color: var(--bs-gray) !important;
}
</style>
