(function(){
	var blankPosition = [3, 3];
	var startTime;
	var countMoves = 0;
	var countTime = 0;
	var stopTimer;
	var isPlaying = false;

	$(initialize);

	function initialize(){
		createPuzzle();
		var cdbutton = document.getElementById("shufflebutton");
		cdbutton.onclick = shuffle;
		clearDisplay();

	}
	function createPuzzle(){
		for(var i = 0; i <4; i++){
			for(var j = 0; j < 4; j++){
				var div = document.createElement("div");
				var position = i + " " + j;
				div.id = position;
				div.style.float = "left";
				div.style.border = "black 1px solid";
				if(i === 3 && j === 3){
					toBlank(div);
					div.style.fontSize = "40pt";
					div.style.fontWeight = "bold";
				}
				else{
					toPuzzle(div, 4* i + j +1);
					div.style.fontSize = "40pt";
					div.style.fontWeight = "bold";
					
				}
				document.getElementById("puzzlearea").appendChild(div);
				div.onclick = function(){
					if(isPlaying)
						moveFunction(this, false);
				};
				div.onmouseenter = function(){
					console.log("mouseover");
				};
				div.onmouseout = changeBorderColor;
				
			}
		}
	}
	function shuffle(){
		if(isPlaying){
			clear();
		}
		clearDisplay();
		var delta = [[-1,0],[1,0],[0,-1],[0,1]];
		for(var i = 0; i < 3; i++){
			var canMove = [];

			for (var j=0; j<4; j++){
				var p = [blankPosition[0] + delta[j][0], blankPosition[1] + delta[j][1]];
				if(inGrid(p)){
					canMove.push(p);
				}
			}
			var random = Math.floor((Math.random() * canMove.length));
			moveFunction(document.getElementById(pos2id(canMove[random])), true);
		}
		startTime = new Date().getTime();
		stopTimer = setInterval(displayTime, 1000);
		isPlaying = true;
	}
	function inGrid(pos){
		return (pos[0]<4 && pos[0] >= 0 && pos[1] < 4 && pos[1] >= 0);
	}
	function moveFunction(div, isShuffling){
		var location = id2pos(div.id);
		if(moveable(location)){
			var _id = pos2id(blankPosition);
			toPuzzle(document.getElementById(_id),div.innerHTML);
			toBlank(div);
			blankPosition = location;
			if(!isShuffling){
				countMoves += 1;
				document.getElementById("outputMove").innerHTML = "Moves: " + countMoves;
			}
			if(!isShuffling && isCorrect()){
				var endTime = new Date().getTime();
				var seconds = (endTime - startTime) / 1000;
				alert("You win in " + seconds + "seconds and " + countMoves + " moves!");
				clear();
			}
		}
	}
	function clear(){
		countMoves = 0;
		clearInterval(stopTimer);
		countTime = 0;
		isPlaying = false;
	}
	function clearDisplay(){
		document.getElementById("outputMove").innerHTML = "Moves: " + countMoves;
		document.getElementById("outputTime").innerHTML = "Seconds: " + countTime;
	}
	function moveable(pos){
		return (Math.abs(pos[0] - blankPosition[0]) + Math.abs(pos[1] - blankPosition[1]) === 1);

	}
	function id2pos(id){
		var location = id.split(" ");
		location = [parseInt(location[0]), parseInt(location[1])];
		return location;
	}
	function pos2id(pos){
		return pos[0] + " " + pos[1];
	}
	function changeBorderColor(){
		if(this.style.borderColor === "black"){
		}
	}
	function toBlank(div){
		div.style.width = "100px";
		div.style.height = "100px";
		div.style.backgroundImage = "";
		div.style.borderWidth = "0px";
		div.innerHTML = "";
	}
	function toPuzzle(div, content){
		div.style.width = "90px";
		div.style.height = "90px";
		div.style.borderWidth = "5px";
		div.innerHTML = content;
		div.style.backgroundImage = "url('background.png')";
		var xpos = Math.floor((content-1) % 4) * -100;
		var ypos = Math.floor((content-1) / 4) * -100;
		div.style.backgroundPosition = xpos + "px " + ypos + "px";

	}

	function isCorrect(){
		var count = 1;
		for(var i = 0; i < 4; i++){
			for(var j = 0; j < 4; j++){
				var id = pos2id([i, j]);
				if( i === 3 && j === 3){
					return true;
				}
				if(parseInt(document.getElementById(id).innerHTML) !== count){
					return false;
				}
				count += 1;	
			}
		}
		return true;
	}
	function displayTime(){
		countTime += 1;
		document.getElementById("outputTime").innerHTML = "Seconds: " + countTime;
	}
})();





