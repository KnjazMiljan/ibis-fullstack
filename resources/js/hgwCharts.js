import moment from "moment";

$(document).ready(function () {

    $('#hgwInfoButtonTables').on('click', function (){
        if($(this).hasClass('background-darker')) {
            $(this).removeClass('background-darker')
            $(this).removeClass('text-white')
            $(this).addClass('text-default')

            $('#carretUp').hide();
            $('#carretDown').show();
        } else {
            $(this).addClass('background-darker')
            $(this).removeClass('text-default')
            $(this).addClass('text-white')
            $('#carretDown').hide();
            $('#carretUp').show();
        }
    });

    Chart.pluginService.register({
        beforeDraw: function (chart) {
            if (chart.config.options.elements.center) {
                //Get ctx from string
                var ctx = chart.chart.ctx;

                //Get options from the center object in options
                var centerConfig = chart.config.options.elements.center;
                var fontStyle = centerConfig.fontStyle || 'Arial';
                var txt = centerConfig.text;
                var color = centerConfig.color || '#000';
                var sidePadding = centerConfig.sidePadding || 20;
                var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
                //Start with a base font of 30px
                ctx.font = "30px " + fontStyle;

                //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
                var stringWidth = ctx.measureText(txt).width;
                var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

                // Find out how much the font can grow in width.
                var widthRatio = elementWidth / stringWidth;
                var newFontSize = Math.floor(30 * widthRatio);
                var elementHeight = (chart.innerRadius * 2);

                // Pick a new font size so it will not be larger than the height of label.
                var fontSizeToUse = Math.min(newFontSize, elementHeight);

                //Set font settings to draw it correctly.
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
                var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
                ctx.font = fontSizeToUse+"px " + fontStyle;
                ctx.fillStyle = color;

                //Draw text in center
                ctx.fillText(txt, centerX, centerY);
            }
        }
    });

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let hgwInterferenceContext = $('#hgwInterference');
    const hgwInterference = new Chart(hgwInterferenceContext, {
        type: 'bar',
        data: {
            labels: [
                'Channel 1',
                'Channel 2',
                'Channel 3',
                'Channel 4',
                'Channel 5',
                'Channel 6',
                'Channel 7',
                'Channel 8',
                'Channel 9',
                'Channel 10',
                'Channel 11',
                'Channel 12',
                'Channel 13'
            ],
            datasets: [
                {
                    label: 'A',
                    data: [
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200)
                    ],
                    backgroundColor: [
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)'
                    ],
                    borderColor: [
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)',
                        'rgba(142, 248, 255, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'B',
                    data: [
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200)
                    ],
                    backgroundColor: [
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)'
                    ],
                    borderColor: [
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)',
                        'rgba(0, 136, 188, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'C',
                    data: [
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200)
                    ],
                    backgroundColor: [
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)'
                    ],
                    borderColor: [
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)',
                        'rgba(0, 103, 153, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'D',
                    data: [
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200),
                        randomIntFromInterval(0, 200)
                    ],
                    backgroundColor: [
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)'
                    ],
                    borderColor: [
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)',
                        'rgba(0, 194, 226, 1)'
                    ],
                    borderWidth: 1
                },

            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 200
                    }
                }],
                xAxes: [{

                }]
            },
            legend: {
                position: 'bottom'
            },
            elements: {

                pointStyle: 'rectRounded'
            }
        }
    });

    function updateHgwInterferenceChart(hgwInterference = null) {
        for (let i = hgwInterference.data.datasets.length - 1; i >= 0; i--) {
            hgwInterference.data.datasets[i].data = hgwInterference.data.datasets[i].data.reverse();
            hgwInterference.update();
//Remove timeout and reverse, just update with ajax fetched data
            setTimeout(() => {
                hgwInterference.data.datasets[i].data = hgwInterference.data.datasets[i].data.reverse();
                hgwInterference.update();
            }, 2000);
        }
    }

    //implementation
    updateHgwInterferenceChart(hgwInterference);

    function newDate(days)
    {
        return moment().add(days, 'd');
    }

    let hgwStatusContext = $('#hgwStatus');
    const hgwStatus = new Chart(hgwStatusContext, {
        type: 'line',
        // data: {
        //     labels: [
        //         moment(newDate(-7)).format('DD/MM/YYYY'),
        //         moment(newDate(-6)).format('DD/MM/YYYY'),
        //         moment(newDate(-5)).format('DD/MM/YYYY'),
        //         moment(newDate(-4)).format('DD/MM/YYYY'),
        //         moment(newDate(-3)).format('DD/MM/YYYY'),
        //         moment(newDate(-2)).format('DD/MM/YYYY'),
        //         moment(newDate(-1)).format('DD/MM/YYYY'),
        //         moment(newDate(-0)).format('DD/MM/YYYY'),
        //         moment(newDate(-0)).format('DD/MM/YYYY'),
        //         moment(newDate(-0)).format('DD/MM/YYYY'),
        //         moment(newDate(-0)).format('DD/MM/YYYY'),
        //         moment(newDate(-0)).format('DD/MM/YYYY')
        //     ],
        //     datasets: [
        //         {
        //             label: 'A',
        //             data: [
        //                 randomIntFromInterval(0, 200),
        //                 randomIntFromInterval(0, 200),
        //                 randomIntFromInterval(0, 200),
        //                 randomIntFromInterval(0, 200),
        //                 randomIntFromInterval(0, 200),
        //                 randomIntFromInterval(0, 200),
        //                 randomIntFromInterval(0, 200),
        //             ],
        //             backgroundColor: [
        //                 'rgba(142, 248, 255, 1)',
        //                 'rgba(142, 248, 255, 1)',
        //                 'rgba(142, 248, 255, 1)',
        //                 'rgba(142, 248, 255, 1)',
        //                 'rgba(142, 248, 255, 1)',
        //                 'rgba(142, 248, 255, 1)',
        //                 'rgba(142, 248, 255, 1)'
        //             ],
        //             borderColor: [
        //                 'rgba(142, 248, 255, 1)',
        //                 'rgba(142, 248, 255, 1)',
        //                 'rgba(142, 248, 255, 1)',
        //                 'rgba(142, 248, 255, 1)',
        //                 'rgba(142, 248, 255, 1)',
        //                 'rgba(142, 248, 255, 1)'
        //             ],
        //             borderWidth: 1
        //         },
        //         {
        //             label: 'B',
        //             data: [
        //                 randomIntFromInterval(0, 200),
        //                 randomIntFromInterval(0, 200),
        //                 randomIntFromInterval(0, 200),
        //                 randomIntFromInterval(0, 200),
        //                 randomIntFromInterval(0, 200),
        //                 randomIntFromInterval(0, 200),
        //                 randomIntFromInterval(0, 200),
        //             ],
        //             backgroundColor: [
        //                 'rgba(0, 136, 188, 1)',
        //                 'rgba(0, 136, 188, 1)',
        //                 'rgba(0, 136, 188, 1)',
        //                 'rgba(0, 136, 188, 1)',
        //                 'rgba(0, 136, 188, 1)',
        //                 'rgba(0, 136, 188, 1)'
        //             ],
        //             borderColor: [
        //                 'rgba(0, 136, 188, 1)',
        //                 'rgba(0, 136, 188, 1)',
        //                 'rgba(0, 136, 188, 1)',
        //                 'rgba(0, 136, 188, 1)',
        //                 'rgba(0, 136, 188, 1)',
        //                 'rgba(0, 136, 188, 1)'
        //             ],
        //             borderWidth: 1
        //         },
        //     ]
        // },
        // options: {
        //     scales: {
        //         yAxes: [{
        //             ticks: {
        //                 beginAtZero: true,
        //                 max: 200
        //             }
        //         }]
        //     },
        //     legend: {
        //         position: 'bottom'
        //     },
        // }
        data: {
            datasets: [
                {
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                    borderColor: "rgb(255, 99, 132)",
                    data:[
                        {
                            x: "2020-01-30T21:45:00+01:00",
                            y: randomIntFromInterval(0, 200)
                        },
                        {
                            x: "2020-01-30T21:45:00+01:00",
                            y: randomIntFromInterval(0, 200)
                        },
                        {
                            x: "2020-01-30T21:45:00+01:00",
                            y: randomIntFromInterval(0, 200)
                        },
                        {
                            x: "2020-01-30T21:45:00+01:00",
                            y: randomIntFromInterval(0, 200)
                        }
                    ],

                    fill: true,
                    label: "Data Transferred"
                },
                {
                    backgroundColor: "rgba(54, 162, 235, 0.5)",
                    borderColor: "rgb(54, 162, 235)",
                    data: [
                        {
                            x: "2020-01-30T21:45:00+01:00",
                            y: randomIntFromInterval(0, 200)
                        },
                        {
                            x: "2020-01-30T21:45:00+01:00",
                            y: randomIntFromInterval(0, 200)
                        },
                        {
                            x: "2020-01-30T21:45:00+01:00",
                            y: randomIntFromInterval(0, 200)
                        },
                        {
                            x: "2020-01-30T21:45:00+01:00",
                            y: randomIntFromInterval(0, 200)
                        }
                    ],
                    fill: false,
                    label: "Total No. of Unifi clients"
                },

                ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 200
                    }
                }],
                xAxes: [{

                }]
            },
            legend: {
                position: 'bottom'
            },
            elements: {
                pointStyle: 'rectRounded'
            }
        }
    });

    let wifiConnectedTimeDoughnutContext = $('#wifiConnectedTimeDoughnut');
    const wifiConnectedTimeDoughnut = new Chart(wifiConnectedTimeDoughnutContext, {
        type: 'doughnut',
        data: {
            labels: ["Connected", "Not connected"],
            datasets: [
                {
                    label: "Percent of time with connected user(s)",
                    backgroundColor: ["#20fc8f"],
                    data: [48, 52]
                }
            ]
        },
        options: {
            legend: {
                position: 'left',
                // display: false
            },

            legendCallback: function(chart) {
                var text = [];
                text.push('<ul class="' + chart.id + '-legend">');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
                    if (chart.data.datasets[i].label) {
                        text.push(chart.data.datasets[i].label);
                    }
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join('');
            },

            elements: {
                center: {
                    text: '48%',
                    color: '#20fc8f', // Default is #000000
                    fontStyle: 'Arial', // Default is Arial
                    sidePadding: 20 // Defualt is 20 (as a percentage)
                }
            }
        }
    });

    let commonConfig = {
        type: 'doughnut',
        data: {
            labels: ["Low", "Medium", "High"],
            datasets: [
                {
                    label: "Percent of time with connected user(s)",
                    backgroundColor: ["#20fc8f", "#ff5b58", "#ffa100"],
                    data: [46, 46, 46]
                }
            ]
        },
        options: {
            legend: {
                position: 'left',
                // display: false
            },

            legendCallback: function(chart) {
                var text = [];
                text.push('<ul class="' + chart.id + '-legend">');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
                    if (chart.data.datasets[i].label) {
                        text.push(chart.data.datasets[i].label);
                    }
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join('');
            },

            elements: {
                center: {
                    text: '46%',
                    color: '#20fc8f', // Default is #000000
                    fontStyle: 'Arial', // Default is Arial
                    sidePadding: 20 // Defualt is 20 (as a percentage)
                }
            }
        }
    };

    let hgwWifiUsageDoughnutContext = $('#hgwWifiUsageDoughnut');
    const hgwWifiUsageDoughnut = new Chart(hgwWifiUsageDoughnutContext, commonConfig);

    let hgwInterferenceDoughnutContext = $('#hgwInterferenceDoughnut');
    const hgwInterferenceDoughnut = new Chart(hgwInterferenceDoughnutContext, commonConfig);

    let hgwInterferenceHomeDoughnutContext = $('#hgwInterferenceHomeDoughnut');
    const hgwInterferenceHomeDoughnut = new Chart(hgwInterferenceHomeDoughnutContext, commonConfig);

    let hgwChannelDoughnutContext = $('#hgwChannelDoughnut');
    const hgwChannelDoughnut = new Chart(hgwChannelDoughnutContext, {
        type: 'doughnut',
        data: {
            labels: ['Auto: Yes', 'Auto: No'],
            datasets: [
                {
                    label: "Percent of time with connected user(s)",
                    backgroundColor: ["#8ef8ff", "#27aae1"],
                    data: [48, 52]
                }
            ]
        },
        options: {
            legend: {
                position: 'left',
                // display: false
            },

            legendCallback: function(chart) {
                var text = [];
                text.push('<ul class="' + chart.id + '-legend">');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
                    if (chart.data.datasets[i].label) {
                        text.push(chart.data.datasets[i].label);
                    }
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join('');
            },

            elements: {
                center: {
                    text: '52%',
                    color: '#27aae1', // Default is #000000
                    fontStyle: 'Arial', // Default is Arial
                    sidePadding: 20 // Defualt is 20 (as a percentage)
                }
            }
        }
    });

    let hgwStickyTimeDoughnutContext = $('#hgwStickyTimeDoughnut');
    const hgwStickyTimeDoughnut = new Chart(hgwStickyTimeDoughnutContext, {
        type: 'doughnut',
        data: {
            labels: ["Connected", "Not connected"],
            datasets: [
                {
                    label: "",
                    backgroundColor: ["#27aae1"],
                    data: [48, 52]
                }
            ]
        },
        options: {
            legend: {
                position: 'left',
                // display: false
            },

            legendCallback: function(chart) {
                var text = [];
                text.push('<ul class="' + chart.id + '-legend">');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
                    if (chart.data.datasets[i].label) {
                        text.push(chart.data.datasets[i].label);
                    }
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join('');
            },

            elements: {
                center: {
                    text: '48%',
                    color: '#27aae1', // Default is #000000
                    fontStyle: 'Arial', // Default is Arial
                    sidePadding: 20 // Defualt is 20 (as a percentage)
                }
            }
        }
    });

    let hgwClientRssDoughnutContext = $('#hgwClientRssDoughnut');
    let hgwClientRssDoughnutConfig = commonConfig;

    hgwClientRssDoughnutConfig.data.labels = ['Good', 'Medium', 'Bad'];
    const hgwClientRssDoughnut = new Chart(hgwClientRssDoughnutContext, hgwClientRssDoughnutConfig);

    let hgwRssStatusDoughnutContext = $('#hgwRssStatusDoughnut');
    const hgwRssStatusDoughnut = new Chart(hgwRssStatusDoughnutContext, hgwClientRssDoughnutConfig);


});
