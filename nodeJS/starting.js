// const http = require('http');

// http.createServer(function(request,response){

//     response.writeHead(200,{'Content-Type':'text/html'})
//     response.end('hello bro antunna');
//      //response.end();
     
// }).listen(8080)


// const http = require('http'),fs = require('fs'),path = require('path')

// const server = http.createServer((req,res)=>{
//     let fP = path.join(__dirname, "start.html");
//     //  let stat = fs.FileSystem.statSync(fP);

//     res.writeHead(200, `'Content-Type' : 'text/html'`, fP);

//     // let readStream = fs.FileSystem.createReadStream(fP);
//     // readStream.pipe(res);
    
    
    
// }).listen(9000)


const http = require('http')

const server = http.createServer((req,res)=>{

    if (req.url === '/abc') {
        res.end(req.url)    
    }
    if (req.url === '/') {
        res.end('./start.html')    
        res.pipe;
    }

    res.end(`<h1> oops that messed up! got into wrong file`)
}).listen(9000)