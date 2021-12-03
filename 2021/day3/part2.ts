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

const filter = (type: "oxygen" | "co2") => {
  let filtered = input;
  let passes = 0;

  while (filtered.length > 1 && passes < numberLength) {
    const numberCount = filtered.length;
    const sum = filtered.reduce((total, current) => total + current[passes], 0);
    const value =
      sum >= numberCount / 2
        ? type === "oxygen"
          ? 1
          : 0
        : type === "oxygen"
        ? 0
        : 1;
    filtered = filtered.filter((bits) => bits[passes] === value);
    passes++;
  }
  return filtered[0];
};

console.log(
  "The solution is:",
  toDecimal(filter("oxygen")) * toDecimal(filter("co2"))
);
console.timeEnd("Benchmark");
