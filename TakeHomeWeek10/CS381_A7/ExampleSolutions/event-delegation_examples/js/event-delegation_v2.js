
function itemDone(e) {                           // Declare function
  // Remove item from the list
  let target, elParent, elGrandparent;           // Declare variables
  target = e.target;                         // Get the item clicked link

  //only if a delete button on the web page is clicked, then delete the list item 
  if (target.nodeName.toLowerCase() == "a") {  // If user clicked on an <a> element
    elListItem = target.parentNode;              // Get its li element
    elList = elListItem.parentNode;              // Get the ul element
    elList.removeChild(elListItem);              // Remove list item from list
  }
  // Prevent the link, which is <a> element from taking you elsewhere
  e.preventDefault();                          // Use preventDefault() 

}
// Set up event listeners to call itemDone() on click
var el = document.getElementById('shoppingList');// Get shopping list
el.addEventListener('click', function (e) {     // Add listener on click
  itemDone(e);                                 // It calls itemDone()
}, false);                                     // Use bubbling phase for flow


