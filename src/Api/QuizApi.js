// const url = "https://opentdb.com/api.php?amount=1&category=18&difficulty=easy";

export default {
  async newQuizAsync() {
    // let response = await fetch(url);
    // let data = await response.json();
    // return data.results[0];

    /**
     * Simulate api call
     */
    const demoData = `{
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "The C programming language was created by this American computer scientist. ",
      "correct_answer": "Dennis Ritchie",
      "incorrect_answers": [
        "Tim Berners Lee",
        "al-Khwārizmī",
        "Willis Ware"
      ]
    }`;

    return new Promise(resolve => {
      setTimeout(() => resolve(JSON.parse(demoData)), 1000);
    });
  }
};
