"use strict"
class Ejercicio6 {

    get title(){
        return document.getElementById("title");
    }

    get newTitle(){
        return document.getElementById("newTitle");
    }
    get ul() {
        return document.getElementById("ideas");
    }

    deleteEmptyList(){
        var empty = document.getElementById("empty");
        empty.parentNode.removeChild(empty);
    }

    clearIdeaField(){
        document.getElementById("newIdea").value = "...";
    }
    
    newProject(){
        if (this.newTitle.value != "")
           this.title.innerHTML = this.newTitle.value;
    }

    newIdea(){
        var newIdea = document.getElementById("newIdea").value;
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(newIdea));
        this.ul.appendChild(li);
        if (document.getElementById("empty") != null)
            this.deleteEmptyList();
        this.clearIdeaField();

        this.createButtonDelete(li);
            
    }
    
    createButtonDelete(li) {
        var b = document.createElement("button");
        b.appendChild(document.createTextNode("Delete"));
        li.appendChild(b);
        this.deleteIdea(li, b);
    }

    deleteIdea(li, b) {
        b.addEventListener("click", function(e) {
            li.parentNode.removeChild(li);
        });
    }
    
}
var e = new Ejercicio6();