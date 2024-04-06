//Nome: João Victor da Silva Sales
//Trilha: Backend
const prompt = require('prompt-sync')();

let dataNascimento = prompt('Digite a data no formato yyyy-MM-dd: ');
dataNascimento = dataNascimento.split('-');

let nowDay = new Date().getDate();
let nowMonth = new Date().getMonth()+1;
let nowYear = new Date().getFullYear();

let idade = (nowYear-dataNascimento[0]);
if(nowMonth < dataNascimento[1] && nowDay<dataNascimento[2]){
    //caso ainda nao esteja depois do aniversario da pessoa
    idade--;
}
console.log(`Idade atual é: ${idade}`);
