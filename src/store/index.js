import { createStore } from "vuex";
import { getToken } from "@/utils/auth";

export default createStore({
  state: {
    token: getToken(),
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token;
    },
  },
  actions: {},
  modules: {},
});
