import QuizApi from "@/Api/QuizApi";

/**
 * state
 */
const state = {
  quiz: null,
  selectedAnswer: null,
  answerSubmitted: false,
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
    state.selectedAnswer = null;
    state.answerSubmitted = false;
    state.quiz = payload;
  },
  incrementScore(state, isCorrect) {
    if (isCorrect) {
      state.score.correct++;
    } else {
      state.score.wrong++;
    }
  },
  setSelectedAnswer(state, answer) {
    state.selectedAnswer = answer;
  },
  setAnswerSubmitted(state) {
    state.answerSubmitted = true;
  }
};

/**
 * actions
 */
const actions = {
  storeNewQuiz({ commit }) {
    commit("setNewQuiz", null);

    QuizApi.newQuizAsync()
      .then(data => {
        console.log("quiz received");
        commit("setNewQuiz", data);
      })
      .catch(err => console.log(err));
  },
  onAnswerSelected({ commit, state }, answer) {
    if (state.answerSubmitted === false) commit("setSelectedAnswer", answer);
  },
  onSubmitAnswer({ commit, state }) {
    commit("setAnswerSubmitted");

    const isCorrect = state.selectedAnswer === state.quiz.correct_answer;
    commit("incrementScore", isCorrect);
  }
};

/**
 * getters
 */
const getters = {
  getQuizOptions(state) {
    if (state.quiz == null) return [];

    const options = [
      ...state.quiz.incorrect_answers,
      state.quiz.correct_answer
    ];
    return options.sort(() => Math.random() - 0.5);
  },
  getQuestion(state) {
    if (state.quiz == null) return "Loading...";

    return state.quiz.question;
  },
  getCorrectAnswer(state) {
    if (state.quiz == null) return null;

    return state.quiz.correct_answer;
  },
  isAnswerSelected(state) {
    return state.selectedAnswer !== null;
  },
  canSubmitAnswer(state) {
    return state.selectedAnswer !== null && !state.answerSubmitted;
  },
  getTotalAnswered(state) {
    const score = state.score;
    return score.correct + score.wrong;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
