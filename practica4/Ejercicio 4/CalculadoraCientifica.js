"use strict"
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

class CalculadoraCientifica extends CalculadoraBasica{

    clickMc(){
        this.setMemVal(0);
    }

    power(){
        this.input.value = Math.pow(this.input.value, 2);
    }

    powerValue(){
        this.input.value += "**";
    }

    sin(){
        this.input.value = Math.sin(this.input.value);
    }

    cos(){
        this.input.value = Math.cos(this.input.value);
    }

    tan(){
        this.input.value = Math.tan(this.input.value);
    }

    root(){
        this.input.value = Math.sqrt(this.input.value);
    }

    tenPowerValue(){
        this.input.value = Math.pow(10, this.input.value);
    }

    log(){
        this.input.value = Math.log(this.input.value);
    }

    exp(){
        this.input.value += "e+";
    }

    mod(){
        this.input.value += "%";
    }

    pi(){
        this.input.value = Math.PI;
    }

    fact(){
		var res = 1.0;
		for (var i = this.input.value; i > 0; i--) { 
			res *= i;
		}
		this.input.value = res;
    }
    
    changeSign(){
        this.input.value = this.input.value * -1;
    }
}

var cc = new CalculadoraCientifica();