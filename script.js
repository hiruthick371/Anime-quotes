// Variables
let button=document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes=[{
  quote:"Give up on your dreams and die",
  person:"-Levi Ackerman"
},
{
  quote: "Tatakae, Tatakae",
  person: "-Eren Yeager"
},
{
  quote: "True warrior doesnt need a sword",
  person: " -Thors"
},
{
  quote: "I have no enemies",
  person: "-Thorfinn"
},
{
  quote: "Efforts are effective than Talent",
  person: "-Rock Lee"
},
{
quote: "Only one thing is equal for all, and that is death",
person: "-Johan Liebert"
},
{
quote: "Love is the most twisted curse of All",
person: "-Gojo Satoru"
},
];

button.addEventListener('click',function(){

let random = Math.floor(Math.random() * quotes.length);
quote.innerHTML = quotes[random].quote;
person.innerHTML = quotes[random].person;


})