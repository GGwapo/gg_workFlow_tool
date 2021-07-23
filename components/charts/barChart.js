import { Bar } from "react-chartjs-2"
// read https://www.npmjs.com/package/react-chartjs-2?activeTab=dependencies for usage.

function BarChart() {
    const props = {
        chart_base: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        chart_value: [
            {
                label: 'Job',
                data: [12, 19, 3, 5, 2, 3],
            },
            {
                label: 'Apl',
                data: [12, 19, 3, 5, 2, 3],
            },
        ]
    }
    return (
        <Bar
            data = {
                {
                    labels: props.chart_base,
                    datasets: [
                        {
                            label: 'Job',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1, // add this to show bar border.
                        },
                        {
                            label: 'Apl',
                            data: [55, 88, 72, 65, 52, 25],
                            backgroundColor: 'rgba(255, 159, 64, 0.2)',
                            borderColor: ['rgba(255, 159, 64, 1)'],
                            borderWidth: 1, // add this to show bar border.
                        }
                    ]
                }
            }
            height={400} // chart 
            width={600}
            options={{ 
                maintainAspectRatio: false,
                scales: {
                    yAxis: [{
                        ticks: {
                            beginAtZero: true // set to true for to start chart at zero.
                        }
                    }]
                },
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 12
                            }
                        },
                    },
                    
                }
            }}
            />
        // </div>
    )
}

export default BarChart;