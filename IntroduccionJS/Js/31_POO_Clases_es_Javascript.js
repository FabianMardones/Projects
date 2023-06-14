// Clases

class Producto {
    descuento = 20;
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
    formatearPrecioConDescuento(){
        return `Precio normal de $${this.precio}, pagando con tu tarjeta de la tienda tienes ${this.descuento}% OFF. Total a pagar $${this.precio-((this.precio*this.descuento)/100)}`
    }
}

const producto = new Producto('Laptop', 500000);
const producto2 = new Producto('Tablet', 200000);

console.log(producto.formatearProducto());
console.log(producto.formatearPrecioConDescuento());
console.log(producto2.formatearProducto());
console.log(producto2.formatearPrecioConDescuento());




class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio)
        this.isbn = isbn
    }
    formatearProducto (){
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`
    }
}

const libro = new Libro('Programando en JavaScript', 10000, '135113b351v')

console.log(libro.formatearProducto());

