let myButton = document.querySelector('button');
let myHeading = document.querySelector('p.greeting');

// Sets a given name in a heading
function setUserName(){
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    let lastLetter = myName.charAt(myName.length - 1);
    if(!myName){ // equivalent to (myName === '')
        setUserName();
    }else{
        myHeading.textContent = 'Welcome, ' + myName + '!';
    }
}

// Checks if a name is given to a heading
if (!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, visitor!';
}

// Enables the username function by clicking a button
myButton.onclick = function(){
    setUserName();
}