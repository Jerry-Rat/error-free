<template>
  <div class="login">
    <div class="form-signin text-center">
      <img
        class="mb-4"
        src="~assets/image/error-free_1.png"
        alt=""
        width="72"
        height="57"
      />
      <h1 class="h3 mb-3 fw-normal">登录</h1>

      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="username"
          placeholder="name@example.com"
        />
        <label for="username">账号</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Password"
        />
        <label for="password">密码</label>
      </div>

      <div class="checkbox mb-3">
        <label> <input type="checkbox" value="remember-me" /> 记住我 </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" @click="login()">
        登录
      </button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </div>
  </div>
</template>

<script>
import { login } from "api/user.js";
import { setToken } from "@/utils/auth";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.commit("setIsLoading", true);
      login(this.username, this.password)
        .then((res) => {
          if (res.status == 0) {
            setToken(res.data);
            let redirect = decodeURIComponent(
              this.$route.query.redirect || "/"
            ); //获取登录成功后要跳转的路由。
            this.$router.push({
              path: redirect,
            });
          } else {
            alert(res.message);
          }
          this.$store.commit("setIsLoading", false);
        })
        .catch((error) => {
          console.log(error);
          this.$store.commit("setIsLoading", false);
        });
    },
  },
};
</script>
<style scoped>
html,
.login {
  height: 100%;
}

.login {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
