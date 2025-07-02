let prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt('Digite o primeiro nr: '));
let numero2 = parseFloat(prompt('Digite o segundo nr: '));

console.log('O resultado da soma é: ', (numero1 + numero2));
console.log('O resultado da subtração é: ', (numero1 - numero2));
console.log('O resultado da multiplicação é: ', (numero1 * numero2));
console.log('O resultado da divisão é: ', (numero1 / numero2).toFixed(2));
