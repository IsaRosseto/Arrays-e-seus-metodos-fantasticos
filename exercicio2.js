// 2. Faça um algoritmo para ler 12 números informados pelo usuário e armazenar em dois arrays: um com os números acima de 50. Outro com números abaixo de 50.


var maiorQue50=[]
var menorQue50=[]
var contador = 0 ;

while(contador<12){
    var numeroRecebido= parseInt(prompt("Digite um número"))
    contador++;
    if(numeroRecebido>50){
        maiorQue50.push(numeroRecebido)
    }else if(numeroRecebido<50){
        menorQue50.push(numeroRecebido)
    }
}
document.write("Os número maiores que 50 foram: "+ maiorQue50 + "<br/>"+"<br/>");
document.write("Os número menores que 50 foram:" + menorQue50 )