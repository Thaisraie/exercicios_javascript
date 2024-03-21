const leia = require('readline-sync');

let n1,n2,n3,n4;

n1 = leia.questionFloat("Digite o primeiro numero: ");
n2 = leia.questionFloat("\nDigite o segundo numero: ");
n3 = leia.questionFloat("\nDigite o terceiro numero: ");
n4 = leia.questionFloat("\nDigite o quarto numero: ");

diferenca = (n1*n2) - (n3*n4);

console.log("\nA diferença dos números 1 e 2 para 3 e 4 é: " + diferenca.toFixed(1));