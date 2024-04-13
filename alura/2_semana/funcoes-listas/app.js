let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas =1 ;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        let palavratentativa = tentativas>1?'tentativas': 'tentativa';
        let mensagensTentativas = `Você descobriu o numero secretoc com ${tentativas} ${palavratentativa}`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número é menor do que o chute');
        }else{
            exibirTextoNaTela('p', 'o numero secreto é maior');
        }
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
    let qtdElementosNaLista = listaDeNumerosSorteados.length;
    if(qtdElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''
}
function reniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas= 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}