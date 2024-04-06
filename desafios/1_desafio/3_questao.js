//Nome: João Victor da Silva Sales
//Trilha: Backend
const prompt = require('prompt-sync')(); 

const numbers = [12,5,23,17,8,14,3,19]; //frascos

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

console.log("Os frascos organizados sao: "+ numbers)



