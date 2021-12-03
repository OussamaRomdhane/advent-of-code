// O(n log n)

import getInput from "./_util_getInput";

const input = getInput();

console.time("Benchmark");

const toDecimal = (array: number[]) =>
  array.reduce(
    (binary, currentDigit, index) =>
      binary + currentDigit * 2 ** (array.length - (index + 1)),
    0
  );

const numberLength = input[0].length;
const numberCount = input.length;

const sum = input.reduce(
  (total, current) => {
    return total.map((_, index) => total[index] + current[index]);
  },
  Array.from({ length: numberLength }, () => 0)
);

const gammaBinary = sum.map((value) => (numberCount / 2 > value ? 1 : 0));
const epsilonBinary = sum.map((value) => (numberCount / 2 < value ? 1 : 0));

const solution = toDecimal(gammaBinary) * toDecimal(epsilonBinary);

console.log("The solution is:", solution);
console.timeEnd("Benchmark");
