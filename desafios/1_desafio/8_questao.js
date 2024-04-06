//Nome: João Victor da Silva Sales
//Trilha: Backend
const prompt = require('prompt-sync')();

let dias = Number(prompt("Digite a quantidade de dias do atraso: "));
let multa = 0.5*dias;
multa = multa.toLocaleString('pt-br', {style:'currency', currency:"BRL"}) //converte
console.log(`O valor total é: ${multa}`);

