(function(){
	


	$(initialize);
	var _data = [];
	var margin = {top: 40, right: 40, bottom: 60, left: 80};

	function initialize(){

		d3.csv("movie.csv", function(data) {

			for(var i = 0; i < data.length; i++){
				_data.push(data[i]);
			}
			//console.log(_data);
			draw_bar();
			draw_scatter();
			draw_pie();


			
		});
		

	}
	function draw_bar(){
		var genre2data = [];
		var genreList = [];
		for(var i = 0; i < _data.length; i ++){
			if($.inArray(_data[i].genre, genreList) === -1){
				genreList.push(_data[i].genre);
			}
		}

		genre2data = [
			{"genre": "드라마", "profit_us": 20, "profit_other": 30},
			{"genre": "액션", "profit_us": 40, "profit_other": 50},
			{"genre": "스릴", "profit_us": 30, "profit_other": 100}
		];
		var svg = d3.select("#bar-graph-svg");
		var width = +svg.attr("width") - margin.left - margin.right;
		var height = +svg.attr("height") - margin.top - margin.bottom;



		var g = svg.append('g');
		g.attr("transform", "translate(" + margin.left + "," + margin.right + ")");

		var x = d3.scaleBand()
			.rangeRound([0, width])
			.paddingInner(0.5);

		var y = d3.scaleLinear()
			.rangeRound([height, 0]);

		var z = d3.scaleOrdinal()
			.range(['#1a9850', "#a6d96a"]);

		x.domain(["드라마", "액션", "스릴"]);
		y.domain([0, 150]);
		z.domain("profit_us", "profit_other");

		console.log(d3.stack().keys(['profit_other', 'profit_us'])(genre2data));

		g.append("g")
			.selectAll("#bar-graph-svg")
			.data(d3.stack().keys(['profit_us', 'profit_other'])(genre2data))
			.enter().append("g")
				.attr("fill", function(d){return z(d.key); })
			.selectAll("rect")
			.data(function(d){return d;})
			.enter().append("rect")
				.attr("x", function(d){
					console.log(d.data);
					return x(d.data.genre)})
				.attr("y",  function(d){return y(d[1]);})
				.attr("height", function(d){
					return y(d[0]) - y(d[1]);
				})
				.attr("width", x.bandwidth());

		g.append("g")
			.attr("class", "axis axis-x")
			.attr("transform", "translate(0," +height + ")")
			.call(d3.axisBottom(x));

		g.append("g")
			.attr("class", "axis axis-y")
			.call(d3.axisLeft(y).ticks(10, "%"));

		var legend = g.append("g")
			.attr("class", "legend")
			.attr('transform', 'translate(50, 30)')
   		 	.style('font-size', '12px')
    		.call(d3.legend);


	}
	function draw_scatter(){
		var data = _data;
		console.log(data);

	}
	function draw_pie(){
		var data = [];
		var count1 = 0;
		var count2 = 0;
		var count3 = 0;
		var count4 = 0;
		var count5 = 0;
		for(var i = 0; i < _data.length; i++){
			if (_data[i].rt_score < 20){
				count1 = count1 + 1;
			}
			else if(_data[i].rtscore < 40){
				count2 = count2 + 1;
			}
			else if(_data[i].rtscore < 60){
				count3 = count3 + 1;
			}
			else if(_data[i].rtscore < 80){
				count4 = count4 + 1;
			}
			else{
				count5 = count5 + 1;
			}
		}
		data.push(count1);
		data.push(count2);
		data.push(count3);
		data.push(count4);
		data.push(count5);
		console.log(data);
	}

})();


