

const $ = function (id) { return document.getElementById(id); };

const elList = $('list');               // Get list
const addLink = $('add');
const counter = $('counter');            // Get item counter


function addItem() {                                    // Declare function
  let newItemIndex = elList.getElementsByTagName('li').length;
  let newEl = document.createElement('li');                  // New <li> element
  let newContent = 'New list item #' + newItemIndex;    // New text content
  newEl.textContent = newContent;                            // Add text to <li>
  elList.appendChild(newEl);								// Add <li> to list
  updateCount();
}

function updateCount() {                                 // Declare function
  let listItems = elList.getElementsByTagName('li').length;  // Get total of <li>s
  counter.textContent = listItems;                         // Update counter
}

addLink.addEventListener('click', addItem, false);       // Click on button

// step 1. Get remove item button
const removeButton = document.querySelector("#remove");
// step 2. define an event handler
function removeItem() {                                    // Declare function
  const item = elList.querySelector('li:last-child');
  if (item !== null) //if the item is not null
    item.remove();
}
// step 3. bundle event and event handler to the remove item button
removeButton.addEventListener("click", removeItem);


