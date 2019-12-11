"use strict"
class Mapa {

    initMap() {
        var eii = {lat: 43.354806, lng: -5.851277};
        this.map = new google.maps.Map(document.getElementById('mapa'), {center: eii,zoom: 3.5, mapTypeId: 'satellite'});
    }

   loadKML(files) {
       
    var geo = new geoXML3.parser({
        map: this.map,
        singleInfoWindow: true,
        infoWindow: this.map,
        zoom: true,
        afterParse: this.useTheData
    });

    var file = files[0];
    if (file.type == "application/vnd.google-earth.kml+xml") {
        var lector = new FileReader();
        lector.onload = function (e) {
            var result = lector.result;

            geo.fetchXML = function (url, callback) {
                $.ajax({
                    type: "GET",
                    url: url,
                    success: function (f) {
                        callback(f);
                    }
                });
            };

            geo.parseKmlString(result);
        }
        lector.readAsText(file);
    }
}

}

var m = new Mapa();
m.initMap = m.initMap();