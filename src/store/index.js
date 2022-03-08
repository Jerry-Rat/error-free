import { createStore } from "vuex";
import { getToken } from "@/utils/auth";

export default createStore({
  state: {
    token: getToken(),
    isLoading: true,
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token;
    },
  },
  actions: {},
  modules: {},
});
