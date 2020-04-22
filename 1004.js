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
  lines.forEach((line, index) => {
    if (index > 0) {
      const ele = line.split(' ')
      const playerA = ele[0]
      const playerB = ele[1]
      const type = ele[2]
      if (playerA.length > playerB.length) {
        console.log(type == '1' ? 'A' : 'B')
      }
      if (playerB.length > playerA.length) {
        console.log(type == '1' ? 'B' : 'A')
      }
      if (playerB.length == playerA.length) {
        // const a = Number(playerA);
        // const b = Number(playerB);
        if (playerA == playerB) {
          console.log('DRAW')
        } else {
          if (type == 1) {
            console.log(playerA > playerB ? 'A' : 'B');
          } else {
            console.log(playerA > playerB ? 'B' : 'A');
          }
        }
      }
    }
  })
}

// input
// 3
// 1 2 1
// 1 2 - 1
// 2 2 1
// 16051545231561401133065034552049003148062867422707868383899750989087543003617952349087188796070676762594183878163571723967767557940881773001811112934744148082880480722053645169236450783194383524679185525641568037331897139708339245999801738179595832935157695253062955405274213823481756938944815016097233395459922907899183721495245809306018953354422833747195905340516098550201734217812205315567760 16051545231561401133065034552049003148062867422707868383899750989087543003617952349087188796070676762594183878163571723967767557940881773001811112934744148082880480722053645169236450783194383524679185525641568037331897139708339245999801738179595832935157695253062955405274213823481756938944815016097233395459922907899183721495245809306018953354422833747195905340516098550201734217812205315567761 1
