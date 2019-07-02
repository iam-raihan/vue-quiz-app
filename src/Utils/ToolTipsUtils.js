/*
  setTimeout(() => {
    this.$root.$emit("bv::show::tooltip", "score-board");
    setTimeout(() => {
      this.$root.$emit("bv::hide::tooltip", "score-board");
      this.$root.$emit("bv::show::tooltip", "next-btn");
      setTimeout(() => {
        this.$root.$emit("bv::hide::tooltip", "next-btn");
      }, 4000);
    }, 4000);
  }, 1000);
*/

async function delayTask(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

async function showToolTipLimitedTime({ vm, showTimeForEach }, tag) {
  vm.$root.$emit("bv::show::tooltip", tag);
  await delayTask(showTimeForEach);
  vm.$root.$emit("bv::hide::tooltip", tag);
}

export default async options => {
  await delayTask(options.initialDelay || 1000);

  for (const tag of options.tags) {
    await showToolTipLimitedTime(options, tag);
    await delayTask(options.delayBetween || 300);
  }
};
