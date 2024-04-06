//Nome: João Victor da Silva Sales
//Trilha: Backend
const prompt = require('prompt-sync')(); 

let numbers = [];
let qtdNumbers = Number(prompt("Digite a quantidades de numeros que serao digitados: "));
if(qtdNumbers<0){
    qtdNumbers = qtdNumbers * (-1); //caso numero negativo
}
while(qtdNumbers>0){
    number = Number(prompt("Digite um valor para ser adicionado: "));
    numbers.push(number); //adiciona numero ao vetor
    qtdNumbers--;
}
//ordenar vetor caso tenha mais de 1 numero
if(numbers.length>1){
    for (let i = 0; i < numbers.length-1; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            let temp = numbers[i];
            if(numbers[j]<numbers[i]){
                numbers[i] = numbers[j]
                numbers[j] = temp;
            }  
        }
    }
}
console.log("O menor numero digitado é: "+ numbers[0]);
console.log('O maior numero digitado é: '+ numbers[numbers.length-1]);






