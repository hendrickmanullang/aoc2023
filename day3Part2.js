// the boring stuff
const fs = require("fs");
const data = fs.readFileSync("day3.txt", "utf8");
const lines = data.split("\n");

const isNum = (text) => {
  return typeof +text === "number" && !isNaN(+text);
};

const isGear = (text) => {
  let flag = false;
  if (text === "*") {
    flag = true;
    return flag;
  }
};

const fullNum = (line, text, start) => {
  let num = text;
  let prevIndex = start - 1;
  while (isNum(line[prevIndex])) {
    num = line[prevIndex] + num;
    prevIndex--;
  }
  let nextIndex = start + 1;
  while (isNum(line[nextIndex])) {
    num += line[nextIndex];
    nextIndex++;
  }
  return [num, prevIndex];
};

const matrix = [];
for (let i = 0; i < lines.length - 1; i++) {
  matrix.push(lines[i].split(""));
}

let gearRatioSum = 0

for (let y = 0; y < lines.length - 1; y++) {
  // line
  for (let x = 0; x < matrix[y].length; x++) {
    // char
    if (isGear(matrix[y][x])) {
      const numCache = {}
      // check left
      if (isNum(matrix[y][x - 1])) {
        const [fullNumber, index] = fullNum(matrix[y], matrix[y][x - 1], x - 1);
        numCache[`${y},${index}`] = fullNumber;
      }
      // // check left up
      if (isNum(matrix[y - 1][x - 1])) {
        const [fullNumber, index] = fullNum(
          matrix[y - 1],
          matrix[y - 1][x - 1],
          x - 1
        );
        numCache[`${y - 1},${index}`] = fullNumber;
      }
      // check up
      if (isNum(matrix[y - 1][x])) {
        const [fullNumber, index] = fullNum(matrix[y - 1], matrix[y - 1][x], x);
        numCache[`${y - 1},${index}`] = fullNumber;
      }
      // check right up
      if (isNum(matrix[y - 1][x + 1])) {
        const [fullNumber, index] = fullNum(
          matrix[y - 1],
          matrix[y - 1][x + 1],
          x + 1
        );
        numCache[`${y - 1},${index}`] = fullNumber;
      }
      // check right
      if (isNum(matrix[y][x + 1])) {
        const [fullNumber, index] = fullNum(matrix[y], matrix[y][x + 1], x + 1);
        numCache[`${y},${index}`] = fullNumber;
      }
      // check down right
      if (isNum(matrix[y + 1][x + 1])) {
        const [fullNumber, index] = fullNum(
          matrix[y + 1],
          matrix[y + 1][x + 1],
          x + 1
        );
        numCache[`${y + 1},${index}`] = fullNumber;
      }
      // check down
      if (isNum(matrix[y + 1][x])) {
        const [fullNumber, index] = fullNum(matrix[y + 1], matrix[y + 1][x], x);
        numCache[`${y + 1},${index}`] = fullNumber;
      }
      // check down left
      if (isNum(matrix[y + 1][x - 1])) {
        const [fullNumber, index] = fullNum(
          matrix[y + 1],
          matrix[y + 1][x - 1],
          x - 1
        );
        numCache[`${y + 1},${index}`] = fullNumber;
      }
      if (Object.values(numCache).length === 2) {
        gearRatioSum += Object.values(numCache)[0] * Object.values(numCache)[1]
      }
    }
  }
}

console.log(gearRatioSum)

// console.log(JSON.stringify(matrix));
