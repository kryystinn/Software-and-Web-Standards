"use strict"
class CalculadoraRPN {

    constructor(){
        this.memory = 0.0;
        this.pila = [];
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
        this.setMemVal(parseFloat(this.memory) - parseFloat(this.input.value));
        this.input.value = "";
    }

    clickMPlus(){
        this.setMemVal(parseFloat(this.memory) + parseFloat(this.input.value));
        this.input.value = "";
    }

    dec(){
        if (this.input.value == ""){
            this.input.value = "0";
        }
        this.input.value += ".";
    }

    sum(){
        var number2 = parseFloat(this.pila.pop());
        var number1 = parseFloat(this.pila.pop());
        var result = number1 + number2;
        this.input.value = result;
    }

    subs(){
        var number2 = parseFloat(this.pila.pop());
        var number1 = parseFloat(this.pila.pop());
        var result = number1 - number2;
        this.input.value = result;
    }

    mult(){
        var number2 = parseFloat(this.pila.pop());
        var number1 = parseFloat(this.pila.pop());
        var result = number1 * number2;
        this.input.value = result;
    }

    div(){
        var number2 = parseFloat(this.pila.pop());
        var number1 = parseFloat(this.pila.pop());
        var result = number1 / number2;
        this.input.value = result;
    }

    clear(){
        this.input.value = "";
        this.pila = [];
    }

    enter(){
        this.pila.push(this.input.value);
        this.input.value = "";
    }
    clickMc(){
        this.setMemVal(0);
    }

    power(){
        var number = parseFloat(this.pila.pop());
        this.input.value = Math.pow(number, 2);
    }

    powerValue(){
        var number2 = parseFloat(this.pila.pop());
        var number1 = parseFloat(this.pila.pop());
        var result = Math.pow(number1, number2);
        this.input.value = result;
    }

    sin(){
        var number = parseFloat(this.pila.pop());
        this.input.value = Math.sin(number);
    }

    cos(){
        var number = parseFloat(this.pila.pop());
        this.input.value = Math.cos(number);
    }

    tan(){
        var number = parseFloat(this.pila.pop());
        this.input.value = Math.tan(number);
    }

    root(){
        var number = parseFloat(this.pila.pop());
        this.input.value = Math.sqrt(number);
    }

    tenPowerValue(){
        var number = parseFloat(this.pila.pop());
        this.input.value = Math.pow(10, number);
    }

    log(){
        var number = parseFloat(this.pila.pop());
        this.input.value = Math.log(number);
    }

    exp(){
        var number2 = parseFloat(this.pila.pop());
        var number1 = parseFloat(this.pila.pop());
        var result = number1 * Math.pow(10, number2);
        this.input.value = result;
    }

    mod(){
        var number2 = parseFloat(this.pila.pop());
        var number1 = parseFloat(this.pila.pop());
        var result = number1 % number2
        this.input.value = result;
    }

    pi(){
        this.input.value = Math.PI;
    }

    fact(){
        var res = 1.0;
        var number = parseFloat(this.pila.pop());
		for (var i = number; i > 0; i--) { 
			res *= i;
		}
		this.input.value = res;
    }
    
    changeSign(){
        this.input.value = this.input.value * -1;
    }
}

var crpn = new CalculadoraRPN();