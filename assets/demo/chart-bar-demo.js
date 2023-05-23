// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


datos = [
  {
    metodo: 1,
    año: 36
  },
  {
    metodo: 2,
    año: 29
  },
  {
    metodo: 1,
    año: 30
  },
  {
    metodo: 2,
    año: 20
  },
  {
    metodo: 2,
    año: 38
  },
  {
    metodo: 2,
    año: 28
  },
  {
    metodo: 3,
    año: 29
  },
  {
    metodo: 1,
    año: 26
  },

  {
    metodo: 2,
    año: 33
  },
  {
    metodo: 1,
    año: 40
  },
  {
    metodo: 3,
    año: 20
  },

  {
    metodo: 2,
    año: 25
  },
  {
    metodo: 1,
    año: 19
  },
  {
    metodo: 3,
    año: 26
  },
  
]


const mostrarData = () => {
  años = [2000, 2001, 2002, 2003, 2004, 2005, 2006]
  valoresObtenidos = []

  años.forEach(element2 => {
    var datosNew = datos.filter(element => element2 == element.año)
    if(datosNew.length > 0){
      valoresObtenidos.push(datosNew)
    }else{
      valoresObtenidos.push([{año: element2 , precio: 0}])
    }
  });
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

  return [10, 20, 30, 40, 50]
}

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["16", "17", "18", "19", "20", "21", "22"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: mostrarData(),
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

const eventosGrafico2 = () => {
  value = document.getElementById('feacturesOptions2').value
  años = []
  if(value == 'rangoAnual1'){
     años = [2000, 2001, 2002, 2003, 2004, 2005, 2006]
  }else if(value == 'rangoAnual2'){
    años = [2007, 2008, 2009, 2010, 2011, 2012]
  }else if(value == 'rangoAnual3'){
    años = [2013, 2014, 2015, 2016, 2017, 2018]
  }else{
    años = [2019, 2020, 2021, 2022, 2023]
  }

  valoresObtenidos = []

  años.forEach(element2 => {
    var datosNew = datos.filter(element => element2 == element.año)
    if(datosNew.length > 0){
      valoresObtenidos.push(datosNew)
    }else{
      valoresObtenidos.push([{año: element2 , precio: 0}])
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
  console.log(valoresPrecios)
  myLineChart.data.labels = value == 'rangoAnual1' ? ["16", "17", "18", "19", "20", "21", "22"] : value == 'rangoAnual2' ? ["30", "31", "32", "33", "34", "35", "37"] : ["24", "25", "26", "27", "28", "29", "30"]
	myLineChart.data.datasets[0].data = value == 'rangoAnual1' ? [10, 20, 30, 40, 50] : value == 'rangoAnual2' ? [30, 35, 40, 45, 50, 45] : [20, 30, 40, 46, 47, 48]
	myLineChart.update()

}






