const puntaje = '100';

if(puntaje !== 1000){
    console.log('no es igual')
}
else if(puntaje == 999){
    console.log('No cumple')
}




const efectivo = 1000;
const carrito = 800;

if(efectivo > carrito){
    console.log('el usuario puede pagar')
}
else{
    console.log('Fondos insuficientes');
}



const rol = 'administrador';
if ( rol === 'administrador'){
    console.log('Acceso a todo el sistema');
}
else if(rol === 'editor'){
    console.log('eres editor, solo tpuedes entrar pero no hacer mucho');
}
else{
    console.log('no tienes aceso');
}