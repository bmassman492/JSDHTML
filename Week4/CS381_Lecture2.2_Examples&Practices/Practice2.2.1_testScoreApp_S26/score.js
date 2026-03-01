// define a function so that in js code, $ can be used to replace document.getElementById
const $ = function (id) { return document.getElementById(id); };

//define processEntries function
const processEntries = function () {
	$('scoreTotal').value = "";
	$('scoreFinal').value = "";
	let message = "";
	let isValid = true;

	const numScores = 3;
	let scores = [];
	for (let i = 0; i < numScores; i++) {
		scores[i] = $("score" + (i + 1)).value;
		scores[i] = parseInt(scores[i]);
		//validate inputs
		if (isNaN(scores[i]) || scores[i] < 30 || scores[i] > 120) {
			isValid = false;
			message += `test-${i + 1} score input is invalid.\n`;
		}
	}

	if (isValid) //if all input scores are valid
	{
		let totalscore = 0;
		for (let i = 0; i < scores.length; i++) {
			totalscore += scores[i];
		}
		console.log(totalscore);
		$('scoreTotal').value = totalscore;

		let finalGrade = "";
		//add js code to determine final grade based on totalscore
		if (totalscore >= 290) finalGrade = 'A';
		else if (totalscore >= 240) finalGrade = 'B';
		else if (totalscore >= 210) finalGrade = 'C';
		else if (totalscore >= 180) finalGrade = 'D';
		else finalGrade = 'F';

		$('scoreFinal').value = finalGrade;
	}
	else
		alert(message);

};  //end of processEntries function

$("calculate").onclick = processEntries;
$("score1").focus();