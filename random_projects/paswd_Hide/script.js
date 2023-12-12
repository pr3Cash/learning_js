let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById('pswd');

eyeicon.addEventListener('click',()=>{
// eyeicon.onclick = function(){

    if(password.type == 'password'){
        password.type = 'text';
        eyeicon.src = "./assets/on.svg"
    }
    else{
        password.type = 'password';
        eyeicon.src = "./assets/off.svg";
    }
    
});