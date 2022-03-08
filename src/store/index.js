import { createStore } from "vuex";
import { getToken } from "@/utils/auth";

export default createStore({
  state: {
    token: getToken(),
    isLoading: false,
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token;
    },
    setIsLoading: (state, isLoading) => {
      state.isLoading = isLoading;
    },
  },
  actions: {},
  modules: {},
});
