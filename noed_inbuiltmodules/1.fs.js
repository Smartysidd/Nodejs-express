const fs=require('fs')


// let content=fs.readFileSync('f1.txt')
// console.log("content -> " + content)

// fs.writeFileSync('f3.txt','This is contenet for file3')

// console.log('data written')

// fs.writeFileSync('f4.txt','This is content for file4')

// console.log('data written')


fs.appendFileSync('f1.txt','new data appended')
console.log('data updated')