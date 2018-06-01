//Matheus Johann Araújo
function expansor(){
    var min = arguments[0];
    var max = arguments[1];
    var mediador = arguments[2];
    var vetorNumeros = arguments[3].slice();
    var numerosRepeticoes = arguments[4] ? arguments[4] : -1;
    var isDebug = arguments[5] ? arguments[5] : false;
    var countMediador = 1;
    var repeticoes = 0;
    function noIntervalo(n){
        return (min <= n && max >= n) ? true : false;
    }
    isDebug ? console.log("Entrada:", vetorNumeros) : false;
    return (function recursive(){
        for(var i = 0, j = vetorNumeros.length, roll = false; i < j;){    
            if(roll && i == -1 || repeticoes == numerosRepeticoes){
                return {
                    "divisor" : countMediador,
                    "repeticoes" : repeticoes,
                    "vetorNumeros" : vetorNumeros
                };
            }
            if(roll){
                vetorNumeros[i] /= mediador;            
            }
            if(noIntervalo(vetorNumeros[i]) && noIntervalo(vetorNumeros[i] * mediador) && !roll){
                vetorNumeros[i] *= mediador;
                i++;
            }else{
                roll = true;
                i--;
            }
        }
        isDebug ? console.log("Saida:", vetorNumeros) : false;
        countMediador *= mediador;
        repeticoes++;
        return recursive();
    })();
}

console.log("Desenvolvedor: Matheus Johann Araújo");
x = [-1.953125, -0.05078125, 1.171875, 0.06640625];
y = expansor(-500, 300, 2, x, -1, true);
console.log(y);