/*Iniciando o desenvolvimento JS*/


/* --- exibir o alert
alert("Teste - Alert"); */

//Declaração de variável
var numeroA = 5;
var numeroB = 3;
var soma = numeroA + numeroB;
document.getElementById("soma").innerHTML = "Resultado da soma é: " + numeroA + " + " + numeroB + " = " + soma;

/* alert("Resultado: " + soma); */

/* Declaração de Constante - Const
são todas as variáveis que não irão sofrer alteração em tempo de execução. */

const numeroA_sub = 50;
const numeroB_sub = 20;
var subtracao = numeroA_sub - numeroB_sub;
// alert("Resultado é: " + subtração)
document.getElementById("subtracao").innerHTML = "Resultado da subtração é: " + numeroA_sub + 
" - " + numeroB_sub + " = " + subtracao;

// numeral não começa nome de variável
// O resultado de uma constante pode virar uma variável
// Constante não é sobre processo é sobre o resultado, operações não são constantes, são variáveis porque seu resultado muda


// O let é uma variável que pode ser usada em diversos locais do código, podendo ser alterada em tempo de execução

let numeroA_mult = 5;
let numeroB_mult = 2;
let multiplicacao = numeroA_mult * numeroB_mult;
document.getElementById("multiplicacao").innerHTML = "Resultado da multilicação é: " + numeroA_mult + " x " + numeroB_mult + " = " + multiplicacao;

//alert("Resultado - multi: " + Multiplicacao);

/*A última possibilidade de definir as variáveis é não colocar nenhum "prefixo".
*/
numeroA_div = 20;
numeroB_div = 2;
divisao = numeroA_div / numeroB_div;
document.getElementById("divisao").innerHTML = "Resultado da divisão é: " + numeroA_div 
+ " / " + numeroB_div + " = " + divisao;
// alert("Resultado - divisão: " + divisao);
