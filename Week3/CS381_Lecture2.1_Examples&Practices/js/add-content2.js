
let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
  greeting = 'Good evening!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

// document.write('<h3>' + greeting + '</h3>');
document.body.innerHTML += '<h3>' + greeting + '</h3>';


//Use web browser console to print out variables: today, hourNow, greeting etc.
//output to web browser's console, move this to create a separate js file: anther.js
console.log(today);
console.log(hourNow);
console.log(greeting);
