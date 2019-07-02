<template>
  <div>
    <hr />
    <h5>
      Score :
      <span class="rounded-lg score-box" id="score-board">
        <code class="text-white">
          <b>&nbsp; {{ correct }} / {{ getTotalAnswered }} &nbsp;</b>
        </code>
      </span>
    </h5>
    <b-tooltip placement="right" target="score-board">
      Check your score here<br />( Correct / Total )
    </b-tooltip>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState("QuizModule", {
      correct: state => state.score.correct
    }),
    ...mapGetters("QuizModule", ["getTotalAnswered"])
  }
};
</script>

<style scoped>
.score-box {
  background-color: #ef5350;
  cursor: pointer;
}
</style>
