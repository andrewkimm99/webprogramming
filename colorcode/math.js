function changeOp(){
	var op = this.op.value;
	console.log(op);
	document.getElementById('op').innerHTML = " "+op+" ";
}

function checkAnswer(){
	var firstNumber = document.getElementById("firstn");
	var secondNumber = document.getElementById("secondn");
	var answer = document.getElementById("answer");
	// functional lang

	var alarmMessage = function(mess, yesFunc, noFunc) {
		if (window.confirm(mess))
			yesFunc();
		else
			noFunc();
	};

	//shows color code once you get the answer right
	var goOn = function() {
		var colorContainer = document.getElementById("colorcode-container");
	    colorContainer.style.display = "block";
	    var mathContainer = document.getElementById("math-container");
	    mathContainer.style.display = "none";
	};

	var goBack = function() { };

	var getAnswer = function (num1, num2, op) {

		if (op === "+"){
			return num1 + num2;
		}
		else if (op === "-"){
			return num1 - num2;
		}
		else{
			return num1 * num2;
		}

	};
	var op = document.getElementById("ops").op.value;

	var isDigit = function(){

		var _isDigit = function(s){
			return s.value.length !== 0 && !isNaN(parseInt(s.value));
		};
		return _isDigit(firstNumber) && _isDigit(secondNumber) && _isDigit(answer);
	};

	if (!isDigit()) {
		alarmMessage("At least one of your values is not digit.", goBack, goBack);
		return;
	}
	//else if (getAnswer(parseInt(firstNumber.value) ,parseInt(secondNumber.value), op.innerHTML.toString().replace(/\s+/g, '')) === parseInt(answer.value)){
	else if (getAnswer(parseInt(firstNumber.value) ,parseInt(secondNumber.value), op) === parseInt(answer.value)){
		alarmMessage("You are correct! Do you want to move to color code?", goOn, goBack);
	}
	
	else{
		alarmMessage("You are incorrect", goBack, goBack);
	}

	
}

