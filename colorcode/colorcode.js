(function(){
	var nature = "";

	$(initialize);

	function initialize(){
		switchColor();
		changeNum();
		
		document.getElementById('submit-answer').onclick = checkAnswer;

		document.getElementById('ops').onchange = changeOp;

		document.getElementById('data').onchange = switchColor;

		document.getElementById('classes').onchange = changeNum;

	}
	function switchColor(){
		
		var colors;
		if (document.getElementById('d1').checked) {
			nature = "seq";
			colors = color_dict[nature];
			columnChange();
		}
		else if(document.getElementById('d2').checked) {
			nature = "div";
			colors = color_dict[nature];
		  	columnChange();
		}
		else{
			nature = "qual";
			colors = color_dict[nature];
			columnChange();

		}

		for(var i = 1; i<= colors[0].length; i++){
			for(var j = 1; j <= colors.length; j++){
				var id = "r" + parseInt(j) + "c" + parseInt(i);
				document.getElementById(id).style.backgroundColor = colors[j-1][i-1];
			}
		}
	}
	function columnChange(){
		var columnOne = document.getElementById("firstColumn");
		var columnTwo = document.getElementById("secondColumn");
		var columnThree = document.getElementById("thirdColumn");
		columnOne.style.cursor = "pointer";
		columnTwo.style.cursor = "pointer";
		columnThree.style.cursor = "pointer";
		columnOne.onclick = changeColor1;
		columnTwo.onclick = changeColor2;
		columnThree.onclick = changeColor3;
	}
	function changeColor1(){
		colors = extended_colors[nature];
		for(var i = 1; i <= colors[0].length; i++){
			var id = "c" + parseInt(i);
			document.getElementById(id).style.backgroundColor = colors[0][i-1];
		}
		for(var i = 1; i <=colors[0].length; i++){
			var id = "n" + parseInt(i);
			document.getElementById(id).innerHTML = colors[0][i-1];
		}
	}
	function changeColor2(){
		colors = extended_colors[nature];
		for(var i = 1; i <= colors[0].length; i++){
			var id = "c" + parseInt(i);
			document.getElementById(id).style.backgroundColor = colors[1][i-1];
		}
		for(var i = 1; i <=colors[0].length; i++){
			var id = "n" + parseInt(i);
			document.getElementById(id).innerHTML = colors[1][i-1];
		}
	}
	function changeColor3(){
		colors = extended_colors[nature];
		for(var i = 1; i <= colors[0].length; i++){
			var id = "c" + parseInt(i);
			document.getElementById(id).style.backgroundColor = colors[2][i-1];
		}
		for(var i = 1; i <=colors[0].length; i++){
			var id = "n" + parseInt(i);
			document.getElementById(id).innerHTML = colors[2][i-1];
		}
	}
	function changeNum(){
		var selects = document.getElementById("classes");
  		var selectedText = selects.options[selects.selectedIndex].text;
  		for(var i = 1; i <= parseInt(selectedText); i++){
  			var temp1 = "c" + parseInt(i);
  			document.getElementById(temp1).style.display = "block"; 
  			var temp2 = "n" + parseInt(i);
  			console.log(temp2);
  			document.getElementById(temp2).style.display = "block"; 
  		}
  		for(var j = parseInt(selectedText) + 1; j <= 7; j++){
  			var temp1 = "c" + parseInt(j);
  			document.getElementById(temp1).style.display = "none";
  			var temp2 = "n" + parseInt(j);
  			document.getElementById(temp2).style.display = "none"; 
  		}
	}
})();