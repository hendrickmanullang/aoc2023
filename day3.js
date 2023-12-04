// the boring stuff
const fs = require("fs");
const data = fs.readFileSync("day3.txt", "utf8");
const lines = data.split("\n");

const isNum = (text) => {
  return typeof +text === "number" && !isNaN(+text);
};

const isSymbol = (text) => {
  let flag = true;
  if (text === ".") {
    flag = false;
  }
  if (isNum(text)) {
    flag = false;
  }
  return flag;
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

const nums = {};

for (let y = 0; y < lines.length - 1; y++) {
  // line
  for (let x = 0; x < matrix[y].length; x++) {
    // char
    if (isSymbol(matrix[y][x])) {
      // check left
      if (isNum(matrix[y][x - 1])) {
        const [fullNumber, index] = fullNum(matrix[y], matrix[y][x - 1], x - 1);
        nums[`${y},${index}`] = fullNumber;
      }
      // // check left up
      if (isNum(matrix[y - 1][x - 1])) {
        const [fullNumber, index] = fullNum(
          matrix[y - 1],
          matrix[y - 1][x - 1],
          x - 1
        );
        nums[`${y - 1},${index}`] = fullNumber;
      }
      // check up
      if (isNum(matrix[y - 1][x])) {
        const [fullNumber, index] = fullNum(matrix[y - 1], matrix[y - 1][x], x);
        nums[`${y - 1},${index}`] = fullNumber;
      }
      // check right up
      if (isNum(matrix[y - 1][x + 1])) {
        const [fullNumber, index] = fullNum(
          matrix[y - 1],
          matrix[y - 1][x + 1],
          x + 1
        );
        nums[`${y - 1},${index}`] = fullNumber;
      }
      // check right
      if (isNum(matrix[y][x + 1])) {
        const [fullNumber, index] = fullNum(matrix[y], matrix[y][x + 1], x + 1);
        nums[`${y},${index}`] = fullNumber;
      }
      // check down right
      if (isNum(matrix[y + 1][x + 1])) {
        const [fullNumber, index] = fullNum(
          matrix[y + 1],
          matrix[y + 1][x + 1],
          x + 1
        );
        nums[`${y + 1},${index}`] = fullNumber;
      }
      // check down
      if (isNum(matrix[y + 1][x])) {
        const [fullNumber, index] = fullNum(matrix[y + 1], matrix[y + 1][x], x);
        nums[`${y + 1},${index}`] = fullNumber;
      }
      // check down left
      if (isNum(matrix[y + 1][x - 1])) {
        const [fullNumber, index] = fullNum(
          matrix[y + 1],
          matrix[y + 1][x - 1],
          x - 1
        );
        nums[`${y + 1},${index}`] = fullNumber;
      }
    }
  }
}

// console.log(JSON.stringify(nums));

const numsArray = Object.values(nums).map((num) => {
  return +num;
});

console.log(
  numsArray.reduce((acc, curr) => {
    return acc + curr;
  })
);

// console.log(JSON.stringify(matrix));
