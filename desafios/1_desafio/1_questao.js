//Nome: João Victor da Silva Sales
//Trilha: Backend

const prompt = require('prompt-sync')(); 

console.log("----Calculo de nota----")
const nota1 = Number(prompt('Digite sua primeira nota (0 até 10):  '));
const nota2 = Number(prompt('Digite sua segunda nota (0 até 10):  '));
const nota3 = Number(prompt('Digite sua terceira nota (0 até 10):  '));

let media = (nota1 + nota2 + nota3)/3;

console.log(`O resultado final da média é: ${media}`)

