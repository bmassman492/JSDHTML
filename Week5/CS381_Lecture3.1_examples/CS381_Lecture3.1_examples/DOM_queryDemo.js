// Select the first list item in the list, and
// change its class to 'cool'
let firstLi = document.getElementById('one');
console.log(firstLi);
console.log(typeof firstLi);
firstLi.className = 'cool';


// Select the 2nd list item in the list, and
// change its class to 'cool'
let secondLi = document.querySelector('#two');
console.log(secondLi);
console.log(typeof secondLi);
secondLi.className = 'cool';


//Select all list items that have class "hot", and display
//them in console
let hotLi = document.querySelector('.hot');
console.log(hotLi);
console.log(typeof hotLi);




// Get the content of the first list item


// Insert a link in the first list item



//(2) use querySelector() method to find <li> with id="four", change its text
//content to "rice vinegar".
//use String replace() method to replace text in a string


//(3) Add text "Crispy Apple Pie" into the 3rd <li> element to make it displays as "Honey Crispy Apple Pie"
//in the case that there is no id provided to the 3rd <li> element,
//we may use CSS style selector :nth-child() to find the <li> element


//(4) Replace '  figs' with ' apple' in first <li> element  on the web page?

//using travering DOM approach:  get the last child node (which is a text node) of the <a> element node
//and then update that text node's node value to " apple".

//(5) Get all <li> elements in the <ul> element
// and use innerHTML to add them into the <div> element with id = "result"

//(6) Get all <li> elements with class="hot" and display their text contents. (use a regular for loop)

//console.log(allLiEle.textContent); //output "undefined", because allHotLi is a NodeList object, it does not
//have the textContent property, so allHotLi.textContent will return "undefined".


//(7) How about if we want to add all <li> with class="hot" to a new <div> element with id="result2"?
//create a new <div> element with id="result2" in the web page first
//use regular for loop to get each element from the NodeList object
//instead of using innerHTML, we use append() approach to add all hot <li> elements in the <div> element
//with id="result2". Note: if does not use cloneNode() method, then those hot <li> elements will be removed
//from <ul> element to the <div> element.
//append new <br> element and new <div> element


//use append() method to add element nodes one by one inside an existing element
//use cloneNode() method to create a duplicate copy of an element node.
//Note-1: without using cloneNode() method, those "hot" <li> elements will be moved to the <div> element
//with class="result".
//Note-2: to update the ids in cloned <li> nodes to make sure each element in the page has a unique id!


//(8) Add class="hot" to the last <li> element in <ul> element
//Note: use "className" property will replace all existing class names with the new class
// or add new class if there is no existing class names.
//Add class ="cool" to the first <li> element in the <div> with id="result"
//Use classList.add() method can add new class to existing class name list

//add "cool" class, the <li> element now
//belongs to two classes: "hot" and "cool".