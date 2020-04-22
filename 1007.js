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
  const guys = lines
    .map((line, index) => {
      if (index > 0) {
        const ele = line.split(' ')
        const name = ele[0]
        const score = ele[1]
        return { name, score }
      }
    })
    .filter(ele => ele != null)

  const highestScore = Math.max(...guys.map(g => g.score))
  const rockStars = guys.filter(g => g.score == highestScore)
  rockStars.map(r => console.log(r.name))
  // console.log(guys);
  // console.log(highestScore);
  // console.log(rockStar);
}

// input 
// 3
// Nick 90
// Peter 90
// Bob 80