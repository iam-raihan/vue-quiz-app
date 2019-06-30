import QuizApi from "@/Api/QuizApi";

/**
 * state
 */
const state = {
  quiz: {},
  score: {
    correct: 0,
    wrong: 0
  }
};

/**
 * mutations
 */
const mutations = {
  setNewQuiz(state, payload) {
    state.quiz = payload;
  }
};

/**
 * actions
 */
const actions = {
  storeNewQuiz({ commit }) {
    QuizApi.newQuizAsync()
      .then(quiz => {
        console.log("quiz received");
        commit("setNewQuiz", quiz);
      })
      .catch(err => console.log(err));
  }
};

/**
 * getters
 */
const getters = {
  getTotalAnswered(state) {
    return state.score.correct + state.score.wrong;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
