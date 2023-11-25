const passwordBox = document.getElementById("password");
let passwordRange = document.getElementById("passwordRange");
let presentRange = document.getElementById('presentRange');
let leng;
function choosenRange(){
    presentRange.innerText = '';
    presentRange.innerText = passwordRange.value;
    //console.log(passwordRange.value);
    leng = passwordRange.value;

}


const upperCase = 'ABCDEFGHIJKLMNOPQRUSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const symbol = '~!@#$%^&*()_-+=\|;:/?>,<';
const number = '0123456789';

const allChars = upperCase + lowerCase + number + symbol;

function ranPwdGen(){
    let password ='';

    // password += upperCase[Math.floor(Math.random()*upperCase.length)];
    // password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    // password += number[Math.floor(Math.random()*number.length)];
    // password += symbol[Math.floor(Math.random()*symbol.length)];
    
    while(leng > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand('copy');

    alert('password copied successfully');
}

