<template>
  <div id="app" class="container">
    <h1>Vue Quiz App</h1>
    <b-row>
      <b-col lg="6" md="8" offset-lg="3" offset-md="2" class="text-right">
        <my-score-box />
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" md="8" offset-lg="3" offset-md="2">
        <my-quiz-box />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import QuizBox from "./components/QuizBox";
import ScoreBox from "./components/ScoreBox";
import { ShowInstructions } from "./Utils";

export default {
  name: "app",
  components: {
    "my-quiz-box": QuizBox,
    "my-score-box": ScoreBox
  },
  mounted() {
    this.$store.dispatch("QuizModule/init");

    ShowInstructions({
      vm: this,
      tags: ["score-board", "question-box", "submit-btn-span", "next-btn"],
      maxViewCount: 2,
      initialDelay: 1500,
      showTimeForEach: 3000,
      delayBetween: 500
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
