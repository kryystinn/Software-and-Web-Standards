"use strict"
class Ejercicio10 {
    constructor(){
        this.apikey = "2c158d2370f088a5ea9d3f731dd855f2";
        this.url = "http://data.fixer.io/api/latest?access_key=" + this.apikey;
    }
    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){             
    
                var rateGbp = datos.rates.GBP;
                var rateDollar = datos.rates.USD;
                var rateBitcoin = datos.rates.BTC;
                var ratePesoMex = datos.rates.MXN;
                var rateYen = datos.rates.JPY;
               $("#gbp").append(rateGbp);
               $("#usd").append(rateDollar);
               $("#btc").append(rateBitcoin);
               $("#mxn").append(ratePesoMex);
               $("#jpy").append(rateYen);

              } , 
            error:function(){
                $("h2").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://data.fixer.io/'>DataFixer.io</a>");
            }
            
            
        });

    }
    
}
var e = new Ejercicio10();
e.cargarDatos();