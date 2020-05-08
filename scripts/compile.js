const fs = require('fs')

const s = fs.readFileSync('./raw.txt', {encoding:'utf-8'})

const lst = s.split('\n')
let row = 1601
const dict = {}

for (let line of lst) {
  line = line.trim()
  if (line.length != 10) {
    continue
  }
  for (let i=0; i<10; i++) {
    dict[row+i] = line[i]
  }
  row += 10
}

const arr = Object.keys(dict).map(id => {
  return `  "${id}": {"type": "", "answer": "${dict[id]}"}`
})

const all = `{\n${arr.join(',\n')}\n}`

fs.writeFileSync('../src/quiz.json', all)
