<template>
  <div>
    <b-jumbotron>
      <template slot="lead">
        Quiz : <i>{{ getQuestion }}</i>
      </template>

      <hr class="my-4" />

      <b-list-group>
        <b-list-group-item
          button
          v-for="(option, index) in getQuizOptions"
          :key="index"
          @click="onAnswerSelected(option)"
          :class="[getBtnClass(option)]"
          >{{ option }}
        </b-list-group-item>
      </b-list-group>

      <div class="mt-3"></div>

      <span id="submit-btn-span">
        <b-button
          @click="submitAnswer"
          variant="primary"
          :disabled="!canSubmitAnswer"
        >
          Submit
        </b-button>
      </span>

      <b-button @click="storeNewQuiz" variant="success" class="ml-2"
        >Next</b-button
      >
    </b-jumbotron>

    <b-tooltip
      v-b-tooltip.hover
      :disabled="isAnswerSelected"
      placement="left"
      target="submit-btn-span"
      title="Select an option!"
    >
    </b-tooltip>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Utils from "@/Utils";

export default {
  computed: {
    ...mapState("QuizModule", ["selectedAnswer", "answerSubmitted"]),
    ...mapGetters("QuizModule", [
      "getQuestion",
      "getQuizOptions",
      "canSubmitAnswer",
      "isAnswerSelected",
      "getCorrectAnswer"
    ])
  },
  methods: {
    ...mapActions("QuizModule", [
      "onAnswerSelected",
      "onSubmitAnswer",
      "storeNewQuiz"
    ]),
    // getNextQuiz() {
    //   this.$store.dispatch("QuizModule/storeNewQuiz");
    // },
    getBtnClass(option) {
      if (this.answerSubmitted === true) {
        if (option === this.getCorrectAnswer) return "ans-correct";
        if (option === this.selectedAnswer) return "ans-incorrect";
        return "disabled";
      }

      if (option === this.selectedAnswer) return "ans-selected";

      return "ans-btn";
    },
    submitAnswer() {
      this.$store.dispatch("QuizModule/onSubmitAnswer", isCorrect => {
        Utils.onSubmitNotify(isCorrect, this.$toast);
      });
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
