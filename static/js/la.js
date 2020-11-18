// Default plot
function init() {
    d3.csv("../static/data/la.csv").then(function (Data) {
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
        var data_x = [trace1, trace2, trace3];
        var CHART = d3.selectAll("#plot").node();

        Plotly.newPlot(CHART, data_x, layout_x);
    });
}

d3.selectAll("body").on("change", updatePlotly);

//Dropdown Menu Updated Plot
function updatePlotly() {
    d3.csv("../static/data/la.csv").then(function (Data) {
        var dropdownMenu = d3.select("#selDataset");
        var dataset = dropdownMenu.node().value;
        var CHART = d3.selectAll("#plot").node();
        var data_x = [];

        switch (dataset) {
            case "dataset1":
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
                data_x = [trace1, trace2, trace3];

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
                Plotly.newPlot(CHART, data_x, layout_x);

                break;

            case "dataset2":
                var date = Data.map(function (d) {
                    return d.date;
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

                data_x = [trace4, trace5, trace6];
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
                Plotly.newPlot(CHART, data_x, layout_y);
                break;
        }

    });

}

init();