// import React from 'react';
import ReactApexChart from 'react-apexcharts';




function LineWeightChart() {

    const data: any = {

        series: [
            {
                name: "Средний недельный вес",
                data: [77, 77.2, 76, 75.7, 74.7, 74, 74.4, 75, 74.9, 74.9, 72.9, 72]
            },
            // {
            //     name: 'Калорийность план',
            //     type: 'line',
            //     data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
            // },
        ],

        options: {
            chart: {

                animations: {
                    enabled: false,
                },

                toolbar: {
                    show: false
                },

                height: '100%',
                width: '100%',
                type: 'line',
                background: 'none',
                fontFamily: 'Montserrat',
                foreColor: '#A7A7A7',
                zoom: {
                    enabled: false
                },
            },
            colors: ['#C5AD60', '#C2606B', '#A7A7A7'],

            dataLabels: {
                enabled: true,
                position: 'left',
                offsetX: 0,
                offsetY: -6,
                style: {
                    fontSize: '12px',
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    colors: ['#A7A7A7'],
                },
                background: {
                    enabled: false,
                },
            },

            fill: {
                colors: undefined,
                opacity: 0.6,
                type: 'solid',
            },

            markers: {
                size: 5,
                colors: '#C5AD60',
                strokeColor: 'none',
            },

            stroke: {
                curve: 'smooth'
            },

            legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'center',
                floating: true,
            },


            grid: {
                color: '#A7A7A7',
                borderColor: '#A7A7A7',
                row: {
                    colors: ['#A7A7A7', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.1
                },
                yaxis: {
                    lines: {
                        show: true,
                        type: 'solid',
                        color: '#A7A7A7',
                    }
                }
            },

            xaxis: {

                categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'],
                fill: {
                    type: 'solid',
                    color: '#A7A7A7'
                },
                labels: {
                    show: true,
                    rotate: -45,
                    rotateAlways: false,
                    hideOverlappingLabels: true,
                    showDuplicates: false,
                    trim: false,
                    minHeight: undefined,
                    maxHeight: 100,
                    style: {
                        colors: [],
                        fontSize: '10px',
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        cssClass: 'apexcharts-xaxis-label',
                    }
                },

                axisBorder: {
                    show: false,
                    color: '#A7A7A7',
                    height: 0.5,
                    width: '100%',
                    offsetX: 0,
                    offsetY: 0
                },
                axisTicks: {
                    show: true,
                    borderType: 'solid',
                    color: '#A7A7A7',
                    height: 5,
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'right',
                    minWidth: 0,
                    maxWidth: 300,
                    style: {
                        colors: [],
                        fontSize: '10px',
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        cssClass: 'apexcharts-yaxis-label',
                    }
                }
            },
        },
    };


    return (
        <ReactApexChart options={data.options} series={data.series} type="line" height={260} />
    );
}

export default LineWeightChart;