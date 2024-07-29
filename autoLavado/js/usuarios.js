function registrar() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const cedula = document.getElementById("cedula").value;
    const tipoCliente = document.getElementById("selector").value;

    let baseDeDatos = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        cedula: cedula,
        tipoCliente: tipoCliente,
    };
    //hay que tener encuenta como se estructura  ejemplo :ya que la linea de codigo 23 tiene que ser la ultima
    //no goza de hoisting (va de ultima esa linea por que si se pone antes del push  no guarda)
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

    usuarios.push(baseDeDatos);
    
    alert(`Datos melos`);

    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}