

var ctx = document.getElementById('line-chart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Baja', 'Basica', 'Media', 'Alta'],
        datasets: [{
            label: 'Esposo',
            data:[10, 20, 40, 60, 70],
            borderColor: '#2c3e50',
            fill: false,
        }, {
            label: 'Esposa',
            data:[30, 40, 60, 70, 80, 90
],
            borderColor: '#3498db',
            fill: false,
        }]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Estadisticas de Educación. ',
            fontSize: 24,
            fontColor: '#2c3e50',
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});