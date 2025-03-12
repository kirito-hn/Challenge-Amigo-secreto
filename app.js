//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

function verificarNome(){
    let nome=document.querySelector('input').value.trim();
    if (nome!=""){
        if(nomes.includes(nome)){
            alert("Nome já existe no array, digite um nome diferente");
        }else{
            nomes.push(nome);
        }
    }else{
        alert("Por favor, insira um nome.");
    } 
    limparCampo();
    apagarLista('listaAmigos');
    atualizarLista();
}

function sortearAmigo(){
    let qtdAmigos=nomes.length;
    let sorteio=Math.floor((Math.random()*qtdAmigos));
    let resultado = document.getElementById("resultado");
    apagarLista('listaAmigos');
    resultado.innerHTML = "Amigo sorteado é " + nomes[sorteio];
}

function atualizarLista(nome){
    let lista = document.getElementById("listaAmigos");
    apagarLista('listaAmigos');
    for(i=0;i<=nomes.length;i++){
        let item = document.createElement('li');
        item.textContent=nomes[i];
        lista.appendChild(item);
    }
}

function apagarLista(elemento){
    let lista=document.getElementById(elemento);
    lista.innerHTML="";

}

function limparCampo(){
    lista=document.querySelector('input');
   lista.value='';
}


function reiniciar(){
    nomes=[];
    apagarLista('listaAmigos');
    apagarLista('resultado');

}