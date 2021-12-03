// O(n)

import getInput from "./_util_getInput";

const input = getInput();

console.time("Benchmark");

const solution = input.reduce((total, _, index, input) => {
  if (!index) {
    return total;
  }
  return total + (input[index] > input[index - 1] ? 1 : 0);
}, 0);

console.log("The solution is:", solution);
console.timeEnd("Benchmark");
