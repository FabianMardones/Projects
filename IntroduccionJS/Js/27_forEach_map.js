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

// forEach, y map sólo pueden ser utilizado únicamente en Arrays y estos se van a ejecutar una vez por cada vez que hay un  elemento en el arreglo es decir si en el arreglo hay 8 elementos , no es necesario escribir una condicion que evalue mientras se va iterando, el forEach dice, aquí hay 8 elementos y voy ejecutar 8 veces osea se ejecutará por su longitud.

// forEach

// carrito.forEach(function(producto){
//     console.log(producto);
// })

// carrito.forEach( producto => console.log(producto))


// map

// carrito.map( producto => console.log(producto))

// porqué usar uno u otro si ambos hacen lo mismo? cuál es la diferencia? pregunta de trabajo 

// cuando quieras iterar sobre un listado o mejor dicho un arreglo y mostrar los elementos en pantalla o simplemente enviarlos a la consola debes usar forEach 

// si quieres crear un nuevo arreglo, debes utilizar map

// por ejemplo podemos dar por implicito el return en ambos casos y no nos mostrará nada en la consola, entonces lo podemos agregar a una variable


//si quieres mostrar algo por consola o cuando quieras imprimir en el HTML se usa forEach este está especialmente diseñado para iterar y mostrar los resultados

carrito.forEach( producto => console.log(producto.nombre))


//si quieres crear un nuevo arreglo por ejemplo en este caso para mostrar sólo los nombres o lo que tu quieras, se utiliza map
const carrito2 = carrito.map( producto => `${producto.nombre} = ${producto.precio}`)



console.log(carrito2);


// let ropa = [
//     { tipo: 'polera', precio: 5000 },
//     { tipo: 'pantalon', precio: 4000 },
//     { tipo: 'camisa', precio: 5500 },
//     { tipo: 'short', precio: 5800 },
//     { tipo: 'blusa', precio: 10000 },
// ]

// // ropa.forEach(function(producto){
// //     console.log(producto)
// // })

// // ropa.map(function(producto){
// //     console.log(producto)
// // })

// let carrito1 = ropa.forEach(function(producto){
//     return producto
// })

// let carrito2 = ropa.map(function(producto){
//     return (`${producto.tipo} = ${producto.precio}`)
// })

// console.log(carrito1);
// console.log(carrito2);