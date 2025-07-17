let prompt = require('prompt-sync')();
let custoFabrica = parseFloat(prompt('Digite o custo de fábrica: '));
let calcdistribuidor = (custoFabrica*0.28).toFixed(2);
let distribuidor = (custoFabrica+calcdistribuidor);
let calcimposto = (custoFabrica*0.45).toFixed(2);
let imposto = (custoFabrica+calcimposto);
let precoFinal = (custoFabrica+calcdistribuidor+calcimposto).toFixed;

console.log('O valor do distribuidor sobre o preço de fábrica é: ' + calcdistribuidor + ', O valor do imposto sobre o preço de fábrica é: ' + calcimposto + ', o valor final da compra é: ' + precoFinal );
