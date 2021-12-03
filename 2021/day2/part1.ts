// O(n)

import getInput from "./_util_getInput";

const input = getInput();

console.time("Benchmark");

const solution = input.reduce(
  (total, [direction, value]) => {
    switch (direction) {
      case "forward":
        return [total[0] + value, total[1]];
      case "down":
        return [total[0], total[1] + value];
      case "up":
        return [total[0], total[1] - value];
      default:
        return [...total];
    }
  },
  [0, 0]
);

console.log("The solution is:", solution[0] * solution[1]);
console.timeEnd("Benchmark");
