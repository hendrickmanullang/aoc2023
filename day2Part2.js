const fs = require("fs");

const data = fs.readFileSync("text2.txt", "utf8");

const lines = data.split("\n");

let sumPower = 0;

for (let i = 0; i < lines.length; i++) {
  const power = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const indexOfColon = lines[i].indexOf(":");
  const textValue = lines[i].slice(indexOfColon + 2);
  const groups = textValue.split(";");
  for (colorGroups of groups) {
    const marbleColors = colorGroups.split(",");
    for (x of marbleColors) {
      const [value, color] = x.trim().split(" ");
      if (power[color] < +value) {
        power[color] = +value;
      }
    }
  }
  console.log(
    `Game ${i + 1} | red: ${power.red} | green: ${power.green} | blue: ${
      power.green
    }`
  );
  sumPower += power.red * power.green * power.blue;
}

console.log(sumPower);
