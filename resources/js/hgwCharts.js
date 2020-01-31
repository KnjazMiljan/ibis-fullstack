import moment from "moment";

$(document).ready(function () {
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


});
