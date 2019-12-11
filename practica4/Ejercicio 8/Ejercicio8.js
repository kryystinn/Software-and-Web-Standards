"use strict"
class Ejercicio8 {
    constructor(){
        this.apikey = "e73cf2821dc212bd56706297402178f9";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
        this.url = "";
    }
    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){             
                        
                        var stringDatos =  "<h3>" + datos.name + ", " + datos.sys.country + "</h3>";
                        stringDatos += "<img id=icon src=http://openweathermap.org/img/w/" + datos.weather[0].icon + ".png" +" alt=Imagen con el icono del tiempo/>";
                        stringDatos += "<p>"  +(datos.weather[0].description).toUpperCase(); + "</p>";
                        stringDatos += "<ul><li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                        stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                        stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                        stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>";
                        stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                        stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                        stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                        stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                        stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                        stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                        stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";

                        $("p").html(stringDatos);
              } , 
            error:function(){
                $("h2").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
            }
            
            
        });
    }
               
    Oviedo(){
        var ciudad = "Oviedo";
        var codigoPais = "ES";
        this.url = this.baseUrl + ciudad + "," + codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.cargarDatos();
    }
    Siauliai(){
        var ciudad = "Siauliai";
        var codigoPais = "LT";
        this.url = this.baseUrl + ciudad + "," + codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.cargarDatos();
    }
    Bergen(){
        var ciudad = "Bergen";
        var codigoPais = "NO";
        this.url = this.baseUrl + ciudad + "," + codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.cargarDatos();
    }
     
    Auckland(){
        var ciudad = "Auckland";
        var codigoPais = "NZ";
        this.url = this.baseUrl + ciudad + "," + codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.cargarDatos();
    }
    
    Kyoto(){
        var ciudad = "Kyoto";
        var codigoPais = "JP";
        this.url = this.baseUrl + ciudad + "," + codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.cargarDatos();
    }
    
    
    
    
}
var e = new Ejercicio8();