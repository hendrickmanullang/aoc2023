// the boring stuff
const fs = require("fs");
const data = fs.readFileSync("day1.txt", "utf8");
const lines = data.split("\n");

let sum = 0;

for (let i = 0; i < lines.length - 1; i++) {
  // replace all non-integers
  const numbers = lines[i].replace(/[^0-9]/g, "");

  if (numbers.length === 2) {
    sum += parseInt(numbers);
  } else if (numbers.length == 1) {
    sum += parseInt(numbers + numbers);
  } else {
    sum += parseInt(numbers[0] + numbers[numbers.length - 1]);
  }
}

console.log(sum);
