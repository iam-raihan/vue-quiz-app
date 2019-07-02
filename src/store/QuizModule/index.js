import QuizApi from "@/Api/QuizApi";
import { ScoreInStorage } from "@/Utils";

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
  },
  setScore(state, payload) {
    state.score = payload;
  }
};

/**
 * actions
 */
const actions = {
  init({ dispatch }) {
    dispatch("storeNewQuiz");
    dispatch("storeScoreFromStorage");
  },
  storeNewQuiz({ commit }) {
    commit("setNewQuiz", null);
    commit("setLoading", true, { root: true });

    QuizApi.newQuizAsync()
      .then(data => {
        console.log("quiz received");
        commit("setNewQuiz", data);
        commit("setLoading", false, { root: true });
      })
      .catch(err => console.log(err));
  },
  onAnswerSelected({ commit, state }, answer) {
    if (state.answerSubmitted === false) commit("setSelectedAnswer", answer);
  },
  onSubmitAnswer({ commit, state }, cb) {
    commit("setAnswerSubmitted");

    const isCorrect = state.selectedAnswer === state.quiz.correct_answer;
    cb(isCorrect);
    commit("incrementScore", isCorrect);

    ScoreInStorage.Store(state.score);
  },
  storeScoreFromStorage({ commit }) {
    commit("setScore", ScoreInStorage.Retrive());
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
