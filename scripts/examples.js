const myHeading = document.querySelector('h1');
myHeading.textContent = 'Penguin sheriff takes over this website.js';
console.log('Hello world');

// Example of an if-statement
let iceCream = 'chocolate';
if(iceCream === 'chocolate'){
    console.log('I looooove chocolate ice cream!');
}else{
    console.log('Sadge, no chocolate ice cream.');
}

// Example of a function
function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}
console.log( multiply(7, 5) );
console.log( multiply(0, 5) );
console.log( multiply(7.6, 8) );
console.log( multiply(0.7, 5) );

// Another example
function divide(num1, num2){
    let result = num1 / num2;
    return result;
}
console.log( divide(64, 8) );
console.log( divide(64, 0) );
console.log( divide(0, 8) );
console.log( divide(6.4, 8) );

// An anonymous function
document.querySelector('img').addEventListener('click', function() {alert('Put your hands up, little buddy!')});