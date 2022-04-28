// select the element <img>
let myImage = document.querySelector('img');

// A click function
myImage.onclick = function() {
    // gets the src attribute from the <img>-Element
    let mySrc = myImage.getAttribute('src');
    // checks if the photo is in the website
    if(mySrc === '/test-site/images/bubatz-sheriff.jpg'){
        // if yes, by clicking on the image, it should change to the other pic
        myImage.setAttribute('src', '/test-site/images/bubatz-sheriff-but-derp.jpg');
    }else{
        // else, add the missing picture
        myImage.setAttribute('src', '/test-site/images/bubatz-sheriff.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// Sets a given name in a heading
function setUserName(){
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    let lastLetter = myName.charAt(myName.length - 1);
    if(!myName){ // equivalent to (myName === '')
        //myHeading.textContent = 'Penguin sheriff takes over this website.';
        setUserName();
    }else if (lastLetter === 's'){
        myHeading.textContent = 'Penguin sheriff takes over ' + myName + '\' website.';
    }else{
        myHeading.textContent = 'Penguin sheriff takes over ' + myName + '\'s website.';
    }
}

// Checks if a name is given to a heading
if (!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Penguin sheriff takes over this website.';
}

// Enables the username function by clicking a button
myButton.onclick = function(){
    setUserName();
}