"use strict"
class FlipImage {

    init() {
        this.loadCanvas()
        this.initFile()
    }

    initFile() {
        this.fileDrag = document.getElementById("filedrag");
        if (window.File && window.FileList && window.FileReader) {
            var xhr = new XMLHttpRequest();
            if (xhr.upload) {
                this.fileDrag.addEventListener("dragover", this.fileDragHover, false);
                this.fileDrag.addEventListener("dragleave", this.fileDragHover, false);
                this.fileDrag.addEventListener("drop", event => this.fileSelectHandler(event, this), false);
            }
        }
    }

    fileSelectHandler(e, classObject) {
        e.stopPropagation();
        e.preventDefault();

        var files = e.target.files || e.dataTransfer.files;
        if (FileReader && files && files.length) {
            classObject.loadImage(files)
        }
    }

    fileDragHover(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    loadImage(files) {
        var file = files[0];
        if (file.type == "image/png" || file.type == "image/jpeg") {
            var reader = new FileReader();
            var ctx = this.ctx
            var canvas = this.cnvs
            reader.onload = function (e) {
                var img = new Image();
                img.onload = function(){
                    canvas.width = img.width;
                    canvas.height = img.height;
    
                    mirrorImage(ctx, img, 0, 0, true)
                    if ($('#descargar').attr("disabled")) {
                        $('#descargar').attr("disabled", false);
                    }
                    
                    function mirrorImage(ctx, image, x = 0, y = 0, horizontal = false, vertical = false){
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.save(); 
                        ctx.setTransform(
                            horizontal ? -1 : 1, 
                            0,
                            0, 
                            vertical ? -1 : 1,
                            x + horizontal ? image.width : 0,
                            y + vertical ? image.height : 0
                        );
                        ctx.drawImage(image,0,0);
                        ctx.restore();
                    }
                }
                img.src = reader.result;
            };
            reader.readAsDataURL(file);
        } else {
            document.getElementById("aviso").classList.add("warning")
        }
    }

    

    loadCanvas(){
        this.cnvs = document.getElementById('cnvs')
        this.ctx = this.cnvs.getContext('2d')

        this.cnvs.width = window.innerWidth;
        this.cnvs.height = window.innerHeight;
        this.ctx.scale(-1, 1);
    }

    download() {
        var a = document.createElement('a');
        a.href = this.cnvs.toDataURL("image/png");
        a.download = "flipped.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

var m = new FlipImage();