// this es una palabra reservada

const reservacion = {
    nombre: 'Fabian',
    apellido: 'Mardones',
    total: 5000,
    pagado: true,
    informacion: function(){
        console.log(`El cliente ${this.nombre} ${this.apellido} reservó y la cantidad a pagar es de: ${this.total}`)
    }
}

const reservacion2 = {
    nombre: 'Leon',
    apellido: 'Mardones',
    total: 5000,
    pagado: true,
    informacion: function(){
        console.log(`El cliente ${this.nombre} ${this.apellido} reservó y la cantidad a pagar es de: ${this.total}`)
    }
}

console.log(reservacion.informacion());
console.log(reservacion2.informacion());