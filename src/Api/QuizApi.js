const url = "https://opentdb.com/api.php?amount=1&category=18";

export default {
  async newQuizAsync() {
    let response = await fetch(url);
    let data = await response.json();
    return data.results[0];
  }
};
