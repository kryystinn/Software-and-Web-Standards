"use strict"
class Mapa {
    
    constructor(){
        this.map;
    }
    
    
    initMap() {
        var eii = {lat: 43.354806, lng: -5.851277};
        this.map = new google.maps.Map(document.getElementById('mapa'), {center: eii,zoom: 3.5, mapTypeId: 'satellite'});
    }
     loadGeoJSON(files) {
        var file = files[0];
        var map = this.map;
            var reader = new FileReader();
            reader.onload = function (e) {
                var geo = JSON.parse(reader.result);
                map.data.addGeoJson(geo);
            };
                reader.readAsText(file);
        }
}

var m = new Mapa();