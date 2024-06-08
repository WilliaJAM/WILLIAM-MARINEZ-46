
// agregar();

// console.log(`area: ${area(10)}`);
// function llamar() {
//     let input = prompt('Llame');
//     alert("llamdo" + miArray[input]);
// }

// import { area, agregar, miArray } from "./asdsad.js";

// function saludar(nombre = "Persona") {
//     console.log(`Hola ${nombre}`)
    
// }

// saludar("William");
// let saludo = (nombrwe)=>{console.log(`hola ${nombrwe} version 2`)}
// saludo('William');
let fecha = new Date();
console.log(fecha)
// console.log(fecha.getDay());
// console.log(fecha.getDate(0));
// console.log(fecha.getMonth());
// console.log(fecha.getFullYear());
console.log(fecha.setFullYear(2002))
let arrayDias = ['Domingo', 'Lunes', 'Martes',' Miercoles', 'Jueves', 'Sabado'];
let arrayMes = ['Enero', 'Febrero', 'Marzo' , 'abril', 'mayo', 'junio', 'julio', 'agoto', 'septiembre', 'octubre', 'noviembre', 'Diciembre'];
// console.log(arrayDias[fecha.getDay()]);

console.log(arrayMes[fecha.getMonth()]);
console.log(`${arrayDias[fecha.getDay()]}, ${fecha.getDate()} ${arrayMes[fecha.getMonth()]}  ${fecha.getFullYear()}`);

let hora = new Date();
console.log(hora.toLocaleTimeString());
console.log(hora.getTime());
console.log(Date.now());
console.log(+hora);

// let fechaTimeStamp = new Date(0);
// console.log(fechaTimeStamp);
// function saludar(){
//     console.log(23)
// }
// setTimeout(saludar, 10000, );

let nuemro = 5;
// function nose() {
//     console.log(`Hoal ${nuemro}`);
//     --nuemro;
//     if (nuemro === 0) {
//         clearInterval(tiempoPlay);
//     } else if (nuemro == 0){
//         console.log(`xdxdxdxdxd`);

//     }
// }


let fechaHtml = document.getElementById('fecha');
let relojaHtml = document.getElementById('reloj');
let hope = document.getElementById('hope');
let fechaJs = new Date ();
let arrayDia = ['Domingo', 'Lunes', 'Martes',' Miercoles', 'Jueves','Viernes', 'Sabado']


let arrayMeses = ['Enero', 'Febrero', 'Marzo' , 'abril', 'mayo', 'junio', 'julio', 'agoto', 'septiembre', 'octubre', 'noviembre', 'Diciembre'];


fechaHtml.innerHTML = `${arrayDia[fechaJs.getDay()]} ${fechaJs.getDate()} de ${arrayMeses[fechaJs.getMonth()]} ${fechaJs.getFullYear()}`
setInterval(()=>{
    let hora = new Date ()
    relojaHtml.innerHTML = `${hora.toLocaleTimeString()}`
}, 1000)

let geet = document.getElementById(`heading1`);

function iniciar() {
    let hola34= document.getElementById('user').value; 
    let hola35=document.getElementById('user2').value; 

    let tiempoContador =setInterval( () => {
    geet.innerHTML = `${hola34}`
    hola34++;
    if(hola34 > hola35){
        clearInterval(tiempoContador);
    } 
}, 1000);
if(hola34 > hola35){
    flcehaFunction()
}
    
}


let flcehaFunction = () => {
        let hola34= document.getElementById('user').value; 
        let hola35=document.getElementById('user2').value; 
    
            let tiempoContador =setInterval( () => {
                geet.innerHTML = `${hola34}`
                hola34--;
                if(hola34 < hola35){
                    clearInterval(tiempoContador);
                } 
                }, 1000);
    }