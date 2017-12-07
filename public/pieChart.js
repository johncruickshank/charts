var PieChart = function(container, title, series, data) {
    var chart = new Highcharts.Chart({
        chart: {
            type: "pie",
            renderTo: container
        },
        title: {
            text: title
        },
        series: [{
            name: series,
            data: data
        }]
    });

};
