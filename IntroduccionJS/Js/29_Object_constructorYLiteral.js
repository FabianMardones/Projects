// Programacion orientada a objetos POO

/** Object literal*/

const producto = {
    nombre: 'Tablet',
    precio : 500
}

// Object Constructor

function Producto(nombre,precio){
    this.nombre = nombre// parametros
    this.precio = precio
}
const producto2 = new Producto('Monitor curso de 49"', 100000) // ()=>Argumentos
const producto3 = new Producto('Tablet', 50000)


// console.log(producto2)
// console.log(producto3)


function Persona(nombre,apellido,edad,nroDeTelefono,pais){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nroDeTelefono = nroDeTelefono
    this.pais = pais
}

Persona.prototype.formatearPersona= function(){
    return `La persona ${this.nombre} ${this.apellido}, tiene ${this.edad} años, su numero de telefono es ${this.nroDeTelefono} proveniente de ${this.pais} `;
}

const persona1 = new Persona('Fabian','Mardones',29,'+ 56 9 35797847','Chile')
const persona2 = new Persona('Daniela','Fredes',30,'+ 56 9 30567330','Chile')
const persona3 = new Persona('Leon','Mardones',1,'+ 56 9 35797847','Chile')
const persona4 = new Persona('Molly','Mardones',2,'+ 56 9 30567330','Chile')

console.log(persona1.formatearPersona());
console.log(persona2.formatearPersona());
console.log(persona3.formatearPersona());
console.log(persona4.formatearPersona());



