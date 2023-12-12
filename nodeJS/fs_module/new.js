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