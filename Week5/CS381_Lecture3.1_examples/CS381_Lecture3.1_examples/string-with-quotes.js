// Create two string variable.
let title = "Molly's Special Offers";
let message = '<a href=\"sale.html\">25% off!</a>';

// Get the element with an id of title.
let elTitle = document.querySelector('#title'); //select <div> element with id="title"
// Replace the text content of this element.
elTitle.textContent = title;

// Get the element with an id of note.
let elNote = document.querySelector('#note');
// Replace the content of the element with id='note' by adding a hyperlink element in the element
elNote.innerHTML = message;






