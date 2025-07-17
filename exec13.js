let prompt = require('prompt-sync')();
let numero = parseFloat(prompt('Digite o número: '));

if(numero > 10){

    console.log('Parabéns! Você passou de nível');
}else{

console.log('Que pena! Você ainda não passou de nível');
}