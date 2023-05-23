sessionIniciada = false

window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki
    
    mostrarRegistros()
    mostrarReportesUser()
   
});
  responseDataNew = []
  idActualizar = null


var config = {
    headers: { 'Access-Control-Allow-Origin': '*' }
}

const mostrarReportesUser = () => {
    url = 'https://apiflaskmineriaws.onrender.com/api/v1/pqr'

    axios({ method: 'GET', url: url, config })
           .then(responseData => {
               response = responseData.data
               if(response.length > 0){
                   responseDataNew = response
                   let tableBody = document.getElementById("tablaReportes");
                   for (let i = 0; i < Object.keys(response).length; i++) {
                        const tr = document.createElement("tr");
                        tr.innerHTML = `
                        <td>${response[i].usuario}</td>
                        <td>${response[i].correo}</td>
                        <td>${response[i].mensaje}</td>`
                        tableBody.appendChild(tr);
                    }
                    const datatablesSimple = document.getElementById('datatablesReportes');
                    if (datatablesSimple) {
                        new simpleDatatables.DataTable(datatablesSimple);  
                    }
               }
    }).catch()

}

  
    const mostrarRegistros = () => {
       url = 'https://apiflaskmineriaws.onrender.com/api/v1/cmc'

       axios({ method: 'GET', url: url, config })
           .then(responseData => {
               response = responseData.data
               if(response.length > 0){
                   responseDataNew = response
                   let tableBody = document.getElementById("cuerpoTabla");
                   for (let i = 0; i < Object.keys(response).length; i++) {
                        const tr = document.createElement("tr");
                        tr.innerHTML = `
                        <td>${response[i].edad_esposa}</td>
                        <td>${response[i].educ_de_la_esposa == 1 ? 'Baja' : response[i].educ_de_la_esposa == 2 ? 'Basica' : response[i].educ_de_la_esposa == 3 ? 'Media' : 'Alta'}</td>
                        <td>${response[i].educ_del_esposo == 1 ? 'Baja' : response[i].educ_del_esposo  == 2 ? 'Basica' : response[i].educ_del_esposo  == 3 ? 'Media' : 'Alta' }</td>
                        <td>${response[i].exposicion_a_los_medios == 0 ? 'Bueno' : 'No Bueno' }</td>
                        <td>${response[i].indice_de_nivel_de_vida == 1 ? 'Bajo' : response[i].indice_de_nivel_de_vida== 2 ? 'Normal' : response[i].indice_de_nivel_de_vida == 3 ? 'Medio' : 'Alto'}</td>
                        <td>${response[i].la_esposa_trabaja_ahora == 1 ? 'No' : 'Si'}</td>
                        <td>${response[i].metodo_anticonceptivo_utilizado == 1 ? 'No usa' : response[i].metodo_anticonceptivo_utilizado == 2 ? 'A largo plazo' : 'A corto plazo' }</td>
                        <td>${response[i].num_de_hijos_nacidos}</td>
                        <td>${response[i].ocupa_del_esposo}</td>
                        <td>${response[i].religion_de_la_esposa == 1 ? 'Islam' : 'No Islam'}</td>`
                        tableBody.appendChild(tr);
                    }
                    const datatablesSimple = document.getElementById('datatablesSimple');
                    if (datatablesSimple) {
                        new simpleDatatables.DataTable(datatablesSimple);  
                    }
               }
            }).catch()
    };


    const login = async() => {
       
        username = document.getElementById("inputEmail").value
        password = document.getElementById("inputPassword").value
        
        if(password != '' && username != ''){
        url = 'https://apiflaskmineriaws.onrender.com/api/v1/login/' + username + '/' + password

        await axios({ method: 'GET', url: url, config })
            .then(response => {
                localStorage.setItem('session', true);
                window.location.href = 'tables.html'
        }).catch(erroe => {
            alert = document.getElementById("alert")
            alert.innerHTML = `Ingrese los datos correctos`
            alert.style.display = "block"
        })
        }else{
            alert = document.getElementById("alert")
            alert.innerHTML = `Complete los campos vacios!`
            alert.style.display = "block"
        }
    }


  const actualizarData = (index) => {
    document.getElementById("campo1").value = responseDataNew[index].edad_esposa
    document.getElementById("campo2").value = responseDataNew[index].educ_de_la_esposa
    document.getElementById("campo3").value = responseDataNew[index].educ_del_esposo
    document.getElementById("campo4").value = responseDataNew[index].exposicion_a_los_medios
    document.getElementById("campo5").value = responseDataNew[index].indice_de_nivel_de_vida
    document.getElementById("campo6").value = responseDataNew[index].la_esposa_trabaja_ahora
    document.getElementById("campo7").value = responseDataNew[index].metodo_anticonceptivo_utilizado
    document.getElementById("campo8").value = responseDataNew[index].num_de_hijos_nacidos
    document.getElementById("campo9").value = responseDataNew[index].ocupa_del_esposo
    document.getElementById("campo10").value = responseDataNew[index].religion_de_la_esposa
    alert = document.getElementById("alertFormulario")
    alert.style.display = "block";
  }

  const guardarData = async() => {
   campo1 = document.getElementById("campo1").value 
   campo2 = document.getElementById("campo2").value
   campo3 = document.getElementById("campo3").value
   campo4 = document.getElementById("campo4").value
   campo5 = document.getElementById("campo5").value
   campo6 = document.getElementById("campo6").value
   campo7 = document.getElementById("campo7").value
   campo8 = document.getElementById("campo8").value
   campo9 = document.getElementById("campo9").value
   campo10 = document.getElementById("campo10").value
    

    if(modelo === '' || año === '' || precio === ''){
        alert = document.getElementById("alertErrorRegister")
        alert.innerHTML = `Complete los campos`
        alert.style.display = "block"
    }else{

        data = [
            {
                "usuario": año,
                "correo": color,
                "mensaje": "CHEVROLET",
                "modelo": modelo,
                "precio": precio,
            }
        ]
        
       

        url = 'http://127.0.0.1:5000/api/chevrolet/update/' + idActualizar

        console.log('idActualizar', idActualizar)

        await axios({ method: 'PUT', url: url, data: data, header: config })
            .then(response => {
                location.reload()
        }).catch(erroe => {
            alert = document.getElementById("alert")
            alert.innerHTML = `Ingrese los datos correctos`
            alert.style.display = "block"
        })
       
    }
    
  }


  const eliminarData = async(index) => {
   id  = responseDataNew[index].web_scraper_order

    url = 'http://127.0.0.1:5000/api/chevrolet/delete/' + id

        await axios({ method: 'DELETE', url: url, header: config })
            .then(response => {
              location.reload()
        }).catch(erroe => {
            alert = document.getElementById("alert")
            alert.innerHTML = `Ingrese los datos correctos`
            alert.style.display = "block"
        })

  }

  

