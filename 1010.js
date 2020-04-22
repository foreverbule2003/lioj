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
  const input = lines[0].split(' ')
  const a = input[0]
  const b = input[1]
  console.log(a == b ? 'Yes' : 'No');
}

// input 
// 30 30