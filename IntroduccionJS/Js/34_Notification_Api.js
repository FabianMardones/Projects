
const boton = document.querySelector('#boton');

boton.addEventListener('click', function(){
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es ${resultado}`))
});

if(Notification.permission == 'granted'){
    new Notification('Prueba de notificacion', {
        icon:'img1.png',
        body: 'FabiancitoSuccess',
    })
}