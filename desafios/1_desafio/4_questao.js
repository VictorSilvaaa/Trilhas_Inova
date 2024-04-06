//Nome: João Victor da Silva Sales
//Trilha: Backend
const prompt = require('prompt-sync')(); 

let numbers = [23,16,11,8,19,14,5,21];
let primos = [];

for (let index = 0; index < numbers.length; index++) {
    if(numbers[index]==2 || numbers[index]==3){
        primos.push(numbers[index])
    }else if(numbers[index]%2 == 0 || numbers[index]%3==0){
        continue;
    }else{
        let cont = 5;
        let is_primo = true;
        //testa apenas impares ate o numero
        while(cont<numbers[index]){
            if(numbers[index]%cont == 0){
                is_primo = false
            }
            cont +=2;
        }
        if(is_primo){
            primos.push(numbers[index]);
        }
    }
}

console.log("Os primos sao: "+ primos)



