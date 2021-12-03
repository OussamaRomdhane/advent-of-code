import * as fs from "fs";

const getInput = () => {
  const rawInput = fs.readFileSync("_input").toString();
  return rawInput.split("\n").map((line) => {
    const [direction, value] = line.split(" ");
    return [direction, Number(value)] as [string, number];
  });
};

export default getInput;
