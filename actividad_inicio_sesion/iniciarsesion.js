
let dataBase = [{
    user : "William", password : "1234"
},{
    user: "Nose" , password: "3456"
}]
let asd = "123"
function logIn() {
    let username = document.getElementById("floatingInput1").value
    let password = document.getElementById("floatingPassword2").value
    if(dataBase == username && password == asd){
        // alert(`Sesion iniciada`);
        window.open('http://127.0.0.1:5500/index.html', '_self');
        console.log('funciona')
        document.getElementById("username").value = '';
        document.getElementById("inputPassword2").value = '';
    }else {
        alert(`Error credneciales invalidas`);
    }

}