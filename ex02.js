const leia = require('readline-sync');

let nota1,nota2,nota3,nota4;

nota1 = leia.questionFloat("Digite sua primeira Nota:");
nota2 = leia.questionFloat("\nDigite a segunda Nota:");
nota3 = leia.questionFloat("\nDigite a terceira Nota:");
nota4 = leia.questionFloat("\nDigite a quarta Nota:");

calculaMedia = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("\nMédia final do participante: " +calculaMedia.toFixed(1));

