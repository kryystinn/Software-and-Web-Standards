"use strict";
class Geolocalizacion {

    initMap(){
        var eii = {lat: 43.354806, lng: -5.851277};
        var mapaOviedo = new google.maps.Map(document.getElementById('mapa'),{zoom: 14,center:eii});
        var marcador = new google.maps.Marker({position:eii,map:mapaOviedo});
    }
    
}
var mapaDinamicoGoogle = new Geolocalizacion();