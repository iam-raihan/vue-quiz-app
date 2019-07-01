const validateScoreData = scoreData => {
  let score;
  const defaultData = {
    correct: 0,
    wrong: 0
  };

  try {
    score = JSON.parse(scoreData) || {};
  } catch {
    return defaultData;
  }

  return score.correct > -1 && score.wrong > -1 ? score : defaultData;
};

export default {
  onSubmitNotify: (isCorrect, toast) => {
    if (isCorrect) toast.success({ message: "Correct Answer" });
    else toast.error({ message: "Wrong Answer" });
  },

  storeScoreToStorage: score => {
    localStorage.setItem("score", JSON.stringify(score));
  },

  retriveScoreFromStorage: () => {
    return validateScoreData(localStorage.getItem("score"));
  }
};
