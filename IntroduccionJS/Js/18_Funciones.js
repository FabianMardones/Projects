

// Declaración de funcion

function sumar(){
    console.log(10 * 10);
}
sumar();

// Expresion de la funcion

const sumar2 = function() {
    console.log(3 + 3);
}
sumar2();

// IIFE

(function(){
    const nombre = 'Fabian' //Sirven para no ser llamadas desde otro archivo, de esta forma protegen una funcion
})();


// El joystin, se refiere a que javascript se ejecuta en dos vueltas
// la primera etapa se le conoce como la etapa de creación donde están la creaciones de la Fx y las variables
// la segunda es la de ejecución, que es donde se manda a llamar al código.
//en la primera llamada, registra la Fx y en la segunda manda a llamar la Fx
// cuando declaramos una función, por ser función el llamado puede ser en cualquier parte y dará el resultado, pero 
// al contrario sucede si escribo una función como variable, ya que javascript un const no lo reconoce como funcion
// y si se llama por sobre ella, arrojará un error.
