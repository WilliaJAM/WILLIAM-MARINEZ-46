
let usuariosArray = JSON.parse(localStorage.getItem('usuarios')) || [];

let servicios = [
    {"servicio" : "Lavado General", "precio": 20000},
    {"servicio" : "Polichada", "precio": 50000 },
    {"servicio" : "Lavado a presion", "precio": 40000},
    {"servicio" : "Servicio Completo", "precio": 250000 },
    {"servicio" : "Cambio aceite", "precio": 45000 }
]
//____________________________________________
// const precioManoBra = parseInt(document.getElementById('precioManoBra').value)
// const precioRpuesto = parseInt(document.getElementById('precioRepuesto').value)
// const selectServicio= parseInt(document.getElementById('servicioAplicado').value);
// const tipoCliente = document.getElementById('selectorTipoCliente').value;
// let factura = {
//     nombre : 
//     tipoCliente : tipoCliente,
// }

const selecTipoCliente = document.getElementById('selectorTipoCliente');
const servicio = document.getElementById('servicioAplicado');
//foreach itera sobre un array (esta funcion crea opciones del select del html)
usuariosArray.forEach(element => {

    const option = document.createElement('option');
    //esta linea de codigo crea el value del option
    option.value = element.tipoCliente
    //esto es solo donde esta <option>Texto (por eso .text)</option>
    option.text = `${element.nombre} ${element.apellido}`;
    //append child agrega esa opcion dentro del select
    selecTipoCliente.appendChild(option)

    
});

servicios.forEach(element => {
    const selectServicio= document.getElementById('servicioAplicado');

    const option = document.createElement('option');
    //esta linea de codigo crea el value del option
    option.value = element.precio
    //esto es solo donde esta <option>Texto (por eso .text)</option>
    option.text = element.servicio;
    //append child agrega esa opcion dentro del select
    selectServicio.appendChild(option)


    
});

function calcularTotla() {
    
    const precioManoBra = parseInt(document.getElementById('precioManoBra').value)
    const precioRpuesto = parseInt(document.getElementById('precioRepuesto').value)
    const selectServicio= parseInt(document.getElementById('servicioAplicado').value);
    const tipoCliente = document.getElementById('selectorTipoCliente').value;
    
if(tipoCliente == "preferencial"){
    let cobro = (precioManoBra + precioRpuesto + selectServicio)* 0.9;
    console.log(cobro);
}else{
    let cobro = precioManoBra + precioRpuesto + selectServicio;
    
}

}
