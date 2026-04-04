function itemDone(e) {                           // Declare function, e represents event object                    
  // e is used to find target of the event
  let elListItem, elList;
  if (e.target.nodeName.toLowerCase() == "a") {  // If user clicked on an a element
    elListItem = e.target.parentNode;              // Get its li element
    elList = elListItem.parentNode;              // Get the ul element
    elList.removeChild(elListItem);              // Remove list item from list
  }

  if (e.target.nodeName.toLowerCase() == "em") { // If the user clicked on an em element
    elListItem = e.target.parentNode.parentNode;   // Get its li element
    elList = elListItem.parentNode;              // Get the ul element
    elList.removeChild(elListItem);              // Remove list item from list
  }

  // Prevent the link (i.e., <a> element) from taking you elsewhere
  e.preventDefault();                          // Use preventDefault() 
}

// Use event delegation to set up event listener to call itemDone() on click
const el = document.getElementById('shoppingList');// Get shopping list, which is the <ul> element

// Register event handler for "click" event to the <ul> element so that the even handler will be executed
// when click event fires on any descendants of the <ul> element is been clicked					   
el.addEventListener('click', itemDone, false);     // It calls itemDone()
// Use bubbling phase for flow
