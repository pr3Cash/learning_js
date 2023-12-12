//while 
let i=0;
do
{
    console.log(i);
    i++;
}while(i<0)

//labels
outer: 
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        let input=prompt(`value at coords (${i},${j})`)
        if(!input) break outer;
    }
}
alert('done!');

//function

//func declaration
function showMessage(){
    alert('hello everyone!');
}