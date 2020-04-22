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
  const initVal = lines[0]
  // const initVal = 2147483647
  let remain = 0
  let pow = 0
  const pows = []
  const getLog2 = (num) => Math.log(num) / Math.log(2)

  const main = (val = initVal) => {
    // console.log('val: ', val);
    pow = parseInt(getLog2(val))
    // console.log('pow: ', pow);

    remain = val - Math.pow(2, pow)
    pows.push(pow)
    // console.log('remain: ', remain);
    if (remain > 0) main(remain)
  }
  main()
  // console.log(pows);
  console.log(pows.length);
}

// input
// 31