
let dataBase = "admin"
let asd = "123"

function logIn() {
    let username = document.getElementById("floatingInput1").value
    let password = document.getElementById("floatingPassword2").value
    if(dataBase == username && password == asd){
        guardar(username);
        window.open('/pagina_ejersicios/main.html', '_self');
        document.getElementById("username").value = '';
        document.getElementById("inputPassword2").value = '';
        //aqui solo llama la variable con el valor de 3 y ejecutará el alert.
    }else if( localStorage.getItem("intentos") == 3){
        alert(`Cuenta bloqueada`);
    }else {
        alert(`Error credneciales invalidas`);

        contador1();
    }

}
let contador = 0;

//contar intentos
function contador1() {
    let contador = localStorage.getItem("intentos");
    contador++
    if(contador <=3){
        //aqui solo le limita el uso de la funcion guardar2 osea cuando alcanze el valor de 3 no ejecutara la funcion. 
        guardar2(contador);
    }
}
//guarda users
function guardar(usuario) {
    localStorage.setItem("user", usuario);
}
//guarda los intentos
function guardar2(contador) {
    localStorage.setItem("intentos", contador);
}
function desbloquearCuenat() {
    //eliminar lo que contiene el localestorage
    localStorage.removeItem("intentos");
    // localStorage.setItem("intentos", 0)
}