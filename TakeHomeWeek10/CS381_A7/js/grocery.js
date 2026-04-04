
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
	let suffix = "";
	switch (listItems) {
		case 0: suffix = "st"
		case 1: suffix = "nd"
		case 2: suffix = "rd"
		default: suffix = "th"
	}
	prompt("Add new item as " + listItems + suffix + " item?")


	//step 1.3, 1.4: If users clicked the "OK" button in the prompt box without entering new text (i.e., if prompt box returns 
	//a null) or without removing the default text (i.e., if prompt box returns default text), then an alert box will pop-up 
	//and says "Did not enter a new item. Try again!".

	//step 1.5: If users entered a name of new item and press the OK button in the prompt box, then 
	//a new list item (i.e., a new <li> element with the text content which is the name that users entered) 
	//will be added at the end in the grocery list on the web page. When adding a new item to the grocery list, 
	//should also add a "delete" button inside that new item. The delete button is structured as <a href="#" class="delete">Delete</a>. 

	//step 1.6: After adding a new item to the list, update the number of groceries in the list by calling   updateCount function.
}

// create a function that remove <li> element which's delete button is clicked
function removeItem() {  //step 2.1: Add a parameter in the function header to reference the event object. 
	//step 2.2: Set up an if statement so that only when a delete button (i.e., <a> element) is clicked, 
	//the related list item will be removed. 
	//a.In the if statement, use the event object to find the delete button that user clicked, and 
	//then delete the <li> element which contains that delete button.  
	//b. After deleting that grocery item, the updateCount function is used to update the number of groceries in the list. 

}


addLink.addEventListener('click', addItem, false);       // Click on button

//step 3: Apply event delegation by using addEventListener() method of the <ul> element so that when any of 
//the delete buttons in the gerocery list is clicked,  removeItem function will be called as an event handler.  
//use event delegation to add event hander to <ul> element to delete each <li> element


