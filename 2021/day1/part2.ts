// O(n)

import getInput from "./_util_getInput";

const input = getInput();

console.time("Benchmark");

let solution = 0;

for (let i = 3; i < input.length; i++) {
  const previous = input[i - 3] + input[i - 2] + input[i - 1];
  const current = input[i - 2] + input[i - 1] + input[i];
  solution += Number(previous < current);
}

console.log("The solution is:", solution);
console.timeEnd("Benchmark");
