//Entonces ahora nos queda simular los otros métodos de eliminación como pop, shift y splice , para esto existe un array methods llamado .filter

//Arrays Methods
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 500 },
    { nombre: 'Television 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
]

//forEach

// meses.forEach(function(mes){
//     console.log(mes)
// });

meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe')
    }
});

// Array Methods "Includes" Este funciona mejor en arreglos planos como el array de meses

let resultado = meses.includes('Marzo');
console.log(resultado)


// el Array Methods de "Some" es ideal para arreglos de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular'
})

//por otro lado podemos hacer lo mismo pero con el arrow funtions por ejemplo 

// resultado = carrito.some (producto => producto.nombre === 'Celular PRO')

// para saber la suma total de un carrito, podríamos usar el forEach, pero no es el más indicado
// ya que con Arrays Methods podemos usar .reduce

resultado = carrito.reduce(function(total, producto){ // a .reduce se le pasan dos parámetros en la Fx, como en este caso el total y el producto
    return total + producto.precio
},0) // el último cero significa desde donde se comienza la sumatoria


// .Filter es el más útil de todos ellos y sirve para seleccionar qué elementos se requieren.

resultado = carrito.filter(function(producto){
    return producto.precio > 400 // esto me traerá todos los productos según la condición que yo requiera.
})
resultado = carrito.filter(function(producto){
    return producto.precio >= 700 && producto.precio <= 800
})


console.log(resultado)



