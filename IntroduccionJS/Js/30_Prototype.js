// Object Constructor

function Producto(nombre,precio){
    this.nombre = nombre// parametros
    this.precio = precio
}

// un prototype permite crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

const producto2 = new Producto('Monitor curso de 49"', 100000) // ()=>Argumentos
const producto3 = new Producto('Tablet', 50000)


console.log(producto2.formatearProducto())
console.log(producto3.formatearProducto())




// function formatearProducto(producto){
//     return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
// }
// console.log( formatearProducto(producto2));