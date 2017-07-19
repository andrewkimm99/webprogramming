(function(){

	var name1empty = false;
	var name2empty = false;

	$(initialize);

	
		var cdbutton = document.getElementById('submit');
		cdbutton.onclick = changeDescription1;
		cdbutton = document.getElementById('click');
		cdbutton.onclick = changeDescription2;
	}


	function changeDescription1(){
		var firstname = document.getElementById("firstname").value;
		var lastname = document.getElementById("lastname").value;
		if(firstname.length === 0 || lastname.length === 0){
			name1empty = true;
		}
		else{
			name1empty = false;
		}
		if(name1empty){
			var description = document.getElementById('nameResult');
			description.innerHTML = "You didn't write your name. Please write your name and try again.";
		}
		else{
			var description = document.getElementById('nameResult');
			var firstname = document.getElementById("firstname").value;
			var lastname = document.getElementById("lastname").value;
			description.innerHTML = "Hello, " + firstname + " " + lastname + "!";
		}
	}
	function changeDescription2(){
		var name = document.getElementById("name").value;
		if(name.length === 0){
			name2empty = true;
		}
		else{
			name2empty = false;
		}
		if(name2empty){
			var description = document.getElementById('descriptionresult');
			description.innerHTML = "You didn't write your name. Please write your name and try again.";
		}
		else{
			var description = document.getElementById('descriptionresult');
			var gender = document.getElementById("genders").gender.value;

	



			var selects = document.getElementById("cars");
  			var selectedText = selects.options[selects.selectedIndex].text;

			description.innerHTML ="Hello," + " " + name + "! Please confirm if your information is correct! <br> " + name  + gender + " prefers " + selectedText + ".";
		}
	}

})();