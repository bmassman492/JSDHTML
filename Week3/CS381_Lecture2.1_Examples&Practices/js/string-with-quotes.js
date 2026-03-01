// Create variables to hold the title and note text.
let title;
let message;

// Assign values to these variables.
title = "Molly's Special Offers";
//message = "<a href=\"sale.html\">25% off!</a>";
message = '<a href="sale.html">25% off!</a>';

// Get the element with an id of title.
const elTitle = document.getElementById('title'); 
// Replace the content of this element.
elTitle.textContent = title;

// Get the element with an id of note.
const elNote = document.getElementById('note');
// Replace the content of this element.
elNote.innerHTML = message;
