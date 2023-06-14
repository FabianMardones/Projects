const numeros = [10,20,30,40,50];
console.table(numeros)

// una forma no muy común de agregar índices a un array es:
// numeros[5] = 60;
// numeros[6] = 70;
// y otra forma no muy común de modificar un indice de un arreglo sería:
// numeros[2] = 60;

// una forma común es .push

// numeros.push(60)
// numeros.push(70)

// ooo

numeros.push(80,90,100) // .push agrega al final del arreglo

numeros.unshift(-10,-20,-30) // .unshift agrega al inicio del arreglo

console.table(numeros)

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

// meses.pop() //sin colocar ningún parámetro, eliminará el últmo elemento del arreglo
// meses.shift() //sin colocar ningún parámetro, elimina el primer elemento del arreglo

// meses.splice(2,1); // el primer parámetro indica el índice del elemento que quiero eliminar y el segundo, la cantidad de elementos a elminar a partir de ese índice

// console.table(meses);

// pero la desventaja en general de estos métodos es que modifican el elemento original.

// un enfoque que está tomando harta fuerza es mantener los datos originales y crear un arreglo nuevo con los nuevos datos
// Rest Operator o Spead Operator

// const nuevoArreglo = [...meses, 'Junio'] //Este es e quivalente a un push, se ve más código pero es mejor porque no modifica el elemento original

// const nuevoArreglo = ['Junio', ...meses]// y como push agrega al final y unshift al inicio, para poder tener una forma de hacerlo es cambiar el elemento a agregar antes de la copia.

// console.log(nuevoArreglo);



