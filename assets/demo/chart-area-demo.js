// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';




modelo = []

response = []


const getData = async() => {
url = 'https://apiflaskmineriaws.onrender.com/api/v1/cmc'
 

await axios({ method: 'GET', url: url, config })
    .then(responseData => {
        response = responseData.data
        console.log('Config ', response)
  }).catch()
}

getData()




// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart1 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1", "2", "3", "4"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});


const actualizarDatosLineChart = () => {
  value = document.getElementById('feacturesOptions1').value
  años = []
  if(value == 'primera'){
    años = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
  }else if(value == 'segunda'){
    años = [26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
  }else if(value == 'tercera'){
    años = [36, 37, 38, 39, 40]
  }else{
    años = [41, 42, 43, 44, 45, 46, 47, 48, 49]
  }

  valoresObtenidos = []

  años.forEach(element2 => {
    var datosNew = response.filter(element => element2 == element.edad_esposa)
    if(datosNew.length > 0){
      console.log(datosNew)
      valoresObtenidos.push(datosNew)
    }
  });

  //console.log(valoresObtenidos)
  
  valoresLabels = []
  valoresPrecios = []
  valoresObtenidos.forEach((array) => {
    var suma = 0
    for (i in array){
      suma+=array[i].precio
    }
    valoresLabels.push(String(array[0].año))
    valoresPrecios.push(suma)
  })
  myLineChart1.data.labels = ["1", "2", "3", "4"],
	myLineChart1.data.datasets[0].data = años
	myLineChart1.update()
}
