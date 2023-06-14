
// function sumar(a,b){
//     return a + b
// }

// const resultado = sumar(2,3)
// console.log(resultado)


let total = 0;

function agregarCarrito(precio){
    return  precio += total;
}

function calcularImpuesto(total){
    return 0.19 * total;
}

total = agregarCarrito(200)
total = agregarCarrito(200)
total = agregarCarrito(200)

console.log(total)

const totalAPagar = calcularImpuesto(total) + total;

console.log(`El total a pagar +IVA Incluido es de ${totalAPagar}`);