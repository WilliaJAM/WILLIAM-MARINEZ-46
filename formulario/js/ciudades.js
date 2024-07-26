function guardarCiudades() {
    const ciudad = document.getElementById("inputCiudad").value
    let baseDeDatosCiudad = {
        ciudad : ciudad,
    }
    let cambio = JSON.parse(localStorage.getItem('baseDeDatosCiudad')) || []

    if(ciudad != ""){

        cambio.push(baseDeDatosCiudad);
        localStorage.setItem('baseDeDatosCiudad' , JSON.stringify(cambio));
    }else{
        alert(`Ingrese datos`);
    }

}