(function(){


	$(initialize);


	function initialize(){
		console.log("hello");
		d3.csv("movie.csv", function(data) {
			console.log(data);

		});


	}

})();




