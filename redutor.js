/*
	Country: Brasil
	State: Pernambuco
	Developer: Matheus Johann Araújo
	Date: 2018-05-30
    Bitbucket: https://bitbucket.org/matheusjohannaraujo/expansor_redutor/
*/

function redutor(){
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
    isDebug ? console.log("Entrada", vetorNumeros) : false;
    return (function recursive(){
        var contador = 0;
        for(var i = 0, j = vetorNumeros.length; i < j; i++){
            vetorNumeros[i] /= mediador;
            if(noIntervalo(vetorNumeros[i]) && noIntervalo(vetorNumeros[i] / mediador)){
                contador++;
            }            
        }
        isDebug ? console.log("Saida", vetorNumeros) : false;
        countMediador *= mediador;
        repeticoes++;
        if(contador == vetorNumeros.length || repeticoes == numerosRepeticoes){
            return {
                "multiplicador" : countMediador,
                "repeticoes" : repeticoes,
                "vetorNumeros" : vetorNumeros
            };
        }        
        return recursive(min, max, mediador, vetorNumeros);   
    })();
}

//redutor(intervaloMin, intervaloMax, divisor, vetorComOsNumerosParaReducao, passosDeReducao, exibeReducao);
var resultado = redutor(-3, 9, 2, [-500, -13, 300, 17], -1, true);
console.log(resultado);
