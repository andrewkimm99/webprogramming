(function(){
	


	$(initialize);
	var _data = [];
	var margin = {top: 40, right: 40, bottom: 60, left: 80};
	var genreList = [];
	

	function initialize(){
		show_graph();

		d3.csv("movie.csv", function(data) {

			for(var i = 0; i < data.length; i++){
				_data.push(data[i]);
			}
			//console.log(_data);
			draw_bar();
			draw_scatter("linear");
			draw_scatter("log");
			draw_pie();

			var cdbutton = document.getElementById("graphs");
			cdbutton.onchange = show_graph;
			cdbutton = document.getElementById("scatter-graphs");
			cdbutton.onchange = show_scatter;


			
		});
		

	}

	function show_graph(){
		if(document.getElementById("graphs").value === "bar"){
			document.getElementById("bar-graph-container").style.display = "block";
			document.getElementById("scatter-plot-container").style.display = "none";
			document.getElementById("pie-chart-container").style.display = "none";
			document.getElementById("scatter-graphs").style.display = "none";
		}
		else if(document.getElementById("graphs").value === "scatter"){
			document.getElementById("bar-graph-container").style.display = "none";
			document.getElementById("scatter-plot-container").style.display = "block";
			document.getElementById("pie-chart-container").style.display = "none";
			document.getElementById("scatter-graphs").style.display = "block";
			show_scatter();
		}
		else{
			document.getElementById("bar-graph-container").style.display = "none";
			document.getElementById("scatter-plot-container").style.display = "none";
			document.getElementById("pie-chart-container").style.display = "block";
			document.getElementById("scatter-graphs").style.display = "none";
		}

	}
	function show_scatter(){
		if(document.getElementById("scatter-graphs").value === "linear"){
			document.getElementById("linear-plot-svg").style.display = "block";
			document.getElementById("log-plot-svg").style.display = "none";
		}
		else{
			document.getElementById("linear-plot-svg").style.display = "none";
			document.getElementById("log-plot-svg").style.display = "block";
		}
	}
	function draw_bar(){
		var genre2data = [];
		
		var genreProfit_us = [];
		var genreProfit_all = [];
		
		for(var i = 0; i < _data.length; i ++){
			if($.inArray(_data[i].genre, genreList) === -1){
				genreList.push(_data[i].genre);
			}
		}

		for(var i = 0; i < genreList.length; i++){
			genreProfit_us.push(0);
			genreProfit_all.push(0);
		}



		for(var i = 0; i < _data.length; i ++){
			for(var j = 0; j < genreList.length; j ++){
				if(genreList[j] ===  _data[i].genre){
					genreProfit_us[j] += parseInt(_data[i].profit_us);
					genreProfit_all[j] += parseInt(_data[i].profit_all);
				}
			}
		}
		for (var i = 0; i < genreList.length; i++){
			var temp = {"genre" : genreList[i], "profit_us" : genreProfit_us[i], "profit_other" : genreProfit_all[i] - genreProfit_us[i]};
			genre2data.push(temp);
		}
		//console.log(genre2data);

		var svg = d3.select("#bar-graph-svg");
		var width = +svg.attr("width") - margin.left - margin.right;
		var height = +svg.attr("height") - margin.top - margin.bottom;



		var g = svg.append('g');
		g.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		var x = d3.scaleBand()
			.rangeRound([0, width])
			.paddingInner(0.5);

		var y = d3.scaleLinear()
			.rangeRound([height, 0]);

		var z = d3.scaleOrdinal()
			.range(['#1a9850', "#a6d96a"]);

		x.domain(genreList);
		var profit = function(d){
			return (d["profit_us"] + d["profit_other"]) * 1.2;
		}
		var profitMax = d3.max(genre2data, profit);

		y.domain([0, profitMax]).nice();
		z.domain("profit_us", "profit_other");

		//console.log(d3.stack().keys(['profit_other', 'profit_us'])(genre2data));

		g.append("g")
			.selectAll("#bar-graph-svg")
			.data(d3.stack().keys(['profit_us', 'profit_other'])(genre2data))
			.enter().append("g")
				.attr("fill", function(d){return z(d.key); })
			.selectAll("rect")
			.data(function(d){return d;})
			.enter().append("rect")
				.attr("x", function(d){
					//console.log(d.data);
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
			.call(d3.axisLeft(y).ticks(null, "s"));
		
		svg.append("text")
				.text("Bar Graph")
				.attr("x", width/10*7)
				.attr("y", margin.top)
				.style("font-size", "30pt")
				.attr("text-anchor", "middle");

		var legend = g.append("g")
			.attr('font-family', 'sans-serif')
			.attr('font-size', 10)
			.attr('text-anchor', 'end')
			.selectAll("g")
			.data(["Profit in the United States", "Profit in other countries"])
			.enter().append("g")
				.attr("transform", function(d, i){return "translate(0," + i * 20 + ")";});

		legend.append("rect")
			.attr("x", width - 19)
			.attr("width", 19)
			.attr("height", 19)
			.attr("fill", z);

		legend.append("text")
			.attr("x", width - 24)
			.attr("y", 9.5)
			.attr("dy", "0.32em")
			.text(function(d){return d;});



	}
	function draw_scatter(scale){
		
		var data = _data;
		var color = ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33"];
		var svg = d3.select("#" + scale + "-plot-svg");
		var width = +svg.attr("width") - margin.left - margin.right;
		var height = +svg.attr("height") - margin.top - margin.bottom;

		var g = svg.append("g");
		g.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		var x;
		var domainStart;

		if(scale === "linear"){
			x = d3.scaleLinear()
				.rangeRound([0, width]);
			domainStart = 0;
		}
		else{
			x = d3.scaleLog()
				.base(10)
				.rangeRound([0, width]);
			domainStart = 1;
		}



		var y = d3.scaleLinear()
				.rangeRound([height, 0]);

		var z = d3.scaleOrdinal()
				.range(color);

		var profit = function(d){
			return parseInt(d["profit_all"]);
		};
		var score = function(d){
			return parseInt(d["rt_score"]);
		};

		var profitMax = d3.max(data, profit);

		var maxScore = d3.max(data, score);
		
		x.domain([domainStart, profitMax]).nice();
		y.domain([0, maxScore]);
		z.domain(genreList);

		var tooltip = d3.select("#main-container").append("div")
			.attr("class", "tooltip")
			.style('opacity', 0);

		var movieNumber;

		g.selectAll(".circle")
			.data(data)
			.enter().append("circle")
				.attr("class", "circle")
				.attr("r", 5)
				.attr("cx", function(d){return x(d['profit_all']);})
				.attr("cy", function(d){return height - y(d["rt_score"]);})
				.style("fill", function(d){return z(d.genre)})
				.on("click", function(d, i){
					if(i !== movieNumber){
						var desc = d.title;
						tooltip.style("opacity", 0.9);
						tooltip.html(desc)
							.style("left", (d3.event.pageX) + "px")
							.style("top",(d3.event.pageY - 25) + "px")
						movieNumber = i;
					}
					else{
						tooltip.style("opacity", 0);
						movieNumber = -1;
					}

					
				});
				//.on("mouseover", function(d){console.log(d.title);});

		g.append("g")
				.attr("class", "axis axis-x")
				.attr("transform", "translate(0," +height + ")")
				.call(d3.axisBottom(x));

		g.append("g")
				.attr("class", "axis axis-y")
				.call(d3.axisLeft(y).ticks(null, "s"));

		svg.append("text")
				.text("Scatter Graph")
				.attr("x", width/10*7)
				.attr("y", margin.top)
				.style("font-size", "30pt")
				.attr("text-anchor", "middle");


		var legend = g.append("g")
			.attr('font-family', 'sans-serif')
			.attr('font-size', 10)
			.attr('text-anchor', 'end')
			.selectAll("g")
			.data(genreList)
			.enter().append("g")
				.attr("transform", function(d, i){return "translate(0," + i * 20 + ")";});

		legend.append("rect")
			.attr("x", width - 19)
			.attr("y", height/3)
			.attr("width", 19)
			.attr("height", 19)
			.attr("fill", z);

		legend.append("text")
			.attr("x", width - 24)
			.attr("y", height/3 + 9.5)
			.attr("dy", "0.32em")
			.text(function(d){return d;});


	}

	function draw_pie(){
		var data = [0,0,0,0,0];
		for(var i = 0; i < _data.length; i++){
			var temp = Math.floor(_data[i].rt_score / 20);
			if(temp === 5){
				temp = 4;
			}
			data[temp] += 1;
		}
		var svg = d3.select("#pie-chart-svg");
		var width = svg.attr("width"),
			height = svg.attr("height") - margin.top,
			radius = height/2;

		var g = svg.append("g");
		g.attr("transform", "translate(" + width/2 + "," + (margin.top + height/2) + ")");

		var color = ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3"];
		var z = d3.scaleOrdinal(color);
		z.domain([0,1,2,3,4]);

		var pie = d3.pie()
			.sort(null);

		var path = d3.arc()
			.innerRadius(0)
			.outerRadius(radius - 10);

		var label = d3.arc()
			.innerRadius(radius - 40)
			.outerRadius(radius - 40);

		var arc = g.selectAll(".arc")
			.data(pie(data))
			.enter().append("g")
				.attr("class", "arc");
		//var arc = g.selectAll()

		arc.append("path")
			.attr("d", path)
			.attr("fill", function(d, i){return z(i);});

		arc.append("text")
			.attr("transform", function(d){return "translate(" + label.centroid(d) + ")";})
			.attr("dy", "0.35em")
			.text(function(d, i){
				var first = i * 2;
				var second = first + 2;
				return first + "~" + second;
			});

		svg.append("text")
				.text("Pie Graph")
				.attr("x", width/2)
				.attr("y", margin.top)
				.style("font-size", "30pt")
				.attr("text-anchor", "middle");

	}

})();


