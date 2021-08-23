// console.log('hello world')

const A =require('./Modulelocal')

// console.log(Add( Number(process.argv[2]) , Number (process.argv[3])))

// console.log(process.argv)
// console.log(module)
console.log(A.Add( Number(process.argv[2]),6))
console.log(A.Minus( Number(process.argv[2]),6))