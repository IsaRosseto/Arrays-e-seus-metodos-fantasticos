// 1. Faça um algoritmo para ler 20 números e armazenar em um array. Após a leitura total dos 20 números, o algoritmo deve escrever esse array.


var contagem =0
var numero=[]

while(contagem<=20){
    var numeroRecebido= parseInt(prompt("Digite um número"));
    numero.push(numeroRecebido)
    contagem++
}
document.write(numero);



