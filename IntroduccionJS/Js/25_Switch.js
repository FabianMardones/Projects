const metodoPAgo = 'efectivo'

switch(metodoPAgo){
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
    case 'cheque':
        console.log('El usuario pagará con cheque, revisaremos los fondos primero');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    default:
        console.log('Aún no haz pagado');
        break;
}