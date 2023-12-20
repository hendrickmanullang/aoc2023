// the boring stuff
const fs = require("fs");
const data = fs.readFileSync("day4.txt", "utf8");
const lines = data.split("\n");

let sumPoints = 0;

for (let i = 0; i < lines.length - 1; i++) {
  const winningNumbers = lines[i]
    .split(":")[1]
    .split("|")[0]
    .split(" ")
    .filter((el) => {
      if (+el > 0) {
        return +el;
      }
    });
  const ticketNumbers = lines[i]
    .split(":")[1]
    .split("|")[1]
    .split(" ")
    .filter((el) => {
      if (+el > 0) {
        return +el;
      }
    });

  let matches = 0;
  for (let j = 0; j < ticketNumbers.length; j++) {
    if (winningNumbers.includes(ticketNumbers[j])) {
      matches++;
    }
  }

  const cardScore = matches === 1 ? 1 : matches === 0 ? 0 : 2 ** (matches - 1);
  sumPoints += cardScore;
}

console.log(sumPoints);
