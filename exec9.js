let prompt = require('prompt-sync')();
let deposito = parseFloat(prompt('Digite o valor do depósito: '));
let calculo = (deposito*0.007);
let ValorRendido = (calculo+deposito);

console.log('O rendimento do depósito foi de: ', calculo);
console.log('\nO valor total após rendimento é de: ', ValorRendido);
