const frutas = ['Manzana', 'Naranja', 'Banano', 'Pera'];
console.log(frutas);

function imprimirArray() {
    let input = document.getElementById("123").value
    if(input >=frutas.length){
        alert(`No se puede`);
        limpiar();
        
    }if(input < 0){
        alert(`No`);
        limpiar();

    }else{

        alert(frutas[input])

    }
}
function limpiar() {
    document.getElementById("123").value=''
    document.getElementById("123").focus() //no pierde el cursor osea no se tiene que volver a clikear el input se selecciona auto (cositas para una 
    //experincia de usuario god)

}
function agregar() {
    let newElement = document.getElementById('newElement').value
    newElement = newElement.trim();
    if (newElement.trim() !== '') {
        alert(`Elemento agrergado`);
        frutas.push(newElement);
        console.log(frutas);
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