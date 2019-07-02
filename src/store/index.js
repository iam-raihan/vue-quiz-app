import Vue from "vue";
import Vuex from "vuex";

import QuizModule from "./QuizModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    QuizModule
  },
  state: {
    loading: false
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    }
  },
  actions: {},
  getters: {
    isLoading(state) {
      return state.loading;
    }
  }
});
