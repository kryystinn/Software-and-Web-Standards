"use strict";
class Geolocalizacion {

  initMap() {
    var eii = {
      lat: 43.354806,
      lng: -5.851277
    };
    var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 16,
      center: eii,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Localización encontrada');
        infoWindow.open(mapaGeoposicionado);
        mapaGeoposicionado.setCenter(pos);
      }, function () {
        this.handleLocationError(true, infoWindow, mapaGeoposicionado.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, infoWindow, mapaGeoposicionado.getCenter());
    }
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: Ha fallado la geolocalización' :
      'Error: Su navegador no soporta geolocalización');
    infoWindow.open(mapaGeoposicionado);
  }

}

var mapaDinamicoGoogle = new Geolocalizacion();