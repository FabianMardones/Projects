const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//Forma anterior
// const precioProducto = producto.precio;
// const nombreProducto= producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

//Destructuring

const {precio, disponible, nombreProducto} = producto;
console.log(precio)
console.log(disponible)
console.log(nombreProducto)

const interes = precio * .19;
const totalProducto = interes + precio;

console.log(totalProducto)