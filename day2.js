const fs = require("fs");

const data = fs.readFileSync("text2.txt", "utf8");

const lines = data.split("\n");

const limit = {
  red: 12,
  green: 13,
  blue: 14,
};

let sum = 0;

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

for (const [i, value] of lines.entries()) {
  console.log(`Current sum is ${sum}`)
  const indexOfColon = value.indexOf(":");
  const textValue = value.slice(indexOfColon + 2);
  const groups = textValue.split(";");
  let valid = true;
  for (colorGroup of groups) {
    if (!isValid(colorGroup)) {
      valid = false;
      break;
    }
  }
  console.log(`Game ${i + 1} is ${valid}, adding ${i+1} to`)
  if (valid) {
    sum += i + 1;
  }
}

console.log(sum);
