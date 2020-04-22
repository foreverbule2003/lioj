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
  const TARGET = 183
  const count = lines[0]
  const heights = lines[1].split(' ')
  const total = heights
    .map(ele => Number(ele))
    .reduce((acc, current) => acc + current, 0)
  // console.log(total);
  // console.log(count);
  const res = total / count
  // console.log(res);
  console.log(res >= TARGET ? 'real' : 'fake')
}

// input 
// 10
// 180 181 182 183 184 1 2 3 4 5