// the boring stuff
const fs = require("fs");
const data = fs.readFileSync("day2.txt", "utf8");
const lines = data.split("\n");

let sumPower = 0;

for (let i = 0; i < lines.length; i++) {
  // set current max
  const power = {
    red: 0,
    green: 0,
    blue: 0,
  };

  // destructure the line
  const indexOfColon = lines[i].indexOf(":");
  const textValue = lines[i].slice(indexOfColon + 2);
  const groups = textValue.split(";");

  // update color max if it finds value above current max for that line
  for (colorGroups of groups) {
    const marbleColors = colorGroups.split(",");
    for (x of marbleColors) {
      const [value, color] = x.trim().split(" ");
      if (power[color] < +value) {
        power[color] = +value;
      }
    }
  }

  // final color max should be the max for that line
  sumPower += power.red * power.green * power.blue;
}

console.log(sumPower);
