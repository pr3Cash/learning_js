let fs = require('fs');

fs.readFile('calc.js','utf8',function(err,data){
    console.log(data)
    
});

// fs.appendFile('calc1.js',code2,function(err){
//     console.log("data Saved");
// })

// fs.readFile("calc1.js",'utf8',function(err,data){
//     console.log(data);
// })

const { readFile  , writeFile } = require('fs');
// import { readFile , writeFile } from 'node:fs';

console.log('start');
readFile('./app.js','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result
    console.log(first) 
}
)