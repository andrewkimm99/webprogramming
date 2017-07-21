(function(){
	var blankPosition = [3, 3];

	$(initialize);
	function initialize(){
		createPuzzle();

		
	}
	function createPuzzle(){
		for(var i = 0; i <4; i++){
			for(var j = 0; j < 4; j++){
				var div = document.createElement("div");
				var position = i + " " + j;
				div.id = position;
				div.style.float = "left";
				if(i === 3 && j === 3){
					div.style.width = "100px";
					div.style.height = "100px";
				}
				else{
					var xpos = j * (-100) + "px";
					var ypos = i * -100 + "px";
					div.style.backgroundPosition = xpos + " " + ypos;
					div.style.backgroundImage = "url('background.png')";

					div.style.width = "90px";
					div.style.height = "90px";
					div.style.border = "black 5px solid";
					

					div.innerHTML = 4* i + j +1;
					div.style.fontSize = "40pt";
					div.style.fontWeight = "bold";
					
				}
				document.getElementById("puzzlearea").appendChild(div);
				div.onclick = moveFunction;
				div.onmouseenter = function(){console.log("mouseover")};
				div.onmouseout = changeBorderColor;

			}
		}
	}
	function moveFunction(){
		if(moveable(id2pos(this.id))){
			console.log("true");
		}
	}

	function moveable(pos){
		return (Math.abs(pos[0] - blankPosition[0]) + Math.abs(pos[1] - blankPosition[1]) === 1);

	}
	function id2pos(id){
		var location = id.split(" ");
		location = [parseInt(location[0]), parseInt(location[1])];
		return location;
	}
	function changeBorderColor(){
		console.log(this.style.borderColor);
		if(this.style.borderColor === "black"){

		}
	}
})();