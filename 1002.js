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
  lines.forEach((l) => {
    let tmp = l.split(' ')
    let inputA = Number(tmp[0])
    let inputB = Number(tmp[1])
    if (inputA === 0 && inputB === 0) return
    inputA > inputB ?
      console.log(inputA) :
      console.log(inputB)
  })
}

