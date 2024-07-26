
// let dataBase = "admin"
// let asd = "123"
let baseDeDatos = [
    {"nombre" : "admin" , "pw":123 ,"edad": 12},
    {"nombre" : "William" ,"pw":789 , "edad":23 },
    {"nombre" : "Otro" , "pw":456 , "edad": 18}
]

// function logIn() {
//     let username = document.getElementById("floatingInput1").value
//     let password = document.getElementById("floatingPassword2").value
//     if(dataBase == username && password == asd){
//         guardar(username);
//         window.open('/pagina_ejersicios/main.html', '_self');
//         document.getElementById("username").value = '';
//         document.getElementById("inputPassword2").value = '';
//         //aqui solo llama la variable con el valor de 3 y ejecutará el alert.
//     }else if( localStorage.getItem("intentos") == 3){
//         alert(`Cuenta bloqueada`);
//     }else {
//         alert(`Error credneciales invalidas`);

//         contador1();
//     }

// }
function funcionBaseDeDatos() {
    let username = document.getElementById("floatingInput1").value
    let password = document.getElementById("floatingPassword2").value
    //devolvera un booleano cuando evalue la expresion.
    let eserLogin = baseDeDatos.some(usuario => usuario.nombre == username && usuario.pw == password);
    //la variable eserLogin se convertira en un true o false.
    console.log(eserLogin);
    // se puede evaluar dentro de una condicional para seguir con el flujo normal.
    if(eserLogin == true) {
        guardar(username);
        window.open('/pagina_ejersicios/main.html', '_self');
        document.getElementById("username").value = '';
        document.getElementById("inputPassword2").value = '';
    }else if( localStorage.getItem("intentos") == 3){
        lert(`Cuenta bloqueada`);
    }else{
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
