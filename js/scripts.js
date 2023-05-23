/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
});

var config = {
    headers: { 'Access-Control-Allow-Origin': '*' }
}

const eliminarSession = () => {
    localStorage.clear();
}


const enviarSoporte = () => {
    url = 'https://apiflaskmineriaws.onrender.com/api/v1/add/pqr'

    usuario = document.getElementById("usuario").value 
    correo = document.getElementById("correo").value
    mensaje = document.getElementById("mensaje").value

    if(usuario === '' || correo === '' || mensaje === ''){
        alert = document.getElementById("alertErrorRegister")
        alert.innerHTML = `Complete los campos`
        alert.style.display = "block"
    }else{

        data = [
            {
                "usuario": usuario,
                "correo": correo,
                "mensaje": mensaje,
            }
        ]
    
        axios({ method: 'POST', url: url, data: data, header: config })
            .then(response => {
                location.reload()
        }).catch(erroe => {
            alert = document.getElementById("alert")
            alert.innerHTML = `Ingrese los datos correctos`
            alert.style.display = "block"
        })
    }
}


const registrarDatos = async() => {
    let modelo = document.getElementById("modelo").value;
    coloresId = ['amarillo', 'azul', 'verde', 'rojo', 'anaranjado', 'crema', 'negro', 'blanco', 'gris', 'dorado', 'plateado', 'vinotinto', 'otros']
    color = ''
    coloresId.forEach(id => {
    if(document.getElementById(id).checked){
      color = id
    }
    });

    let año = document.getElementById("año").value
    let valor = document.getElementById("precio").value

    if(modelo === '' || año === '' || valor === ''){
        alert = document.getElementById("alertErrorRegister")
        alert.innerHTML = `Complete los campos`
        alert.style.display = "block"
    }else if(año < 1900 && año > 2030){
        alert = document.getElementById("alertErrorRegister")
        alert.innerHTML = `Ingrese el año correcto, entre el rango 1900 - 2030`
        alert.style.display = "block"
    }else if(valor < 5000000){
        alert = document.getElementById("alertErrorRegister")
        alert.innerHTML = `Ingrese valor superior a 5 millones`
        alert.style.display = "block"
    }else{
        data = [
            {   
                "link": "$ 30.900.0002011 - 130.300 kmVendo Chevrolet Captiva Sport 2011Niza Norte - Ocales De Niza",
                "link_href": "https://www.olx.com.co/item/vendo-chevrolet-captiva-sport-2011-iid-1118138588",
                "ano": año,
                "color": color,
                "marca": "CHEVROLET",
                "modelo": modelo,
                "precio": valor,
                "web_scraper_order": "1680569180" + "-" + Math.random(),
                "web_scraper_start_url": "https://www.olx.com.co/items/q-chevrolet"
            }
        ]
        url = 'http://127.0.0.1:5000/api/chevrolet/add'

        await axios({ method: 'POST', url: url, data: data, header: config })
            .then(response => {
                window.location.href = 'tables.html'
        }).catch(erroe => {
            alert = document.getElementById("alert")
            alert.innerHTML = `Ingrese los datos correctos`
            alert.style.display = "block"
        })
       
    }
    
}


const eventosGrafico6 = () => {
    var value = document.getElementById("feacturesOptions").value
    console.log(value)
    actualizarDataChart("radar-chart", [5000, 3, 2, 1, 2018], 'Año')

}


