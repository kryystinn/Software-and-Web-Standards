"use strict"
class Ejercicio11 {

    constructor(){
        this.baseurl = "https://es.wikipedia.org/w/api.php?action=opensearch&search=";
    }

    buscarArticulo(){
        $("#output").html("");
        var searchTerm = $("#searchTerm").val();
        var url = this.baseurl + searchTerm +"&format=json&callback=?"; 
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function(data, status, jqXHR){
                console.log(data);
                console.log(searchTerm);
                $("#output").html();
                for (var i=0; i < data[1].length; i++){
                    $("#output").append("<div></div><div class='btn-primary'> <a href="+data[3][i]+"><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
                }
            }
        })
    }

    
}
var e = new Ejercicio11();