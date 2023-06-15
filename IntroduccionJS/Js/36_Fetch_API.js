// Fetch API al igual que Ajax te permite enviar informacion al servidor u obetener información de un servidor, también va a permitir actualizar el sitio web o la aplicación, sin necesidad de cargar la página, es decir va a enviar los datos y los va a procesar detrás de escena, para actualizar el tiempo real nuestro sitio web.

function obtenerEmpleados(){

    const archivo = 'empleados.json';

    fetch(archivo) // estamos haciendo fetch a la constante archivo que contiene la dirección del archivo json
        .then( resultado => resultado.json()) // luego decimos, entonces (.then) el resultado va a ser un json (resultado.json()) y esto lo va a retornar al siguiente .then
        // .then ( datos => console.log(datos)) // entonces (.then) cuando ocurre lo anterior  accedemos a los datos.
        // es como decir, ok, que tipo de respuesta es esa? un json o es un texto? y también nos sirve para saber si la conexión fue correcta (primer.then) 
        // entonces teniendo listo esto, cómo puedo acceder a los empleados? 
        .then ( datos => {
            console.log(datos.empleados)
        })
        
            // ******entonces luego podemos realizar todos los pasos siguientes para desenvolver la información del archivo json, hasta que quede alojado en una variable y poder manipular los elementos.

            // const { empleados } = datos
            // console.log(empleados)

            // empleados.forEach( (empleado) =>{
            //     console.log(empleado);
            //     console.log(empleado.id);
            //     console.log(empleado.nombre);
            //     console.log(empleado.puesto);
            
                // ****si queremos visualizar este contenido en el html debemos usar siempre document.queryselector y luego entre paréntesis colocar la ubicación que queremos que tome dentro del HTML, y luego ubicarnos en qué información exacta queremos mostrar.***

                // document.querySelector('.contenido').textContent = empleado.nombre;
        // })

        //para utilizar con async/await y es mejor, ya que se utiliza menor código

}

// obtenerEmpleados();

async function obtenerEmpleados1(){

    const archivo = 'empleados.json'

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);

    
    const {empleados} = datos;

    // empleados.forEach(empleado => {
    //     console.log(empleado)
    // });
    
    const datosPP = empleados.map(empleados => `${empleados.nombre} - ${empleados.puesto}`)
    console.log(datosPP)

}


obtenerEmpleados1();
