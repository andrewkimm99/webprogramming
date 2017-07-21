var color_dict = {
	'seq': [
		  ['#edf8fb', '#b2e2e2', '#66c2a4', '#2ca25f','#006d2c'],
		  ['#fef0d9','#fdcc8a','#fc8d59', '#e34a33','#b30000'],
		  [ '#f1eef6','#bdc9e1','#74a9cf','#2b8cbe','#045a8d']
	],
	'div': [
			['#a6611a','#dfc27d','#f5f5f5','#80cdc1','#018571'],
			['#d01c8b','#f1b6da','#f7f7f7','#b8e186','#4dac26'],
			['#ca0020','#f4a582','#ffffff','#bababa','#404040']
	],
	'qual':[ 
			['#7fc97f','#beaed4','#fdc086','#ffff99','#386cb0'],
			['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00'],
			['#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3']
	]
};

var extended_colors = {
	'seq':[ 
			['#edf8fb','#ccece6','#99d8c9','#66c2a4','#41ae76','#238b45','#005824'],
			['#fef0d9','#fdd49e','#fdbb84','#fc8d59','#ef6548','#d7301f','#990000'],
			['#f1eef6','#d0d1e6','#a6bddb','#74a9cf','#3690c0','#0570b0','#034e7b']
	],
	'div':[
			['#8c510a','#d8b365','#f6e8c3','#f5f5f5','#c7eae5','#5ab4ac','#01665e'],
			['#c51b7d','#e9a3c9','#fde0ef','#f7f7f7','#e6f5d0','#a1d76a','#4d9221'],
			['#b2182b','#ef8a62','#fddbc7','#ffffff','#e0e0e0','#999999','#4d4d4d']
	],
	'qual':[
			['#7fc97f','#beaed4','#fdc086','#ffff99','#386cb0','#f0027f','#bf5b17'],
			['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628'],
			['#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69']
	]
};

/*

		if(document.getElementById("d1").checked){
		  document.getElementById("r1c1").style.backgroundColor = '#edf8fb';
		  document.getElementById("r1c2").style.backgroundColor = '#b2e2e2';
		  document.getElementById("r1c3").style.backgroundColor = '#66c2a4';
		  document.getElementById("r1c4").style.backgroundColor = '#2ca25f';
		  document.getElementById("r1c5").style.backgroundColor = '#006d2c';

		  document.getElementById("r2c1").style.backgroundColor = '#fef0d9';
		  document.getElementById("r2c2").style.backgroundColor = '#fdcc8a';
		  document.getElementById("r2c3").style.backgroundColor = '#fc8d59';
		  document.getElementById("r2c4").style.backgroundColor = '#e34a33';
		  document.getElementById("r2c5").style.backgroundColor = '#b30000';

		  document.getElementById("r3c1").style.backgroundColor = '#f1eef6';
		  document.getElementById("r3c2").style.backgroundColor = '#bdc9e1';
		  document.getElementById("r3c3").style.backgroundColor = '#74a9cf';
		  document.getElementById("r3c4").style.backgroundColor = '#2b8cbe';
		  document.getElementById("r3c5").style.backgroundColor = '#045a8d';
		 	
			var columnOne = document.getElementById("firstColumn");
			columnOne.onclick = myAlert1;
		};
		else if(document.getElementById('d2').checked) {
		  document.getElementById("r1c1").style.backgroundColor = '#a6611a';
		  document.getElementById("r1c2").style.backgroundColor = '#dfc27d';
		  document.getElementById("r1c3").style.backgroundColor = '#f5f5f5';
		  document.getElementById("r1c4").style.backgroundColor = '#80cdc1';
		  document.getElementById("r1c5").style.backgroundColor = '#018571';

		  document.getElementById("r2c1").style.backgroundColor = '#d01c8b';
		  document.getElementById("r2c2").style.backgroundColor = '#f1b6da';
		  document.getElementById("r2c3").style.backgroundColor = '#f7f7f7';
		  document.getElementById("r2c4").style.backgroundColor = '#b8e186';
		  document.getElementById("r2c5").style.backgroundColor = '#4dac26';

		  document.getElementById("r3c1").style.backgroundColor = '#ca0020';
		  document.getElementById("r3c2").style.backgroundColor = '#f4a582';
		  document.getElementById("r3c3").style.backgroundColor = '#ffffff';
		  document.getElementById("r3c4").style.backgroundColor = '#bababa';
		  document.getElementById("r3c5").style.backgroundColor = '#404040';
		  
			var columnOne = document.getElementById("firstColumn");
			columnOne.onclick = myAlert2;
		};
		else{
		  document.getElementById("r1c1").style.backgroundColor = '#7fc97f';
		  document.getElementById("r1c2").style.backgroundColor = '#beaed4';
		  document.getElementById("r1c3").style.backgroundColor = '#fdc086';
		  document.getElementById("r1c4").style.backgroundColor = '#ffff99';
		  document.getElementById("r1c5").style.backgroundColor = '#386cb0';

		  document.getElementById("r2c1").style.backgroundColor = '#e41a1c';
		  document.getElementById("r2c2").style.backgroundColor = '#377eb8';
		  document.getElementById("r2c3").style.backgroundColor = '#4daf4a';
		  document.getElementById("r2c4").style.backgroundColor = '#984ea3';
		  document.getElementById("r2c5").style.backgroundColor = '#ff7f00';

		  document.getElementById("r3c1").style.backgroundColor = '#8dd3c7';
		  document.getElementById("r3c2").style.backgroundColor = '#ffffb3';
		  document.getElementById("r3c3").style.backgroundColor = '#bebada';
		  document.getElementById("r3c4").style.backgroundColor = '#fb8072';
		  document.getElementById("r3c5").style.backgroundColor = '#80b1d3';
		};

*/

