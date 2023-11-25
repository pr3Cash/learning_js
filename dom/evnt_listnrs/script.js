let gp = document.querySelector('.grandparent');
let p = document.querySelector('.parent');
let c = document.querySelector('.child');

gp.addEventListener('click', e => {
    
    console.log('gp');
})
p.addEventListener('click', e => {
    console.log('p');e.stopImmediatePropagation()
})
c.addEventListener('click', e => {
    console.log('c');e.stopImmediatePropagation()
})
document.addEventListener('click',e => {
    console.log('doc')
})