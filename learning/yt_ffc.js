/*function word(n,a,v,ad){
    var r="";
    r += "the " +a +n+v+ "to the store " + ad;
    return r;
}
console.log(word("dog ","big ","ran " ,"quickly"));*/

//typical arrays
/*
// A=[[1,2,3],[4,5,6],[[7,8,9],10,11]]
// console.log(A[2][0])
Oa=[['asf',67],['bhanu',19],['prakash',10]]
//Oa.push(['abc',12])//adds in last element
//console.log(Oa[2][1])
//console.log(Oa.pop())//rmv last element
//console.log(Oa.shift())//rmv 1st element
//console.log(Oa.unshift(['A',6]))//adds in 1st ele
console.log(Oa)*/
/*
//Funcs
function func(){
    console.log('hello world')
}

func();d*/

const bicycle={
    gear:2,
    setGear(newGear){
        this.gear=newGear;
    }
};
console.log(bicycle.gear);
bicycle.setGear(3);
console.log(bicycle.gear);