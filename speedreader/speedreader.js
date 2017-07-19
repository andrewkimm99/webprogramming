(function(){
	var speed2interval = {
		'50 wpm': 500, 
		'300 wpm': 200, 
		'350 wpm': 171, 
		'400 wpm': 150, 
		'450 wpm': 133,
		'500 wpm': 120
	};

	var name2size = {
		'medium' : 36,
		'big' : 48,
		'bigger' : 60
	};

	var count = 0;
	var printInterval;

	var isRunning = false;

	var wordArray = [];
	

	$(initialize);
	function initialize(){
		setRunning(false);
		console.log("load");
		var cdbutton = document.getElementById("start");
		cdbutton.onclick = pressStart;
		cdbutton = document.getElementById("stop");
		cdbutton.onclick = pressStop;

		document.getElementById("speed").onchange = speedChanged;
		sizeChanged();
		document.getElementById("size").onchange = sizeChanged;


	}

	function pressStart(){
		setRunning(true);
		var words = document.getElementById("message").value;
		var temp = words.split(/[ \t\n]+/);

		for(var i = 0; i < temp.length; i++){
			if(temp[i] !== ""){
				wordArray.push(temp[i]);
			}
		}
		printWord();

	}
	function pressStop(){
		
		console.log("stop pressed");
		reset();
	}
	function speedChanged(){
		if(isRunning){
			clearInterval(printInterval);
			printWord();
		}
		

		//console.log(document.getElementById("speed").sp.value);
	}
	function sizeChanged(){
		var currSize = document.getElementById("size").sz.value;
		var fontSize = name2size[currSize];
		document.getElementById("output").style.fontSize = parseInt(fontSize) + "pt";
		
	}

	function print(){
		if(count === wordArray.length){
			reset();
			return;
		}
		
		document.getElementById("output").innerHTML = wordArray[count];

		count += 1;
	


	}
	function printWord(){
		var speed = document.getElementById("speed");
		var currSpeed = speed.options[speed.selectedIndex].text;
		console.log(currSpeed);
		printInterval = setInterval(print, speed2interval[currSpeed]);
	}
	function reset(){
		clearInterval(printInterval);
		count = 0;
		wordArray = [];
		setRunning(false);
	}
	function setRunning(_isRunning) {
		isRunning = _isRunning;
		document.getElementById("start").disabled = _isRunning;
		document.getElementById("stop").disabled = !_isRunning;
	}
	
})();