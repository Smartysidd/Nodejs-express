const http=require('http')

const data={"name":"siddharth"}

const server=http.createServer((req,res)=>{

console.log('server has started')

// res.end('<h1>Hello from siddharth</h1>')

res.setHeader('Content-Type','application/json')
res.end(JSON.stringify(data))

// res.setHeader("Content-Type",'text/html')

// res.end('<h1>Hello this is siddharth gupta</h1>')

})

server.listen(8000)