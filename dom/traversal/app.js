const gp = document.getElementById('gp-id');
const p = Array.from(document.getElementsByClassName('p'))

//changeColor(gp)
p.forEach(changeColor)

function changeColor(element){
    element.style.backgroundColor = '#443'
}