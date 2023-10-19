let openBtn = document.getElementById('open-btn');
let closeBtn = document.getElementById('close-btn');
let modalContainer = document.getElementById('modal-container');

//event listeners
openBtn.addEventListener('click',function(){

    modalContainer.style.display = 'block';
    console.log('button clicked');

});

closeBtn.addEventListener('click',function(){

    //modalContainer.style.display = 'none';
modalContainer.remove();
});

window.addEventListener('click',function(e){
    if(e.target === modalContainer){
        //modalContainer.style.display = 'none';
        modalContainer.remove();
    }
})

