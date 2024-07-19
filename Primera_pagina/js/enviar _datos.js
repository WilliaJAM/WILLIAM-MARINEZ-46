
function enviar() {
    let input1 = document.getElementById("input1").value
    let input2 = document.getElementById("input2").value
    alert(`Hola ${input1} como estas :)`);
    alert(`Tu edad es: ${input2}`);
    let anyoNacimiento = 2024 - input2;
    alert(`Naciste en el año: ${anyoNacimiento}`);
}