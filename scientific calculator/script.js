let result = document.getElementById("result");

function insert(num) {
    result.value += num;
}

function clearDisplay() {
    result.value = "";
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error"
    }

    function sqrt() {
    result.value = Math.sqrt(result.value);
    }
    
    function pow() {
    result.value = Math.pow(result.value, 2);
    }
    
    function sin() {
    result.value = Math.sin(result.value);
    }
    
    function cos() {
    result.value = Math.cos(result.value);
    }
    
    function tan() {
    result.value = Math.tan(result.value);
    }
    
    function insert(functionName) {
    result.value += functionName;
    }
    
    function percentage() {
    result.value = eval(result.value) / 100;
    }
    
    function squareRoot() {
    result.value = Math.sqrt(eval(result.value));
    }
    
    function square() {
    result.value = eval(result.value) * eval(result.value);
    }
    
    function cube() {
    result.value = eval(result.value) * eval(result.value) * eval(result.value);
    }
    
    function inverse() {
    result.value = 1 / eval(result.value);
    }
    
    function logarithm() {
    result.value = Math.log10(eval(result.value));
    }
    
    function exponential() {
    result.value = Math.exp(eval(result.value));
    }
    
    function factorial() {
    let num = result.value;
    if (num === "") {
    result.value = "";
    return;
    }
    let res = 1;
    for (let i = 2; i <= num; i++) {
    res *= i;
    }
    result.value = res;
    }
    
    function pi() {
    result.value += Math.PI;
    }
    
    function e() {
    result.value += Math.E;
    }
    
    function radians() {
    result.value = (result.value * Math.PI) / 180;
    }
    
    function degrees() {
    result.value = (result.value * 180) / Math.PI;
    }
}