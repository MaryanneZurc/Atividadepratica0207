let prompt = require('prompt-sync')();
let nomeVendedor = prompt('Digite seu nome: ');
let Salario = parseFloat(prompt('Digite seu salário fixo: '));
let vendas = prompt('digite o nr de vendas no mês: ');
let calculo = (vendas*0.15);
let SalarioFinal= (calculo+Salario);

console.log('Nome do vendedor(a): ' + nomeVendedor + ', Salário fixo: ' + Salario + ', Salário após comissão: ' + SalarioFinal);
