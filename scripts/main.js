// select the element <img>
let myImage = document.querySelector('img');

// A click function
myImage.onclick = function() {
    // gets the src attribute from the <img>-Element
    let mySrc = myImage.getAttribute('src');
    // checks if the photo is in the website
    if(mySrc === '/images/bubatz-sheriff.jpg'){
        // if yes, by clicking on the image, it should change to the other pic
        myImage.setAttribute('src', '/images/bubatz-sheriff-but-derp.jpg');
    }else{
        // else, add the missing picture
        myImage.setAttribute('src', '/images/bubatz-sheriff.jpg');
    }
}

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