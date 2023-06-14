

function calcuadora(a,signoAritmetico,b){
    if (signoAritmetico == "+"){
        return a + b
    }
    else if(signoAritmetico == "-"){
        return a - b
    }
    else if(signoAritmetico == "/"){
        return a / b
    }
    else if(signoAritmetico == "*"){
        return a * b
    }
}
console.log(calcuadora(19, '/', 5))