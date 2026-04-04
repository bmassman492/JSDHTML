

const options = document.getElementsByName('heard');		// Get the radio buttons
const other = document.getElementById('other');        	// Other radio button
const otherText = document.getElementById('other-text');   	// Other text input
otherText.className = 'hide';                        	// Hide other text input

for (let i = 0; i < options.length; i++) 			// Loop through radios
{
	options[i].addEventListener('click', radioChanged);  // Add event listener                         
}


function radioChanged() {
	let hide;
	if (other.checked)  			// Is other checked?
		hide = '';
	else
		hide = 'hide';

	otherText.className = hide;     // Text input visibility
	if (hide)                       // If text input hidden
		otherText.value = '';         // Empty its contents
}
