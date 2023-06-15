
function descargarNuevosClientes(){
    return new Promise(function(resolve){
        console.log('Descargando Clientes... espere...');

        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        }, 5000)
    })
}

function descargarUltimosPedidos(){
    return new Promise(function(resolve){
        console.log('Descargando pedidos... espere...');

        setTimeout( () => {
            resolve('Los pedidos fueron descargados');
        }, 3000)
    })
}


async function app(){
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        //Para optimizar un llamado async/await se debe usar Promise.all que tiene paréntesis por que es una funcion pero a la vez también es un arreglo, entonces van los corchetes dentro de ella, un arreglo de promises para ir ejecutando una y otra.
        const resultado = await Promise.all([descargarNuevosClientes(), await descargarUltimosPedidos()])
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
    
    app();


// async function app(){
// try {
//     const resultado = await descargarNuevosClientes();
//     console.log(resultado);
// } catch (error) {
//     console.log(error);
// }
// }

// app();

// console.log('Este codigo nose bloquea');


// setTimeout(function(){ // timeOut lo hará sólo una vez
//     console.log('set timeout...');
// }, 5000); // Esta funcion es en milisegundos

// setInterval(function(){ // Interval va a esperar la cantidad y arrojará el mensaje a la consola
//     console.log('set timeout...');
// }, 5000); // Esta funcion es en milisegundos