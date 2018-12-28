var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/coffee-shop-and-general-store-north-beach-section-corpus-christi-texas-the-1024.jpg') {
      myImage.setAttribute ('src','images/coffee-2565441_960_720.jpg');
    } else {
      myImage.setAttribute ('src','images/coffee-shop-and-general-store-north-beach-section-corpus-christi-texas-the-1024.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Welcome, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
