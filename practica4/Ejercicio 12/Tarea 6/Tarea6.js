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
                infoWindow.setContent('Tu posición: ' + pos.lat.toFixed(6) + ", " + pos.lng.toFixed(6));
                infoWindow.open(mapaGeoposicionado);
                mapaGeoposicionado.setCenter(pos);
            }, function () {
                this.handleLocationError(true, infoWindow, mapaGeoposicionado.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            this.handleLocationError(false, infoWindow, mapaGeoposicionado.getCenter());
        }
        this.infoWindow = infoWindow;
        this.mapaGeoposicionado = mapaGeoposicionado
    }

    handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: Ha fallado la geolocalización' :
            'Error: Su navegador no soporta geolocalización');
        infoWindow.open(mapaGeoposicionado);
    }

    searchCoordinates() {
        var posS = {
            lat: document.getElementById("lat").value.trim(),
            lng: document.getElementById("lng").value.trim()
        };

        if (!posS.lat == "" && !posS.lng == "") {
            var pos = {
                lat: parseFloat(posS.lat),
                lng: parseFloat(posS.lng)
            };

            if (!isNaN(pos.lat) && !isNaN(pos.lng)) {
                this.infoWindow.setPosition(pos);
                this.infoWindow.setContent('La posición buscada es: ' + pos.lat.toFixed(6) + ", " + pos.lng.toFixed(6));
                this.infoWindow.open(this.mapaGeoposicionado);
                this.mapaGeoposicionado.setCenter(pos);
                return;
            }
        }
        this.infoWindow.setContent('Error, latitud o longitud incorrectos');
        this.infoWindow.open(this.mapaGeoposicionado);
    }

}

var miMapa = new Geolocalizacion();