let prompt = require('prompt-sync')();
let ValorCompra = parseFloat(prompt('Digite o valor da compra: '));
let prestacoes = (ValorCompra/5);

console.log('O valor das prestações é: ', prestacoes);
