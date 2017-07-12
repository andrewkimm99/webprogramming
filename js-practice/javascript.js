(function(){
	//
	/*
	number = int, float
	String = "" ''
	*/
	var numberBird = 0;
	var numberBird1 = 0;
	var hidden = true;

	var colorOrder = 0;

	var colors = [
		'#AF7AC5',
		'#5DADE2',
		'#48C9B0',
		'#F4D03F',
		'#F5B041'
	];

	var color2border = {
		'#AF7AC5': '#633974',
		'#5DADE2': '#21618C',
		'#48C9B0': '#148F77',
		'#F4D03F': '#F5B041',
		'#F5B041': '#D35400'
	};

	$(initialize);

	function initialize(){
		console.log("hello world");
		var cdbutton = document.getElementById('changeDiscription');
		///console.log(cdbutton);
		//console.log(cdbutton.innerHTML);
		cdbutton.innerHTML = "computer science";
		cdbutton.style.backgroundColor = "orange";
		cdbutton.style.fontSize = "20px";
		cdbutton.onclick = changeDescription;
		var clickFunc = changeDescription;
		//console.log(clickFunc);

		cdbutton = document.getElementById("addBird");
		cdbutton.onclick = insertBird;

		cdbutton = document.getElementById("deleteBird");
		cdbutton.onclick = deleteBird;

		document.getElementById("showBird").onclick = showBird;

		var containers = document.getElementsByClassName('containers');

		for(var i = 0; i < containers.length; i++){
			containers[i].onclick = changeColor;

		}

		console.log(containers);



	}
	function changeColor(){
		console.log("changeColor");
		this.style.backgroundColor = colors[colorOrder];
		this.style.borderColor = color2border[colors[colorOrder]];
		colorOrder +=1;
		if(colorOrder === 5){
			colorOrder = 0;
		}

	}

	function showBird(){
		// this = document.getElementById('showBird');
		console.log(this);
		if(hidden){
			hidden = false;
			var birdpicture = document.getElementById("birdpicture");
			birdpicture.style.display = "block";
			this.innerHTML = "hide bird";
		}
		else{
			hidden = true;
			var birdpicture = document.getElementById("birdpicture");
			birdpicture.style.display = "hidden";
			this.innerHTML = "show bird";
		}
	}

	function showBird2(){
		//console.log(this);
		//var cdbutton = document.getElementById('showBird');
		if(numberBird1 === 1){
			numberBird1 -= 1;
			var thirdDiv = document.getElementById("third-div");
			var children = thirdDiv.childNodes;
			thirdDiv.removeChild(children[children.length-1]);
			this.innerHTML = "Show Bird";

		}
		else if(numberBird1 == 0){
			numberBird1 += 1;
			var image = document.createElement('img');
			image.src = "bird.jpg";
			image.alt = "bird";
			image.style.width = "200px";
			image.style.height = "200px";
			
			document.getElementById("third-div").appendChild(image);
			this.innerHTML = "Hide Bird";
		}

	}
	function insertBird(){
		//console.log("add bird");
		console.log(this);
		var image = document.createElement('img');
		image.src = "bird.jpg";
		image.alt = "bird";
		image.style.width = "100px";
		image.style.height = "100px";
		image.style.margin = "10px";
		document.getElementById("second-div").appendChild(image);
		numberBird += 1;
	}
	function deleteBird(){
		//console.log("delete bird");
		console.log(this);
		if(numberBird === 0){
			alert("no birds");
			return;
		}

		var secondDiv = document.getElementById("second-div");
		var children = secondDiv.childNodes;
		console.log(children);
		var image = children[children.length-1];
		secondDiv.removeChild(image);

		numberBird -= 1;



	}

	function changeDescription(){
		//console.log("change description");
		var description = document.getElementById('description');
		//console.log(description);
		description.innerHTML = "changed description";

	}


	function review(){
		console.log("hello world");

		var a = 1;
		var s = a.toString();
		var b = parseInt(s);
		var x = "fkdjf";

		console.log(a, s, b, x);

		if(a===1){
			console.log("a is 1.");
		}
		else{
			console.log("a is not 1.");
		}

		for(var i = 0; i< 10; i++){
			console.log(i);
		}
		/*
		primary: number, string
		composite: array, object
		*/

		var arr = [3, 5, 7, 2, 3];
		for(var i = 0; i < arr.length; i++){
			console.log(arr[i]);
		}
		var dic = {
			'a' : 10,
			'b' : 17,
			'c' : 22
		};
		console.log(dic['a']);
		console.log(dic.b);

		var keys = Object.keys(dic);
		for(var i = 0; i< keys.length; i++){
			var curr_key = keys[i];
			console.log(dic[curr_key]);
		}

		var array = [];
		for(var i = 0; i <=10; i ++){
			array.push(i);
		}
		var sum = 0;
		for(var i = 0; i < array.length; i++){
			if(array[i] % 2 === 0){
				sum += array[i];
			}
		}
		console.log(sum);

		var colors = ["white", "silver", "green", "yellow", "aqua"];
		var color2code = {
			'WHITE':	'#FFFFFF	RGB(255, 255, 255)',
			'SILVER':	'#C0C0C0	RGB(192, 192, 192)',
			'GRAY':		'#808080	RGB(128, 128, 128)',
			'BLACK':	'#000000	RGB(0, 0, 0)',
			'RED':		'#FF0000	RGB(255, 0, 0)',
			'MAROON':	'#800000	RGB(128, 0, 0)',
			'YELLOW':	'#FFFF00	RGB(255, 255, 0)',
			'OLIVE':	'#808000	RGB(128, 128, 0)',
			'LIME':		'#00FF00	RGB(0, 255, 0)',
			'GREEN':	'#008000	RGB(0, 128, 0)',
			'AQUA':		'#00FFFF	RGB(0, 255, 255)',
			'TEAL':		'#008080	RGB(0, 128, 128)',
			'BLUE':		'#0000FF	RGB(0, 0, 255)',
			'NAVY':		'#000080	RGB(0, 0, 128)',
			'FUCHSIA':	'#FF00FF	RGB(255, 0, 255))',
			'PURPLE':	'#800080	RGB(128, 0, 128))'
		};
		var redsum = 0;
		var greensum = 0;
		var bluesum = 0;
		var n =0;

		var keys = Object.keys(color2code);

		for(var i = 0; i < keys.length ; i++){
			// if (colors.indexOf(color2code[keys[i]]) > -1 ) {}
			var isColor = false;
			for(var j = 0; j < colors.length; j++){
				var curr_key = keys[i];
				console.log(curr_key, colors[j]);
				if(curr_key.toUpperCase() === colors[j].toUpperCase()){
					//console.log('same');
					isColor = true;
					break;
				}
			}
			if (isColor) {
				
				var red = color2code[curr_key].substring(1, 2);
				var green = curr_key.substring(3, 4);
				var blue = curr_key.substring(5, 6);
				redsum += letter2code(red);
				greensum += letter2code(green);
				bluesum += letter2code(blue);
				n += 1;
			}

		}
		console.log(redsum, greensum, bluesum, n);
		
		var redAverage = redsum / n;
		var greenAverage = greensum / n;
		var blueAverage = bluesum/n;

		console.log(redAverage, greenAverage, blueAverage);





	}

	function letter2code(letter) {
		console.log(letter);
		return parseInt(letter, 16);
	}



})();



