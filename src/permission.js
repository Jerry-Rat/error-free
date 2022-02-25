import router from "./router";
import store from "./store";

router.beforeEach((to, from, next) => {
  //设置标题
  document.title = to.matched[0].meta.title;
  // 通过vuex state获取当前的token是否存在
  if (store.state.token) {
    //已登录
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    //未登录
    if (to.meta.requireAuth) {
      // 判断该路由是否需要登录权限
      next({
        path: "/login",
        query: { redirect: to.fullPath }, // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    } else {
      next();
    }
  }
});
