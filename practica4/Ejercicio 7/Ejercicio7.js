"use strict"
class Ejercicio7 {

    constructor(){
        this.arbolDomMostrado = false;
    }

    ocultarElementos(){
        $("h2:first").hide();
        $("p:first").hide();
    }

    mostrarElementos(){
        $("h2:first").show();
        $("p:first").show();
    }

    modificarTitulo(){
        var newTitle = $("#newTitle").val();
        $("#titleChange").text(newTitle);
    }

    addTexto(){
        var text = $("#newCode").val();
        $("#add").append(text);
    }

    delete(){
        $(".delete").remove();
    }

    arbolDom(){
        if (!this.arbolDomMostrado){
            $("*", document.body).each(function(){
                var etiquetaPadre = $(this).parent().get(0).tagName;
                $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
            })
            this.arbolDomMostrado = true;
        }
    }

    tabla(){
        var rows = $("table tr").length;
        var columns = $("table tr th").length;
        $("#filascolumnas").val("Número de filas: " + rows + "; Número de columnas: " + columns);
    }

}

var e = new Ejercicio7();