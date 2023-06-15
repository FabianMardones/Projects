const usuarioAutenticado = new Promise( (resolve,reject) => {
    const auth = false;

    if(auth){
        resolve('Usuario Autenticado'); //el promise se cumple
    }else{
        reject('No se pudo iniciar sesión'); // el promise no se cumple
    }
});

usuarioAutenticado
    .then(function(resultado){
        console.log(resultado)
    })
    .catch(function(error){
        console.log(error);
    })

    usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))


// en los promises existen 3 valores posibles
// Pending: no se han cumplido pero tampocp se ha rechazado, falta algo más por hacer
// Fulfilled: ya se cumple
// Reject: se ha rechazado o no se pudo complir