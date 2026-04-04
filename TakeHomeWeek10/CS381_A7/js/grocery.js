
const $ = function (id) { return document.getElementById(id); };
const elList = $('list');               // Get <ul> list                   
const addLink = $('add');				   // Get add item button
const counter = $('counter');            // Get item counter

function updateCount() { 		   // Define updateCount function				
	let listItems = elList.getElementsByTagName('li').length;  // Get total of <li>s
	counter.innerHTML = listItems;                         // Update counter
}

// Declare function to add an item in the list
function addItem() {
	//step1.1, 1.2: Create a prompt pop-up box by using prompt() method. Add a default text 
	//in the prompt box when creating that prompt box. 
	//The default text is: "add new item as nth item", where n is equal to the number of items in the grocery list + 1 
	let listItems = elList.getElementsByTagName('li').length;
	let defaultText = "add new item as " + (listItems + 1) + "th item";
	let newItem = prompt("Please enter a new item", defaultText);

	//step 1.3, 1.4: If users clicked the "OK" button in the prompt box without entering new text (i.e., if prompt box returns 
	//a null) or without removing the default text (i.e., if prompt box returns default text), then an alert box will pop-up 
	//and says "Did not enter a new item. Try again!".
	if (newItem === null) {
	}
	else if (newItem === "" || newItem === defaultText) {
		alert("Did not enter a new item. Try again!");
	}
	else {
	//step 1.5: If users entered a name of new item and press the OK button in the prompt box, then 
	//a new list item (i.e., a new <li> element with the text content which is the name that users entered) 
	//will be added at the end in the grocery list on the web page. When adding a new item to the grocery list, 
	//should also add a "delete" button inside that new item. The delete button is structured as <a href="#" class="delete">Delete</a>. 
	let newEl = document.createElement('li');
	newEl.innerHTML = newItem + '<a href="#" class="delete">Delete</a>';
	elList.appendChild(newEl);

	//step 1.6: After adding a new item to the list, update the number of groceries in the list by calling   updateCount function.
	updateCount();
	}
}

// create a function that remove <li> element which's delete button is clicked
function removeItem(e) {  //step 2.1: Add a parameter in the function header to reference the event object. 
	//step 2.2: Set up an if statement so that only when a delete button (i.e., <a> element) is clicked, 
	//the related list item will be removed. 
	if (e.target.nodeName.toLowerCase() === "a") {
		//a.In the if statement, use the event object to find the delete button that user clicked, and 
		//then delete the <li> element which contains that delete button.  
		let elListItem = e.target.parentNode;

		//BONUS REVISION TO STEP 2
		let itemText = elListItem.textContent.replace("Delete", "").trim();
		let confirmDelete = confirm("Delete " + itemText + " ?")
		if (confirmDelete) {
			elList.removeChild(elListItem);

			//b. After deleting that grocery item, the updateCount function is used to update the number of groceries in the list. 
			updateCount();
		}
	}
	e.preventDefault();
}

addLink.addEventListener('click', addItem, false);       // Click on button

//step 3: Apply event delegation by using addEventListener() method of the <ul> element so that when any of 
//the delete buttons in the gerocery list is clicked,  removeItem function will be called as an event handler.  
//use event delegation to add event hander to <ul> element to delete each <li> element
elList.addEventListener('click', removeItem, false);

