//Plotly
d3.csv("../static/data/ny.csv").then(function (Data) {
    console.log(Data);

    // let select = document.querySelector('#chartType');

    // select.addEventListener('change', showHide);

    // function showHide() {
    //     // concat Chart for the canvas ID
    //     let chart = select.options[select.selectedIndex].value + 'Chart';
    //     document.querySelectorAll('canvas')
    //         .forEach(c => { c.style.display = (c.id === chart) ? 'inherit' : 'none'; })
    // }

    var date = Data.map(function (d) {
        return d.date;
    });

    var inventory = Data.map(function (d) {
        return d.inventory;
    });

    var ses_inventory = Data.map(function (d) {
        return d.ses_inventory;
    });

    var fcst_inventory = Data.map(function (d) {
        return d.fcst_inventory;
    });


    var price = Data.map(function (d) {
        return d.price;
    });

    var ses_price = Data.map(function (d) {
        return d.ses_price;
    });

    var fcst_price = Data.map(function (d) {
        return d.fcst_price;
    });

    var trace1 = {
        x: date,
        y: inventory,
        mode: 'lines',
        name: 'Actual',
        line: {
            dash: 'solid',
            width: 4
        }
    };

    var trace2 = {
        x: date,
        y: ses_inventory,
        mode: 'lines',
        name: 'SES Model',
        line: {
            dash: 'dashdot',
            width: 4
        }
    };

    var trace3 = {
        x: date,
        y: fcst_inventory,
        mode: 'lines',
        name: 'SES Forecast',
        line: {
            dash: 'dot',
            width: 4
        }
    };

    var trace4 = {
        x: date,
        y: price,
        mode: 'lines',
        name: 'Actual',
        line: {
            dash: 'solid',
            width: 4
        }
    };

    var trace5 = {
        x: date,
        y: ses_price,
        mode: 'lines',
        name: 'SES Model',
        line: {
            dash: 'dashdot',
            width: 4
        }
    };

    var trace6 = {
        x: date,
        y: fcst_price,
        mode: 'lines',
        name: 'SES Forecast',
        line: {
            dash: 'dot',
            width: 4
        }
    };

    var data_x = [trace1, trace2, trace3];
    var data_y = [trace4, trace5, trace6];
    var layout_x = {
        title: '<b>For-Sale Inventory</b>',
        "titlefont": {
            "size": 23.5
          },
        xaxis: {
            range: ["2017-10-01", "2021-02-28"],
        },
        yaxis: {
            autorange: true
        },
        legend: {
            y: 0.5,
            traceorder: 'reversed',
            font: {
                size: 16
            }
        }
    };

    var layout_y = {
        title: '<b>Median Sale Price</b>',
        "titlefont": {
            "size": 23.5
          },
        xaxis: {
            range: ["2010-10-01", "2021-06-30"],
        },
        yaxis: {
            autorange: true
        },
        legend: {
            y: 0.5,
            traceorder: 'reversed',
            font: {
                size: 16
            }
        }
    };

    Plotly.newPlot("inventory-ny", data_x, layout_x);
    Plotly.newPlot("price-ny", data_y, layout_y);
}); 
