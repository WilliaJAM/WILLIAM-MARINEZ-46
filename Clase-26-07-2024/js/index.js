
let baseDatosproductos = [
{nombre:"Manzana", precio: 800},
{nombre:"Pera", precio: 900},
{nombre:"Piña", precio: 1700},
]


const selector = document.getElementById('selectorProducto');
const totalPintadoHtml = document.getElementById('total');

baseDatosproductos.forEach(element =>{
    const option = document.createElement('option');
    option.value = element.precio;
    option.text = element.nombre;

    selector.appendChild(option);
});

const tablaContenido = document.getElementById('contenidoDeLaTabla');



function agregarProducto() {
    
    const tablaContenido = document.getElementById('contenidoDeLaTabla');
    const precio = selector.value;
    const cantidad = document.getElementById('cantidad').value;
    console.log(precio)
    const totalProductos = precio * cantidad;
    
    const fila = document.createElement('tr');

    const nomProduct = document.createElement('td')

    nomProduct.textContent = 'pr definir'
    fila.appendChild(nomProduct)
    
    const priceProduct = document.createElement('td')

    priceProduct.textContent =cantidad
    fila.appendChild(priceProduct)

    const cantidadProducto = document.createElement('td')

    cantidadProducto.textContent = precio
    fila.appendChild(cantidadProducto)

    const total = document.createElement('td')

    total.textContent = totalProductos
    fila.appendChild(total)
    
    const botonProduct = document.createElement('td')
    const boton = document.createElement('button');
    boton.innerHTML = 'Borrar';
    boton.className = ' btn btn-danger';
    boton.addEventListener('click', ()=>{
        fila.remove()//para eliminar la fila
        calculoTotal()
    })
    botonProduct.appendChild(boton);
    
    fila.appendChild(botonProduct)
    tablaContenido.appendChild(fila)
    calculoTotal()
}

function calculoTotal() {
    let total = 0;

    const filas = Array.from(tablaContenido.getElementsByTagName('tr'))

    // for (let i = 0; i < filas.length; i++) {
        
    //     const valorColunma = filas[i].getElementsByTagName('td')

    //     total+= parseInt(valorColunma[3].textContent)
    // }

    
    filas.forEach(element =>{
        const  valorColunma =element.getElementsByTagName('td')

        total+= parseInt(valorColunma[3].textContent)
    })

    totalPintadoHtml.innerHTML = `Total es:${total}`

}
function gurdarEstorage() {
    const filas = Array.from(tablaContenido.getElementsByTagName('tr'))
    const asd = JSON.stringify(filas);

    localStorage.setItem('productosComprados', asd)
}

//MINI TAREA terminar ose que guarde todo los producto compradros en el estorage.