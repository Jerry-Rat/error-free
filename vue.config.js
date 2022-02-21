// vue.config.js

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  // 输出文件目录
  outputDir: "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",

  devServer: {
    port: 80, // 端口号
    host: "0.0.0.0",
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    proxy: {
      "/api": {
        target: "http://0.0.0.0:8080",
        ws: true,
        changeOrigin: true,
      },
    },
  },

  //别名
  configureWebpack: {
    resolve: {
      alias: {
        api: "@/api",
        assets: "@/assets",
        components: "@/components",
        views: "@/views",
      },
    },
  },
};
