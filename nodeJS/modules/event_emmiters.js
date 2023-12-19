//EventEmitter
// const EventEmitter = require('events');

// const customEmitter = new EventEmitter();

// customEmitter.on("res",(name,id)=>{
//     console.log(`hello ${name} ${id}`)
// });
// customEmitter.on("res",()=>{
//     console.log("hey")
// });

// customEmitter.emit("res","bhanu",68)


//http example

const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.end("hello");
// }).listen(5000)

//using event emitter api 
const server = http.createServer()
//emits request event 
server.on('request',(req,res)=>{
    res.end('Hello bhanu')  
})

server.listen(5000)

