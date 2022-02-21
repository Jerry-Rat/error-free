<!-- 导航栏 -->
<template>
  <header class="p-2 mb-3 border-bottom header-color sticky-top">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
        >
          <img
            src="~assets/image/error-free_1.png"
            alt=""
            width="40"
            height="32"
            class="d-inline-block align-text-top"
          />
        </a>

        <ul
          class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li><a href="#" class="nav-link px-2 link-secondary">首页</a></li>
          <li><a href="#" class="nav-link px-2 link-dark">问题</a></li>
          <li><a href="#" class="nav-link px-2 link-dark">关于</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            type="search"
            class="form-control"
            placeholder="请输入关键词..."
            aria-label="Search"
          />
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-dark me-2">登录</button>
          <button type="button" class="btn btn-warning">注册</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "efNavbar",
  components: {},
};
</script>

<style>
.header-color {
  background-color: var(--bs-white);
}
</style>
