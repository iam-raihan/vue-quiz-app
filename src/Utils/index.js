export default {
  onSubmitNotify: (isCorrect, toast) => {
    if (isCorrect) toast.success({ message: "Correct Answer" });
    else toast.error({ message: "Wrong Answer" });
  }
};
