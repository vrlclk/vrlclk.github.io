// select the element <img>
let myImage = document.querySelector('img.sheriff');

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

document.querySelector('img.sheriff').addEventListener('click', () => { alert('Put your hands up, little buddy!'); });