// //Async Patterns blocking code 
// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if (req.url === '/') {
//         res.end('home page')
//     }
//     if(req.url === "/about"){
//         //BLOCKING CODE !!!
//         for (let i = 0; i < 1000; i++) {
//             for (let j = 0; j < 1000; j++) {
//                 console.log(`${i} ${j}`);
//             }            
//         }
//         res.end("about")
//     }
//     res.end("About page")
// })

// server.listen(5500,()=>{
//     console.log("server listening on port 5500...");
// })

//Async Patterns Setup Promises & Refactor To Async

// const {readFile} = require('fs');

// const getText = (path =>{
//     //promise function
//     return new Promise((res,rej)=>{///
//         readFile(path,'utf8',(err,data)=>{
//             if (err) {
//                 rej(err);
//                 // console.log(err);
//             }
//             else{
//                 res(data); 
//                 // console.log(data);
//             }
//         })
//     })///
// })

//promises
// // getText('../first.txt')
// //     //if evrything goes allright
// //     .then((res)=>console.log(res))
// //     //if anything gets error like dir name
// //     .catch((err)=>console.log(err));

// const start = async()=>{
//     try{
//     const first  = await getText('./first.txt');
//     const second = await getText('./second.txt');
//     console.log(first,second);
//     }catch(error){
//         console.log(error);
//     }

// }


// start()


//node's native option
const {readFile,writeFile} = require('fs').promises //also works

// const {readFile,writeFile} = require('fs');
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async()=>{
    try{
    const first  = await readFile('./first.txt','utf-8');//readFilePromise('./first.txt','utf-8');
    const second = await readFile('./second.txt','utf-8');//readFilePromise('./second.txt','utf-8');
    
    await writeFile('./result.txt',
    `this is awesone: ${first} ${second}`,
    {flag:'a'}) //flag:'a' for appending ops
    
    console.log(first,second);
}catch(error){
        console.log(error);
    }

}

start() 