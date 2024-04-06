//Nome: João Victor da Silva Sales
//Trilha: Backend
const prompt = require('prompt-sync')();

let vida = 100;
let qtdAtaques = Number(prompt('Informe a quantidade de ataques: '));
if(qtdAtaques>5 ){
    console.log('valor ira passar de 100, arrendondado para 5 ataques')
    qtdAtaques = 5
}else if(qtdAtaques<0){
    console.log('valor negativo, arredondado para 0 ataques')
    qtdAtaques = 0
}
vida = vida - qtdAtaques*20

console.log(`A vida restante apos ${qtdAtaques} ataques vai ser ${vida}`);

