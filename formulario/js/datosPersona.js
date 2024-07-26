function guardarDatos() {
    const nombre = document.getElementById("inputNombre").value;
    const apellido = document.getElementById("inputApellido").value;
    const telefono = document.getElementById("inputTelefono").value;
    const identificacion = document.getElementById("inputNumeroDocumento").value;
    const tipoDocumento = document.getElementById("selector").value;
    const dirrecion = document.getElementById("inputDirrecion").value
    const fecha = document.getElementById("fechaNacimiento").value

    let baseDeDatos = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        identificacion: identificacion,
        tipoDocumento: tipoDocumento,
        dirrecio : dirrecion,
        fecha : fecha
    };
    let usuarios = JSON.parse(localStorage.getItem('baseDeDatos')) || []
if(nombre != ""){
    usuarios.push(baseDeDatos);
    localStorage.setItem('baseDeDatos', JSON.stringify(usuarios))
}else{
    alert(`Ingrese datos`);
}

}


