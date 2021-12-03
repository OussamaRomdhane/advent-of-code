import * as fs from "fs";

const getInput = () => {
  const rawInput = fs.readFileSync("_input").toString();
  return rawInput.split("\n").map(Number);
};

export default getInput;
