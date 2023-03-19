window.addEventListener('load', function(){
    console.log("Contenido cargado")

    var imagenes = [];
    imagenes[0] = 'img/v1.jpg';
    imagenes[1] = 'img/v2.jpg';
    imagenes[2] = 'img/v3.jpg';
    imagenes[3] = 'img/v4.jpg';
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
    imagenes[0] = 'img/h1.jpg';
    imagenes[1] = 'img/h2.jpg';
    imagenes[2] = 'img/h3.jpg';
    imagenes[3] = 'img/h4.jpg';
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