

function guardarCargo() {
    const cargo = document.getElementById("inputCargo").value
    let baseDeDatosCargos = {
        cargo : cargo,
    }
    let cambio = JSON.parse(localStorage.getItem('baseDeDatosCargos')) || []
if(cargo != ""){
    cambio.push(baseDeDatosCargos);
    localStorage.setItem('baseDeDatosCargos' , JSON.stringify(cambio));
}else{
    alert(`Ingrese datos`);
}

}