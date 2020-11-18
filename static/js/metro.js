//reference: https://www.chartjs.org/docs/latest/

function makeChart(data) {
	//define variables and push data from each column 
	//use + to convert strings to numbers 
	var metro = data.map(function (d){
		return d.metro; 
    }); 
    
    var population = data.map(function (d){
		return +d.population; 
	}); 

    var myChart = new Chart('plot-metro', {
        type: 'horizontalBar',
        data: {
          labels: metro,
          datasets: [{
            backgroundColor: "#1974D2",
            				data: population,
            				label: 'Population (in 1,000s)',
  

          }]
        },
        options: {
          scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
}

// Request data using D3
d3.csv("../static/data/metro.csv")
	.then(makeChart);