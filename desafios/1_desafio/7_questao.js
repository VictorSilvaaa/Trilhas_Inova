//Nome: João Victor da Silva Sales
//Trilha: Backend
const prompt = require('prompt-sync')();

let valor1 = Number(prompt("Digite valor do primeiro item: "));
let valor2 = Number(prompt("Digite valor do segundo item: "));
let valor3 = Number(prompt("Digite valor do terceiro item: "));
let somaTotal = valor1 + valor2 + valor3;

console.log(`O valor total é: ${somaTotal}`);

