// Arrays, un array puede ser un carrito de compras

const numeros = [10,20,30,40,50];
console.table(numeros)

// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo')
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']
console.table(meses);

const arreglo = ['Hola', 10, true, 'si', null, {nombre:'Fabian', trabajo:'programador'}, [1,2,3]]

console.table(arreglo)

// Acceder a valores de un objeto

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])


// conocer la extensión de un arreglo

console.log(meses.length)


// acceder con forEach
numeros.forEach(function(numeros){
        console.log(numeros)
})

