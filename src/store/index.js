import Vue from "vue";
import Vuex from "vuex";

import QuizModule from "./QuizModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    QuizModule
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {}
});
