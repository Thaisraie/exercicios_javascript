const leia = require('readline-sync');

let salarioB,adcN,hE,des;

salarioB = leia.questionFloat("Insira o Salario Bruto:");
adcN = leia.questionFloat("\nInsira o Adicional Noturno:");
hE = leia.questionFloat("\nInsira as Horas Extras:");
des = leia.questionFloat("\nInsira os Descontos:");

salarioL = (salarioB+adcN) + (hE*5) - (des);

console.log("\nO seu Salario Líquido é: " + salarioL.toFixed(2));
