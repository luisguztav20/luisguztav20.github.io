window.addEventListener('load', function(){
    console.log("Contenido cargado")

    var imagenes = [];
    imagenes[0] = '/imagenes/v1.jpg';
    imagenes[1] = '/imagenes/v2.jpg';
    imagenes[2] = '/imagenes/v3.jpg';
    imagenes[3] = '/imagenes/v4.jpg';
    var tiempo = 5000;
    var indiceImagenes = 0;
    function cambiarImagenes(){
        document.slider.src = imagenes[indiceImagenes];
        if(indiceImagenes < 3){
            indiceImagenes++;
        } else {
            indiceImagenes = 0;
        }
    }

    this.setInterval(cambiarImagenes, tiempo);

});

window.addEventListener('load', function(){
    console.log("Contenido cargado")

    var imagenes = [];
    imagenes[0] = '/imagenes/h1.jpg';
    imagenes[1] = '/imagenes/h2.jpg';
    imagenes[2] = '/imagenes/h3.jpg';
    imagenes[3] = '/imagenes/h4.jpg';
    var tiempo = 5000;
    var indiceImagenes = 0;
    function cambiarImagenes(){
        document.slider2.src = imagenes[indiceImagenes];
        if(indiceImagenes < 3){
            indiceImagenes++;
        } else {
            indiceImagenes = 0;
        }
    }

    this.setInterval(cambiarImagenes, tiempo);

});
