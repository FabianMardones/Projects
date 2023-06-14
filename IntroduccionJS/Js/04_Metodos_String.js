const producto = "Monitor de 20 pulgadas"
const producto2= String('Monitor 30 pulgadas');
const producto3= new String('Monitor 50 pulgadas');

console.log(typeof producto)
console.log(typeof producto2)
console.log(typeof producto3)


const tweet = "Aprendiendo Javascript con el curso de Desarrollo Web Completo"
const producto4 = 'Monitor HD';
const email = 'correos@correo.com'

//lenght es para la extension
console.log(tweet.length);
console.log(producto4);

//IndexOf (retorna posición)
console.log(tweet.indexOf('Javascript'));
console.log(producto4.indexOf('Tablet'));
console.log(email.indexOf('@'));

// Includes (retorna true o false)
console.log(tweet.includes('Javascript'));
console.log(producto4.includes('Tablet'));



