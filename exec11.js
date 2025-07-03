let prompt = require('prompt-sync')();
let precoCusto = parseFloat(prompt('Digite o preço de custo: '));
let porcentVenda = parseFloat(prompt('Digite o percentual de acrécimo da venda: '/100));
let calculo = (precoCusto*porcentVenda);
let precoVenda = (calculo+precoCusto);

console.log('O preço de venda é: ', precoVenda);


