alert('Hello!');
let userName = prompt('What is your name?');
alert('Nice to meet you, '+userName+'!');
let userAge = +prompt('How old are you?');
let birthYear;
if(confirm('did you have birthday this year?')) {   
    birthYear = 2022-userAge; 
    alert('Your birth year is: '+birthYear);    
} else {
    birthYear = 2022-userAge-1; 
    alert('Your birth year is: '+birthYear); 
}

