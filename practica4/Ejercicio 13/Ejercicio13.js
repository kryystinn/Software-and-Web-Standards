"use strict"
class Reader {

    leerArchivoTexto(files) { 
    //Solamente toma un archivo
    //var archivo = document.getElementById("archivoTexto").files[0];
    var file = files[0];
    var nombre = document.getElementById("nombreArchivo");
    var tamaño = document.getElementById("tamañoArchivo");
    var tipo = document.getElementById("tipoArchivo");
    var ultima = document.getElementById("ultimaModificacion");
    var contenido = document.getElementById("contenidoArchivo");
    var areaVisualizacion = document.getElementById("areaTexto");
    var errorArchivo = document.getElementById("errorLectura");
    nombre.innerText = "Nombre del archivo: " + file.name;
    tamaño.innerText = "Tamaño del archivo: " + file.size + " bytes"; 
    tipo.innerText = "Tipo del archivo: " + file.type;
    ultima.innerText = "Fecha de la última modificación: " + file.lastModifiedDate;
    contenido.innerText="Contenido del archivo de texto:"
    //Solamente admite archivos de tipo texto, json o xml
    var tipoTexto = /text.*/;
    var tipoJson = "application/json";
    var tipoXml = "application/xml";
    if (file.type.match(tipoTexto) || file.type.match(tipoJson) || file.type.match(tipoXml)){
        var lector = new FileReader();
        lector.onload = function (e) {
          areaVisualizacion.innerText = lector.result;
          }      
        lector.readAsText(file);
        }
    else {
         errorfile.innerText = "Error : ¡¡¡ Archivo no válido !!!";
        }       
}

}

var r = new Reader();