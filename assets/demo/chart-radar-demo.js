
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


var ctx = document.getElementById('radar-chart').getContext('2d');
		var chartRadar = new Chart(ctx, {
			type: 'radar',
			data: {
				labels: ['Edad Esposa', 'Educación del esposo', 'Educación esposa', 'Numero de hijos', 'indice de nivel de vida'],
				datasets: [{
					label: 'Vehicle 1',
					data: [3000, 2, 1, 3, 2015],
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgba(255, 99, 132, 1)',
					borderWidth: 2
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				legend: {
					position: 'bottom',
					labels: {
						fontColor: '#333',
						fontSize: 14,
						padding: 20
					}
				},
				title: {
					display: false
				},
				scale: {
					ticks: {
						beginAtZero: true
					},
					pointLabels: {
						fontColor: '#333',
						fontSize: 14
					}
				}
			}
		});


const actualizarDataChart = (chartId, data, label) => {
	chartRadar.data.datasets[0].data = data
	chartRadar.data.datasets[0].label = label
	chartRadar.update()
 }


		// , {
		// 	label: 'Vehicle 2',
		// 	data: [5000, 3, 2, 1, 2018],
		// 	backgroundColor: 'rgba(54, 162, 235, 0.2)',
		// 	borderColor: 'rgba(54, 162, 235, 1)',
		// 	borderWidth: 2
		// }