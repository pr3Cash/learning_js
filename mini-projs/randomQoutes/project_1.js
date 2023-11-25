let btn = document.querySelector('button#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {    quote: 'hello',person:'bhey'},
    {    quote: 'hai',person:'bhe'},
    {    quote: 'hey',person:'bey'},
    {    quote: 'hello bro',person:'bhai'},
];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

}) 