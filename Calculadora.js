function sumar() {
    let numero1 = parseInt(document.getElementById(`inputNumero1`).value)
    let numero2 = parseInt(document.getElementById(`inputNumero2`).value)
    const suma = numero1+ numero2
    
    document.getElementById("result").innerHTML= (`${suma}`);
}
function restar() {
    let numero1 = parseInt(document.getElementById(`inputNumero1`).value)
    let numero2 = parseInt(document.getElementById(`inputNumero2`).value)
    const suma = numero1 - numero2
    document.getElementById("result").innerHTML= (`${suma}`);
}
function multiplicar() {
    let numero1 = parseInt(document.getElementById(`inputNumero1`).value)
    let numero2 = parseInt(document.getElementById(`inputNumero2`).value)
    const suma = numero1 * numero2
    document.getElementById("result").innerHTML= (`${suma}`);
}
function dividir() {
    let numero1 = parseInt(document.getElementById(`inputNumero1`).value)
    let numero2 = parseInt(document.getElementById(`inputNumero2`).value)
    const suma = numero1 / numero2 
    document.getElementById("result").innerHTML= (`${suma}`);
}
