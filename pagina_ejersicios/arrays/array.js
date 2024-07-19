const frutas = ['Manzana', 'Naranja', 'Banano', 'Pera'];
console.log(frutas);

function imprimirArray() {
    let input = document.getElementById("123").value
    console.log(localStorage.getItem("arreglo"));
    if(input >=frutas.length){
        alert(`No se puede`);
        limpiar("123");
        
    }if(input < 0){
        alert(`No`);
        limpiar("123");

    }else{

        alert(frutas[input])

    }
}
function limpiar(id) {
    document.getElementById(id).value=''
    document.getElementById(id).focus() //no pierde el cursor osea no se tiene que volver a clikear el input se selecciona auto (cositas para una 
    //experincia de usuario god)

}
function agregar() {
    let newElement = document.getElementById('newElement').value
    newElement = newElement.trim();
    if (newElement !== '') {
        alert(`Elemento agrergado`);
        frutas.push(newElement);
        guardar(frutas);
        console.log();
    }else{
        alert(`Agregar un elemento los espacios no son permitidos`);
        
    }
}
function eliminar() {
    let newElement = document.getElementById("123").value;
    if( newElement>=frutas.length){
        alert(`No se señor el indice del arreglo se actualiza`);

    }else{

        frutas.splice(newElement , 1); //tener encuenta como se hace, asi se debe usar splice sirve para eliminar elementos de un arreglo , se podra aplicar en objetos almacenados en 
        //un array? 
        console.log(frutas);
        alert(`Elementos que estan en el arreglo ${frutas}`);
    }

}
function guardar(algoRamdon) {
    localStorage.setItem("arreglo", algoRamdon);
    console.log("guardado en storage");
}