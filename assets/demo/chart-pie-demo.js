// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

colores = ['plateado', 'plateado', 'dorado', 'verde', 'azul', 'amarillo', 'crema', 'rojo',  'rojo' , 'rojo', 'rojo', 'verde', 'negro', 'blanco', 'anaranjado', 'anaranjado', 'gris', 'blanco', 'negro', 'otros', 'otros', 'vinotinto', 'vinotinto']


coloresHex = [
    {
      color: 'plateado',
      hx: '#848482'
    },
    {
      color: 'dorado',
      hx: '#C49A48'
    },
    {
      color: 'verde',
      hx: '#008F39'
    }, 
    {
      color: 'azul',
      hx: '#063971'
    },
    {
      color: 'amarillo',
      hx: '#ffff00'
    },
    {
      color: 'crema',
      hx: '#f9e5bc'
    },
    {
      color: 'rojo',
      hx: '#cc0000'
    },
    {
      color: 'negro',
      hx: '#0000000'
    },
    {
      color: 'blanco',
      hx: '#ffffff'
    },
    {
      color: 'anaranjado',
      hx: '#ff6600'
    },
    {
      color: 'vinotinto',
      hx: '#981815'
    },
    {
      color: 'gris',
      hx: '#4e4e4e'
    },
    {
      color: 'otros',
      hx: '#513833'
    },
]


negro = colores.filter(c => 'azul' === c)
dorado = colores.filter(c => 'amarillo' === c)


colorObject = {
  label: '',
  color: ''
}

// Pie Chart Example
var ctx = document.getElementById("pie-chart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Bajo', 'Normal'],
    datasets: [{
      data: [negro.length, dorado.length],
      backgroundColor: ['#ffff00', '#063971'],
    }],
  },
});

const obtenerData = () => {
  coloresId = ['amarillo', 'azul', 'verde', 'rojo']

  coloresChecked = []

  coloresId.forEach(id => {
    if(document.getElementById(id).checked){
      coloresChecked.push(id)
    }
  });

  coloresData = []

  coloresChecked.forEach(colorChecked => {
    var data = colores.filter(color => color === colorChecked)
    coloresData.push(data.length)
  })
  
  coloresLabel = []
  coloresChecked.forEach(colorChecked => {
    var data = colores.filter(color => color === colorChecked)
    coloresLabel.push(data[0])
  })

  coloresHx = []
  coloresChecked.forEach((colorChecked) => {
    var data = coloresHex.filter(colorObject => colorObject.color === colorChecked)
    coloresHx.push(data[0])
  })

  coloresHxOk = []
  coloresHx.forEach(color => {
    coloresHxOk.push(color.hx)
  })

  myPieChart.data.datasets[0].data = coloresData
	myPieChart.data.labels = coloresLabel
  myPieChart.data.datasets[0].backgroundColor = coloresHxOk
	myPieChart.update()
}
