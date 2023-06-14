// los iteradores se ejecutan o ejecutan el código hasta que se cumpla o no se cumpla una condición

// For loop
// se ejecutan siempre y cuando la ejecución sea verdadera y se detiene cuando es falsa

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// identifica del 1 al 100, si el numero es par o impar


// for (let i = 1; i <= 100; i++) {
//     if(i % 2 == 0){
//         console.log(`El numero ${i} numero par` )
//     }
//     else{
//         console.log(`El numero ${i} numero impar` )
//     }
// }


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


// for (let i = 0; i < carrito.length; i++) {
//         console.log(carrito[i]);
// }


// While loop

// el While loop se ejecuta mientras una condición sea evaluada como verdadera

// let i = 1; //indice

// while (i <= 100) {// condicion{
//     if(i % 2 == 0){
//         console.log(`El numero ${i} numero par` )
//     }
//     else{
//     console.log(`El numero ${i} numero impar` )
//     }
//     i++ //incremento
// }

// while (i <= carrito.length) { // condicion
//     console.log(carrito[i].nombre);
//     i++; //incremento
// }

//La diferencia entre el While loop y el DoWhile loop que el while loop evalua la condicion y si no es verdadera, no ejecuta el código, pero el Do While aun que la condición no sea verdadera y si por ejemplo el i = 100 y la condición es while i = 100 < 10 (que es falso) e l código se ejecutará sólo plasmando o imprimiendo el valor de la variable, en este caso 100, osea se ejecuta al menos una vez y después evalúa.
// Do while loop

let i = 100

do {
    console.log(i);

    i++
} while (i < 10);

