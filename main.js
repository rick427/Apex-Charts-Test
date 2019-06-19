//Chart options
const options = {
    chart: {
        height: 450,
        width: '100%',
        type: 'bar',
        background: '#f4f4f4',
        foreColor: "#333"
    },
    series: [{
        name: 'Population',
        data: [8553765, 6826436, 8726453, 5545323, 
            881621,  1122342, 6782643, 4435266]
    }],
    xaxis: {
        categories: ['New York', 'Abuja', 'Chicago', 'Japan', 'Tanzania', 
        'Ghana', 'Togo', 'Korea' ]
    },
    plotOptions: {
        bar: {
            horizontal: false
        }
    },
    fill: {
        colors: ['#f44336']
    },
    dataLabels: {
        enabled: false
    },
    title: {
        text: "Larget Us Cities By Population",
        align: 'center',
        margin: 20,
        offsetY: 20,
        style: {
            fontSize: 25
        }
    }
};

//Init Chart
const graph = new ApexCharts(document.querySelector('.chart'), options);

//Render Chart
graph.render();

//Event method
document.querySelector('button').addEventListener('click', () => graph.updateOptions({
    plotOptions: {
        bar: {
            horizontal: true
        }
    },
    fill: {
        colors: ['#33BBFF']
    }
}))