(function(){

	

	$(initialize);

	function initialize(){
		switchColor();
		
		document.getElementById('submit-answer').onclick = checkAnswer;

		document.getElementById('ops').onchange = changeOp;

		document.getElementById('data').onchange = switchColor;


		var columnOne = document.getElementById("firstColumn");
		columnOne.style.cursor = "pointer";
		


	}
	function switchColor(){
		var colors;

		if (document.getElementById('d1').checked) {


			colors = color_dict["seq"];

			
		 	
			var columnOne = document.getElementById("firstColumn");
			columnOne.onclick = myAlert1;
		}
		else if(document.getElementById('d2').checked) {
		  			var columnOne = document.getElementById("firstColumn");
			columnOne.onclick = myAlert2;
		}
		else{

			var columnOne = document.getElementById("firstColumn");
			columnOne.onclick = myAlert2;

		}

		for(var i = 1; i<= colors[0].length; i++){
			for(var j = 1; j <= colors.length; j++){
				var id = "r" + parseInt(i) + "c" + parseInt(j);
				document.getElementById(id).style.backgroundColor = colors[j][i];
			}
		}
	}

	function myAlert1(){
		alert("Hello, World!");
	}

	function myAlert2(){

	}
	


	


})();