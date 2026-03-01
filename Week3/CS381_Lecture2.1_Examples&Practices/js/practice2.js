function first() {
			alert('From external JavaScript');

		}
		//https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
		window.onload = function () {
			let elem1 = document.getElementById("ticket");
			elem1.addEventListener("click", first);
		} //to execute everything in that function after the entire page has finished loading to browser window
//
/*

*/

function second() {
			alert('From external JavaScript!');
		}
		let elem = document.getElementById("about");
		elem.addEventListener("click", second);

        