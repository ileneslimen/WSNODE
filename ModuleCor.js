const fs=require('fs')


// console.log('starting....')
// fs.readFile('./file.txt', 'utf8', function(err, data){
//     if(err) console.log(err)
//     console.log(data)
// } )
// console.log('finishing...')

console.log('starting...')
const x= fs.readFileSync('./file.txt', 'utf8')
console.log(x)
console.log("shin.")