//Nome: João Victor da Silva Sales
//Trilha: Backend
const prompt = require('prompt-sync')();

const frase = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";

let letrasMaisculas = frase.replace(/[a-z]/g, "");
let qtdLetrasMaisculas = letrasMaisculas.length;

console.log('Quantidade de caracteres maisculos é: '+ qtdLetrasMaisculas)
console.log('A frase so com maisculas é: '+letrasMaisculas)
