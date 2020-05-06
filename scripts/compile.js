const s = `
eacabecdeb 
ecbcbdacce
`

const lst = s.split('\n')
let row = 1601
const dict = {}

for (let line of lst) {
  line = line.trim()
  if (line.length != 10) {
    continue
  }
  for (let i=0; i<10; i++) {
    dict[row+i] = { type: "", answer: line[i] }
  }
  row += 10
}

const fs = require('fs')
fs.writeFileSync('../src/quiz.json', JSON.stringify(dict))
