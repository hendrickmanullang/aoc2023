const fs = require("fs");

const data = fs.readFileSync("text.txt", "utf8");

const lines = data.split("\n");

let sum = 0;

const map = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const mapReverse = {
  eno: 1,
  owt: 2,
  eerht: 3,
  ruof: 4,
  evif: 5,
  xis: 6,
  neves: 7,
  thgie: 8,
  enin: 9,
};

function textToNumber(text) {
  return text.replace(/one|two|three|four|five|six|seven|eight|nine/gi, (x) => {
    return map[x];
  });
}

function textToNumberReverse(text) {
  return text.replace(/eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/gi, (x) => {
    return mapReverse[x];
  });
}

function truncateNumber(text) {
  if (text.length === 2) {
    return parseInt(text);
  } else if (text.length === 1) {
    return parseInt(text + text);
  } else {
    return parseInt(text[0] + text[text.length - 1]);
  }
}

for (let i = 0; i < lines.length - 1; i++) {
  const numberLineFrontToBack = textToNumber(lines[i]);
  const numberLineBackToFront = textToNumberReverse(
    lines[i].split("").reverse().join("")
  )
    .split("")
    .reverse()
    .join("");

  const numbers = numberLineFrontToBack.replace(/[^0-9]/g, "").split("");
  const numbersBackToFront = numberLineBackToFront
    .replace(/[^0-9]/g, "")
    .split("");

  numbers[numbers.length - 1] =
    numbersBackToFront[numbersBackToFront.length - 1];

  const correctNumbers = numbers.join("");

  sum += truncateNumber(correctNumbers);
}

console.log(sum);
