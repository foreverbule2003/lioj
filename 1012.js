const readline = require('readline');

const lines = []
const rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function () {
  solve(lines)
})

const solve = (lines) => {
  const arr = lines.map(l => Number(l))
  const bigger = Math.max(...arr)
  const maxPrice = bigger * 2
  const lost = maxPrice - (arr[0] + arr[1])
  console.log(maxPrice);
  console.log(lost);
}
