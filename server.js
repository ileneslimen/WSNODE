const fs =require('fs')
const http=require('http')
http.createServer(function(req,res){

  const x=  fs.readFileSync('./Dev.html', 'utf8')

    res.write(x)
    res.end()
}).listen(5000, console.log('running'))