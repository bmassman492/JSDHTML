		// define a function so that in js code, $ can be used to replace document.getElementById
		const $ = function(id) { return document.getElementById(id); };
		let numInputs = 1; //default setting, showing one test score input box
		let maximum = 1; //define this variable outside of setupInputBox
		//define setupInputBox function to add more test score inputs boxes 
		const setupInputBox = function(){

			$('testInputs').innerHTML = "";		
			$('scoreTotal').value = "";
			$('scoreAvg').value = "";
			$('scoreFinal').value = "";
			
			numInputs = $('numscores').value;
			numInputs = parseInt(numInputs);  // convert inputs into integer numerical value

//step-1.1.1: update the value of variable maximum
//get maximum number of tests from the value of the max attribute from the <input> element with id='numscores', 
			const maximum = $parseInt('numscores').getAttribuyr("max"); 
				
console.log(maximum);
			
//step-1.1.2: Add a condition in if() statement
//if user input for number of test scores is valid and in the range of 1 to maximum, then complete step 1.2
			if (!NaN(numINputs) && numInputs <= maximum && numInputs > 0) 
			{   
				for (let i=1; i <= numInputs; i++)
				{
//Step-1.2.1: create new <label>, <input>, <span> and <br> elements (call document.createElement() method to create each new element)
//Step-1.2.2: add for attribute to each new <label> element  (use setAttribute() method)
//Step-1.2.3: add text content to each new <label> element (use either textContent or call document.createTextNode() method)
//Step-1.2.4: add id, type, and value attributes to each new <input> element (use setAttribute() method)
					let newLabel = document.createElement('label');
					newLabel.textContent = `Test-${i}`;
					newLabel.setAttribute('for', `score${i}`);

					let newInputBox = document.createElement('input');
					newInputBox.setAttribute('type', 'number');
					newInputBox.setAttribute('value', '150');
					newInputBox.id = `score${i}`;

					let newSpan = document.createElement('span');
					let newBr = document.createElement('br');



//Step-1.2.5: append each new <label>, <input>, <span> and <br> elements to the <div> element with id=”testInputs”.	
//Hint: you may use append() method to append multiple elements,  https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append	
//or you may use appendChild() method to append new elements one by one, 								
					
					$('testInputs').append(newLabel, newInputBox, newSpan, newBr);

				}
				
			}
			else 
				alert(`Number of tests to consider should be no more than ${maximum}.`);
		}
		
		//setupInputBox is registered as an event handler after user selects the number of test scores 
		$('numscores').onchange = setupInputBox;  
		
		//define getFinalGrade function
		const getFinalGrade = function(avgGrade){
			return avgGrade >=120 ? "A" : avgGrade >=100 ? "B" : avgGrade >=80 ? "C" : avgGrade >=60 ? "D" : "F";
		}



		//define processEntries function
		const processEntries = function() {
		    $('scoreTotal').value = "";
			$('scoreAvg').value = "";
			$('scoreFinal').value = "";
			console.log(numInputs);
			let score = [];   //score array is used to store all valid test scores that user entered in the web page
			let input = "";  //variable to accept user input score
			let message =""; //error message string
			
			let totalscore=0, avgScore, finalScore;
			
			let isValid = true;
			
			for (let i=1; i<=numInputs; i++)
			{

//step 2.1: add js code to read in each user inputted test score(s) from input test score boxes on the web page.
//convert user input into numerical data: you may use parseFloat() method
		        let scoreinput = parseFloat($(`score${i}`).value);
				if(isNaN(scoreInput)|| scoreInput <0 ||scoreInput > 150) {
					message = "*Invalid input. Enter a number between 0 and 150."
					$(`score${i}`).className = "error";
					$(`score${i}`).nextElementSibling.textContent = message;

				}
				else {
					score.push(scoreInput);
					$(`score${i}`).className = "";
					$(`score${i}`).nextElementSibling.textContent = "";
				}

				

//step 2.2: add js code to validate each test score to make sure all inputted test scores are numerical values 
//between 0 and 150 (i.e., no less than 0 and no greater than 150 points). 
//If a test score is invalid, generate error message "*Invalid input. Enter a number between 0 and 150.", and add that error messge to message string.
//Display that error message to the <span> element besides each test score input box that has invalid input. 
//Highlight the input boxes in which there are invalid inputs (e.g., by changing the value of class attribute to “error”).  
//if a test score is valid, add that test score to the score array.			
		    } //end of the for loop 
			
//step 2.3: add js so that when all inputted test scores are valid, compute total points, average points (with zero decimal place), and 
//final letter grade, and display them in the input boxes in the <div> element with id=’result’ on the web page.  
//If not all inputted test scores are valid, then create an alert box to display an error message 	
			if (!message) {
				score.forEach( ele => totalscore += ele);
				avgScore = totalscore/score.length;
				finalScore = getFinalGrade(avgScore);

				//display results in webpage
				$('scoreTotal').value = totalscore.toFixed(2);
				$('scoreAvg').value = avgScore.toFixed(2);
				$('scoreFinal').value = finalScore;
			}
			
	        
        };  //end of processEntries function

		
		//each time when calculate button is clicked, inputted test scores will be evaluated and 
		$("calculate").onclick = function (){  
								   if (numInputs > 0 && numInputs <= maximum)
										processEntries();
						          };
		$("numscores").focus();
		
	
		