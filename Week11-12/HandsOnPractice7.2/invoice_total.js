
const $ = function (id) { return document.getElementById(id); };

//define a function to calculate discount percentage
const calculateDiscountPercent = function (customerType, invoiceSubtotal) {
	let discountPercent = 0;
	switch (customerType) {
		case "r":
			if (invoiceSubtotal < 100) {
				discountPercent = .0;
			}
			else if (invoiceSubtotal >= 100 && invoiceSubtotal < 250) {
				discountPercent = .1;
			}
			else if (invoiceSubtotal >= 250 && invoiceSubtotal < 500) {
				discountPercent = .25;
			}
			else {
				discountPercent = .3;
			}
			break;
		case "l":
			discountPercent = .3;
			break;
		case "h":
			if (invoiceSubtotal < 500) {
				discountPercent = .4;
			}
			else {
				discountPercent = .5;
			}
			break;
	}
	return discountPercent;
}

//define global variables to represent the control elements in the form
let type = $("type");
let subtotal = $("subtotal");
let discount = $("discount");
let percent = $("percent");
let total = $("total");
let calculate = $("calculate")

let processEntries = function () {
	let discountAmount;
	let invoiceTotal;
	let discountPercent;

	//get values from page, reset subtotal to 2 decimals
	let customerType = type.value;
	let invoiceSubtotal = parseFloat(subtotal.value);
	// add data validation here, to make sure the invoice total input is a non-negative numerical value 
	if (isNaN(invoiceSubtotal) || invoiceSubtotal < 0.0) {
		$("subtotal_error").textContent = "Please enter a non-negative number.";
	}
	else {
		$("subtotal_error").textContent = "";
		subtotal.value = invoiceSubtotal.toFixed(2);
		//call function to get discount percent
		discountPercent = calculateDiscountPercent(customerType, invoiceSubtotal);

		//calculate and display discount percent, amount, and new total
		discountAmount = invoiceSubtotal * discountPercent;
		invoiceTotal = invoiceSubtotal - discountAmount;

		percent.value = (discountPercent * 100).toFixed(2) + "%";
		discount.value = discountAmount.toFixed(2);
		total.value = invoiceTotal.toFixed(2);

		//step-2: save the calculated results into local storage 


	}

};

//function used to save data items into local storage when the page is loaded to browser window for the first time
function writeToStorage() {
	localStorage.setItem(type.id, type.value);
	localStorage.setItem(subtotal.id, subtotal.value);
	localStorage.setItem(percent.id, percent.value);
	localStorage.setItem(discount.id, discount.value);
	localStorage.setItem(total.id, total.value);
	
}


function retrieveData() {  // function used to retrieve data and put them back to the web page
	type.value = localStorage.getItem(type.id);
	subtotal.value = localStorage.getItem(subtotal.id);
	percent.value = localStorage.getItem(percent.id);
	discount.value = localStorage.getItem(discount.id);
	total.value = localStorage.getItem(total.id);
}

//step-3: when each time user changes inputs, then the change event will be fired, 
//and writeToStorage and processEntries functions will be executed as the event handlers



window.onload = function () {
	calculate.onclick = processEntries;
	type.focus();

	//step-1: check whether there is any data item in web page has been stored
	// in localStorage or not, if yes, then reload those data and display them on 
	// the web page
	

};