let prompt = require('prompt-sync')();
let distancia = parseFloat(prompt('Digite a distância percorrida: '));
let consumo = parseFloat(prompt('Digite o consumo de seu automóvel: '));
let media= (consumo/distancia).toFixed(3);

console.log('O consumo médio de seu automóvel da distância a ser percorrida é: ', media);


