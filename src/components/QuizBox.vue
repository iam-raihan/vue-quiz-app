<template>
  <div>
    <b-jumbotron>
      <template slot="lead">
        <div id="question-box">
          Quiz : <i><span v-html="getQuestion"></span></i>
        </div>
      </template>

      <hr class="my-4" />

      <b-list-group>
        <b-list-group-item
          button
          v-for="(option, index) in getQuizOptions"
          :key="index"
          @click="onAnswerSelected(option)"
          :class="[getBtnClass(option)]"
          v-html="option"
        >
        </b-list-group-item>
      </b-list-group>

      <div class="mt-3"></div>
      <b-spinner
        v-if="isLoading"
        type="grow"
        variant="primary"
        label="Spinning"
      ></b-spinner>
      <div v-show="!isLoading">
        <span id="submit-btn-span">
          <b-button
            @click="onSubmitAnswer(showNotification)"
            variant="primary"
            :disabled="!canSubmitAnswer"
          >
            Submit
          </b-button>
        </span>

        <b-button
          @click="storeNewQuiz"
          variant="success"
          class="ml-2"
          id="next-btn"
        >
          Next
        </b-button>
      </div>
    </b-jumbotron>

    <!-- instruction tooltips -->
    <b-tooltip placement="left" target="question-box" triggers>
      Read question carefully
    </b-tooltip>

    <b-tooltip
      v-b-tooltip.hover
      :disabled="isAnswerSelected"
      placement="left"
      target="submit-btn-span"
    >
      Select your answer <br />
      then click Submit
    </b-tooltip>

    <b-tooltip placement="right" target="next-btn" triggers>
      Click Next any time for next Quiz
    </b-tooltip>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    // Namespaced
    ...mapState("QuizModule", ["selectedAnswer", "answerSubmitted"]),
    ...mapGetters("QuizModule", [
      "getQuestion",
      "getQuizOptions",
      "canSubmitAnswer",
      "isAnswerSelected",
      "getCorrectAnswer"
    ]),
    ...mapGetters(["isLoading"])
  },
  methods: {
    ...mapActions("QuizModule", [
      "onAnswerSelected",
      "onSubmitAnswer",
      "storeNewQuiz"
    ]),
    getBtnClass(option) {
      if (this.answerSubmitted === true) {
        if (option === this.getCorrectAnswer) return "ans-correct";
        if (option === this.selectedAnswer) return "ans-incorrect";
        return "disabled";
      }

      if (option === this.selectedAnswer) return "ans-selected";

      return "ans-btn";
    },
    showNotification(isCorrect) {
      if (isCorrect) this.$toast.success({ message: "Correct Answer" });
      else this.$toast.error({ message: "Wrong Answer" });
    }
  }
};
</script>

<style scoped>
.ans-btn:hover {
  background-color: #b3e5fc;
}
.ans-selected {
  background-color: #007bffb7 !important;
}
.ans-incorrect {
  background-color: #ee5253 !important;
}
.ans-correct {
  background-color: #10ac84 !important;
}
.ans-selected,
.ans-correct,
.ans-incorrect {
  color: whitesmoke !important;
  pointer-events: none;
}
</style>
