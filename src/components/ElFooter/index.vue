<!-- 底部信息 -->
<template>
  <footer>
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
:root {
  --theme-footer-background-color: hsl(210, 8%, 15%);
  --theme-footer-background-position: top left;
  --theme-footer-background-repeat: no-repeat;
  --theme-footer-background-size: auto;
  --theme-footer-background-border-top: 0;
  --theme-footer-title-color: hsl(210, 8%, 75%);
  --theme-footer-text-color: hsl(210, 8%, 45%);
  --theme-footer-link-color: hsl(210, 8%, 55%);
  --theme-footer-link-color-hover: hsl(210, 8%, 65%);
  --theme-footer-link-color-active: hsl(27, 90%, 55%);
  --theme-footer-link-caret-color: var(--theme-footer-background-color);
  --theme-footer-divider-color: hsl(210, 8%, 25%);
  --theme-footer-padding-top: 0;
  --theme-footer-padding-bottom: 0;
}
footer {
  background-color: var(--theme-footer-background-color);
  background-image: none;
  background-position: var(--theme-footer-background-position);
  background-repeat: var(--theme-footer-background-repeat);
  border-top: var(--theme-footer-background-border-top);
  background-size: var(--theme-footer-background-size);
  color: var(--theme-footer-text-color);
  padding-top: var(--theme-footer-padding-top);
  padding-bottom: var(--theme-footer-padding-bottom);
}
footer a {
  color: var(--theme-footer-title-color) !important;
}
</style>
