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
  let str = ''
  const idxA = lines[0];
  const idxB = lines[Number(idxA) + 1]
  // console.log('idxA: ', idxA);
  // console.log('idxB: ', idxB);
  let ans = ''
  lines.map((line, index) => {
    if (index > 0 && index <= idxA) str += line
    if (index > Number(idxA) + 1) {
      ans += str[lines[index] - 1]
    }
  })
  // console.log('str: ', str);
  console.log(ans);
}

