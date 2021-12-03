// O(n)

import getInput from "./_util_getInput";

const input = getInput();

console.time("Benchmark");

const solution = input.reduce(
  ([horizontal, depth, aim], [direction, value]) => {
    switch (direction) {
      case "forward":
        return [horizontal + value, depth + value * aim, aim];
      case "down":
        return [horizontal, depth, aim + value];
      case "up":
        return [horizontal, depth, aim - value];
      default:
        return [horizontal, depth, aim];
    }
  },
  [0, 0, 0]
);

console.log("The solution is:", solution[0] * solution[1]);
console.timeEnd("Benchmark");
