let prompt = require('prompt-sync')();
let nomeAluno = prompt('Nome do aluno: ');
// let nota1 = 7;
// let nota2 = 9;
// let nota3 = 10;
// let soma = (nota1+nota2+nota3);
// let media = (soma/3).toFixed(2);

// console.log('Nome: ' + aluno + ', Média: ' + media );

let notas = [];
let somaNotas= 0;
let numeroProvas = 3;

for (let i=0; i<numeroProvas; i++){
    let nota = parseFloat(prompt('digite a nota da prova: '), + (i))
    notas.push(nota);
    somaNotas += nota;
}
let mediaNotas = (somaNotas/numeroProvas);

console.log('O aluno: ', nomeAluno + 'possui' + 'a media', mediaNotas);



