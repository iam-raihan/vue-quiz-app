<template>
  <div id="app" class="container">
    <h1>Vue Quiz App</h1>
    <b-row>
      <b-col lg="6" md="8" offset-lg="3" offset-md="2" class="text-right">
        <ScoreBox />
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" md="8" offset-lg="3" offset-md="2">
        <QuizBox />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import QuizBox from "./components/QuizBox";
import ScoreBox from "./components/ScoreBox";

export default {
  name: "app",
  components: {
    QuizBox,
    ScoreBox
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
