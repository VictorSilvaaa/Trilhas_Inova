//Nome: João Victor da Silva Sales
//Trilha: Backend
const prompt = require('prompt-sync')();

function encontraFatorial(number){
    if(number == 1){
        return 1
    }
    return encontraFatorial(number-1) * number
}

let number = prompt("Digite um numero para calcular o fatorial: ")

console.log("O fatorial é: "+ encontraFatorial(Number(number)))

