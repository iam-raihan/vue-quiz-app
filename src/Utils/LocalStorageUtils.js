// const isNumType = prop => typeof prop == "number";
const validateInt = data => parseInt(data) || 0;

const validateScoreData = data => {
  const defaultData = {
    correct: 0,
    wrong: 0
  };

  try {
    data = JSON.parse(data) || {};
  } catch {
    return defaultData;
  }

  return {
    correct: validateInt(data.correct),
    wrong: validateInt(data.wrong)
  };
};

export const ScoreInStorage = {
  Store: score => {
    localStorage.setItem("score", JSON.stringify(score));
  },

  Retrive: () => {
    const data = localStorage.getItem("score");
    return validateScoreData(data);
  }
};

export const InstructionsViewCountInStorage = {
  Store: count => {
    localStorage.setItem("instructionsViewCount", count);
  },

  Retrive: () => {
    const count = localStorage.getItem("instructionsViewCount");
    return validateInt(count);
  }
};
