
let fecha = new Date();
console.log(fecha)

console.log(fecha.setFullYear(2002))
let arrayDias = ['Domingo', 'Lunes', 'Martes',' Miercoles', 'Jueves', 'Sabado'];
let arrayMes = ['Enero', 'Febrero', 'Marzo' , 'abril', 'mayo', 'junio', 'julio', 'agoto', 'septiembre', 'octubre', 'noviembre', 'Diciembre'];


console.log(arrayMes[fecha.getMonth()]);
console.log(`${arrayDias[fecha.getDay()]}, ${fecha.getDate()} ${arrayMes[fecha.getMonth()]}  ${fecha.getFullYear()}`);

let hora = new Date();
console.log(hora.toLocaleTimeString());
console.log(hora.getTime());
console.log(Date.now());
console.log(+hora);

let nuemro = 5;
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