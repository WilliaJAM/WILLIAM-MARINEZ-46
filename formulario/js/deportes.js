function guardarDeporte() {
    const deporte = document.getElementById("inputDeporte").value
    let baseDeDatosDeporte = {
        deporte :deporte,
    }
    let cambio = JSON.parse(localStorage.getItem('baseDeDatosDeporte')) || []
    cambio.push(baseDeDatosDeporte);
    localStorage.setItem('baseDeDatosDeporte' , JSON.stringify(cambio));

}