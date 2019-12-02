class CalculadoraBasica {

    constructor(){
        this.memory = 0;
    }

    get input(){
        return document.getElementById("result");
    }

    setMemVal(val){
        this.memory = val;
    }

    dis(value){
        if (this.input.value == "0"){
            this.clear();
        }
        this.input.value += value;
    }

    clickMrc(){
        this.input.value = this.memory;
    }

    clickMMinus(){
        this.setMemVal(Number(this.memory) - Number(this.input.value));
        this.clear();
    }

    clickMPlus(){
        this.setMemVal(Number(this.memory) + Number(this.input.value));
        this.clear();
    }

    dec(){
        if (this.input.value == ""){
            this.input.value = "0";
        }
        this.input.value += ".";
    }

    sum(){
        this.input.value += "+";
    }

    subs(){
        this.input.value += "-";
    }

    mult(){
        this.input.value += "*";
    }

    div(){
        this.input.value += "/";
    }

    clear(){
        this.input.value = "";
    }

    solve(){
        this.input.value = eval(this.input.value);
    }
}

var cb = new CalculadoraBasica();