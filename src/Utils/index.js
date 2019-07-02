import ShowToolTipsLimitedTime from "./ToolTipsUtils";
import {
  ScoreInStorage,
  InstructionsViewCountInStorage
} from "./LocalStorageUtils";

// check counter and show instructions
export const ShowInstructions = async options => {
  let viewCount = InstructionsViewCountInStorage.Retrive();
  if (viewCount < options.maxViewCount) {
    await ShowToolTipsLimitedTime(options);
    InstructionsViewCountInStorage.Store(++viewCount);
  }
};

export { ScoreInStorage };
