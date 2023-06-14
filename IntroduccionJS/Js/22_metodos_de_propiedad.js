

const reproductor = {
    repoducir : function(id){
        console.log(`Reproduciendo cancion con el ID: ${id}`)
    },
    pausa : function(){
        console.log(`Pausando... `)
    },
    crearPlaylist : function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist : function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`)
    },
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion: ${id}`)
}

reproductor.repoducir(3840)
reproductor.pausa()
reproductor.borrarCancion(20)
reproductor.crearPlaylist('ayayayayai')
reproductor.reproducirPlaylist('ayayayayai')
