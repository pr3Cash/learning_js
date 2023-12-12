// let user = new Object(); //object constructor syntax
// let usr ={};//object literal synta

//examples 
/*
let user={
    name:`ferg`,
    age:43,
    "like birds":true
}
user.admin=true;
console.log(user.age);
delete user.age
console.log(user["like birds"]);
user["youtube com"]='lyteter'
us="youtube com"
console.log(us)
console.log(user["youtube com"])
*/

//square brackets

//for_in
/*
let bag={
    name:'bhanu',age:19,sex:"Male",height:5.6
};
for (const key in bag) {
        console.log(key,':',bag[key])
    }
*//*
let code={
    "+49":"germ",
    "+41":"swissssss",
    "+44":"brit",
    "+1":"usa"
};
for (const i in code) {
    console.log(code[i])
}*/

//obj ref and copying
/*///using for loop
const user={
    name:"john",
    age:30,
};

let clone={};

for (const key in user) {
clone[key]=user[key];
}

clone.name='pete';

for (const key in clone) {
 console.log(clone[key]);
}*/
/*
using Obj.assign(dest,src);
let user={ name: 'john' };
let perm1 = { canView: true };
let perm2 = { canEdit: true };

Object.assign(user,perm1,perm2);

console.log(user.name,user.canView,user.canEdit);*/

//another method with assign
/*
let user ={
    name: "john",
    age: 80,
};

let clone = Object.assign({},user);

console.log(clone.age);*/
/*
//nested cloning 
let user={
    name:'john',
    age:19,
    sizes:{
        h:165,
        w:54,
    },
};

console.log(user.sizes.h);//165

let clone = structuredClone(user);//Object.assign({},user);
//structuredClone doesn't work in node

//clone.sizes =user.sizes;

console.log(clone.sizes.w);//54

clone.sizes.w=34;

console.log(user.sizes.w);//54

console.log(clone.sizes.w);//34
*/

//structuredClone
//let cloneObj =  structuredClone(object);
/*
let user ={};
user.me=user;

console.log(user.me);*/
/*
let user={
    sayHi: (a,b) => {
        return a+b;
    },
    hi(){

    }
};
say=()=>{
    return "hello";
};
console.log(say());
console.log(user.sayHi(1,1));*/
/*
let user ={
    name:"john",
    age: 9,
    sayHi(){
        console.log(this.name);
    }
}

let clone = user;
let clon = Object.assign({},user);
let cl = structuredClone(user)
user = null;
clone.sayHi();*/

//Constructor , operator 'new'
/*
function User (name){ 
    this.name=name;
    this.isAdmin=false;
}
let user = new User("jack");
console.log(user.name);
user = new User("Jack");
console.log(user.name);
user = new User("JAck");
console.log(user.name);


let U={
    nam,
    age,
    u(n){
        console.log(n);
    }
}

U.u("hey");*/
/*
function Stud(name,age,rank){
    this.name=name;
    this.age=age;
    this.rank=rank;
}

let A51 = new Stud("bhanu",19,999);

console.log(A51.name,A51.age,A51.rank);


let A21={
    // nam:"bhan",
    // age:13
    // ,rank:2,
    stud(nam,age,rank){
        console.log(nam,age);
    }
}

A21.stud('H',12,3);*/

//optional chaining 
let user ={
    sayHi: "hello",
};
let sayHi='sayHi';
//console.log(document.querySelector('.ele') ? document.querySelector('.ele').innerHTML : null);
//alert(user.address ? user.address.street ? user.address.street.name : undefined : null);
//alert(user.address && user.address.street && user.address.street.name);
//alert(user?.address?.street);
//alert(document?.querySelector('.ele')?.innerHTML)
alert(user?.[sayHi]);