/**
Template Name: Appzia Admin
Chartjs
*/
! function(r) {
    "use strict";
    var o = function() {};
    o.prototype.respChart = function(o, a, e, t) {
        Chart.defaults.global.defaultFontColor = "rgba(255,255,255,0.6)";
        var n = o.get(0).getContext("2d"),
            i = r(o).parent();

        function s() {
            o.attr("width", r(i).width());
            switch (a) {
                case "Line":
                    new Chart(n, {
                        type: "line",
                        data: e,
                        options: t
                    });
                    break;
                case "Doughnut":
                    new Chart(n, {
                        type: "doughnut",
                        data: e,
                        options: t
                    });
                    break;
                case "Pie":
                    new Chart(n, {
                        type: "pie",
                        data: e,
                        options: t
                    });
                    break;
                case "Bar":
                    new Chart(n, {
                        type: "bar",
                        data: e,
                        options: t
                    });
                    break;
                case "Radar":
                    new Chart(n, {
                        type: "radar",
                        data: e,
                        options: t
                    });
                    break;
                case "PolarArea":
                    new Chart(n, {
                        data: e,
                        type: "polarArea",
                        options: t
                    })
            }
        }
        r(window).resize(s), s()
    }, o.prototype.init = function() {
        this.respChart(r("#lineChart"), "Line", {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
            datasets: [{
                label: "Sales Analytics",
                fill: !1,
                lineTension: .1,
                backgroundColor: "#00a3ff",
                borderColor: "#00a3ff",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                pointBorderColor: "#00a3ff",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#00a3ff",
                pointHoverBorderColor: "#eef0f2",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [53000, 30000, 60000, 89000, 25000, 10000, 21000, 33000, 42000, 88000]
            }]
        }, {
            scales: {
                yAxes: [{
                    ticks: {
                        max: 100000,
                        min: 20,
                        stepSize: 10000
                    }
                }]
            }
        });
        this.respChart(r("#doughnut"), "Doughnut", {
            labels: ["Desktops", "Tablets", "Mobiles"],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: ["#04a2b3", "#00a3ff", "#ebeff2"],
                hoverBackgroundColor: ["#04a2b3", "#00a3ff", "#ebeff2"],
                hoverBorderColor: "#fff"
            }]
        });
        this.respChart(r("#pie"), "Pie", {
            labels: ["Desktops", "Tablets", "Mobiles"],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: ["#04a2b3", "#00a3ff", "#ebeff2"],
                hoverBackgroundColor: ["#04a2b3", "#00a3ff", "#ebeff2"],
                hoverBorderColor: "#fff"
            }]
        });
        this.respChart(r("#bar"), "Bar", {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Sales Analytics",
                backgroundColor: "#00a3ff",
                borderColor: "#00a3ff",
                borderWidth: 1,
                hoverBackgroundColor: "#00a3ff",
                hoverBorderColor: "#00a3ff",
                data: [65, 59, 81, 45, 56, 80, 50, 20]
            }]
        });
        this.respChart(r("#radar"), "Radar", {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
                label: "Desktops",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            }, {
                label: "Tablets",
                backgroundColor: "rgba(230,96,96,0.2)",
                borderColor: "#00a3ff",
                pointBackgroundColor: "#00a3ff",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#00a3ff",
                data: [28, 48, 40, 19, 96, 27, 100]
            }]
        });
        this.respChart(r("#polarArea"), "PolarArea", {
            datasets: [{
                data: [11, 16, 7, 18],
                backgroundColor: ["#f62f37", "#188ae2", "#04a2b3", "#f8ca4e"],
                label: "My dataset",
                hoverBorderColor: "#fff"
            }],
            labels: ["Series 1", "Series 2", "Series 3", "Series 4"]
        })
    }, r.ChartJs = new o, r.ChartJs.Constructor = o
}(window.jQuery),
function(r) {
    "use strict";
    window.jQuery.ChartJs.init()
}();