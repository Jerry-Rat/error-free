<!-- 内容 -->
<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-2">侧边导航栏</div>
        <div class="col-7">内容</div>
        <div class="col-3">
          <div class="card">
            <div class="card-header sidebarwidget-header">头部</div>
            <div class="card-body">内容</div>
          </div>

          <div class="card sidebarwidget-gap">
            <div class="card-header">头部</div>
            <div class="card-body">
              内容<br />
              qwe
            </div>
          </div>

          <div class="card sidebarwidget-gap">
            <div class="card-header">头部</div>
            <div class="card-body">
              内容<br />
              zxc <br />
              qwe
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "efMain",
  components: {},
};
</script>

<style>
main {
  background-color: var(--bs-white);
  min-height: calc(100vh - 57px);
  margin-bottom: 1.5em;
}
.card {
  box-shadow: var(--bs-sm);
}

.sidebarwidget-gap {
  margin-top: 1.5em;
}
.masonry-grid {
  /* It is split into 3 columns */
  column-count: 3;

  /* The space between columns */
  column-gap: 1rem;

  /* Misc */
  width: 100%;
}

.masonry-grid__item {
  /* Prevent a column from breaking into multiple columns */
  break-inside: avoid;

  /* Misc */
  margin-bottom: 1rem;
}
</style>
