const leia = require('readline-sync');

let salario,abono;

salario = leia.questionFloat("Digite o Salario: ");
abono = leia.questionFloat("\nDigite o Abono: ");

novoSalario = (salario + abono);

console.log("\nNovo Salário: " + novoSalario.toFixed(2));

