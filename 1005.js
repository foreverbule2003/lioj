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
  const enumFromTo = m => n => {
    console.log('enumFromTom: ', m, n);
    const res = Array.from({
      length: 1 + n - m
    }, (_, i) => m + i)
    console.log(res);
    return res
  }
    ;


  const properDivisors = n => {
    console.log(n);
    const
      rRoot = Math.sqrt(n),
      intRoot = Math.floor(rRoot),
      lows = enumFromTo(1)(intRoot)
        .filter(x => 0 === (n % x));
    console.log(lows);
    console.log('質因數:', lows.filter(x => 0 === (n % x)));
    const result = lows.concat(lows.map(x => n / x)
      .reverse()
      .slice((rRoot === intRoot) | 0, -1))
    console.log('正因數:', result);
    console.log('=============');
    return result;
  };

  lines.map(l => {
    if (l == 0) return
    const res = properDivisors(l)
      .reduce((a, b) => a + b, 0)
    // const final = properDivisors(res)
    //   .reduce((a, b) => a + b, 0) == l
    //   ? res : 'QQ'
    // console.log(final);
  })

  // test 相親數（Amicable numbers）
  // console.log(properDivisors(220)
  // .reduce((a, b) => a + b, 0));
}

// input
// 220
// 221
// 222
// 223
// 0
