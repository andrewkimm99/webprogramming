(function(){


	$(initialize);
	var _data;

	function initialize(){
		var svg = d3.select("svg"),
			margin = {top: 40, right: 20, bottom : 30, left : 40},
			width = +svg.attr("width") - margin.left - margin.right,
			height = +svg.attr("height") - margin.top - margin.bottom;

		console.log(width, height);

		var g = svg.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
		


		d3.csv("data.csv", function(data) {
			console.log(data);
			var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
				y = d3.scaleLinear().rangeRound([height, 0]);
			var letters = [];
			for(var i = 0; i < data.length; i++){
				letters.push(data[i].letter);
			}
			console.log(letters);
			//var letters = data.map(function(d){return d['letter'];});
			x.domain(letters);
			var getFreq = function(d){
				return d['frequency'];
			};
			y.domain([0, d3.max(data, getFreq)]);
			console.log(d3.max(data, function(d){return d['frequency']; }));

			console.log(x.bandwidth());
			g.selectAll(".bar")
				.data(data)
				.enter().append("rect")
					.attr("class", "bar")
					.attr("x", function(d){return x(d.letter);})
					.attr("y", function(d){return y(d.frequency);})
					.attr("width", x.bandwidth())
					.attr("height", function(d){return height - y(d.frequency);});
			/*
			g.append("g")
				.attr("class", "axis axis-x")
				.attr("transform", "translate(0," +height + ")")
				.call(d3.axisBottom(x));
				
			*/

			g.append("g")
				.attr("class", "axis axis-y")
				.call(d3.axisLeft(y).ticks(10, "%"));

			svg.append("text")
				.text("Alphabet Frequency")
				.attr("x", width/9*5)
				.attr("y", margin.top)
				.style("font-size", "30pt")
				.attr("text-anchor", "middle");

		});



	}

})();




