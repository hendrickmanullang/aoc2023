// the boring stuff
const fs = require("fs");
const data = fs.readFileSync("day2.txt", "utf8");
const lines = data.split("\n");

// set color limits
const limit = {
  red: 12,
  green: 13,
  blue: 14,
};

// each game (line) is divided into colorGroups -> colors

// helper function to check if a colorGroup is valid
const isValid = (text) => {
  const marbleColors = text.split(",");
  for (x of marbleColors) {
    const [value, color] = x.trim().split(" ");
    if (limit[color] < value) {
      return false;
    }
  }
  return true;
};

let sum = 0;

for (const [i, value] of lines.entries()) {
  // destructure the line
  const indexOfColon = value.indexOf(":");
  const textValue = value.slice(indexOfColon + 2);
  const groups = textValue.split(";");

  // check if any colorGroup is impossible
  let valid = true;
  for (colorGroup of groups) {
    if (!isValid(colorGroup)) {
      valid = false;
      break;
    }
  }

  // if all colorGroups are possible, then valid flag must still be true
  if (valid) {
    sum += i + 1;
  }
}

console.log(sum);
// note that final sum will include game 101 which is an empty line - consider using simple for loop rather than for..of
