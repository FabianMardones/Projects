// 'use strict'; //Correr Javascript en modo estricto

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//Freeze no permite agregar ni modificar ni eliminar.
// Object.freeze(producto)

// Seal al igual que freeze no permite agregar ni eliminar, pero si permite modificar los objetos existentes
Object.seal(producto);

producto.precio = 100

// producto.imagen = 'imagen.jpg'


// console.log(Object.isFrozen(producto));

console.log(producto);

