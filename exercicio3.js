
var Inventario_Drofo = [
    "anel da invisibilidade",
    "par de botas mágicas" ,
    "par de botas mágicas" ,
    "poção do sono" ,
    "poção da inocência" ,
    "poção da inocência" 
]

var Inventario_Torper = [
    "capa da invisibilidade",
    "pedra do despertar",
    "varinha das varinhas",
    "poção da inocência",
    "poção da mentira",
    "poção da mentira",
    "poção anti-inteligênciancia"
]


// - Torper consumiu uma das poções da mentira 
// - Torper perdeu sua pedra 
// + Torper ganhou um par de botas mágicas do Drofo
// + Torper achou um escudo mágico
// + Torper achou uma espada mágica 


//O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos


Inventario_Torper.splice(4,1); //Topper consome uma poçao da mentira
Inventario_Torper.splice(1,1); //Perdeu sua pedra
Inventario_Drofo.splice(1,1); // Drofo doa Par de botas mágicas
Inventario_Torper.push ("par de botas mágicas"); //Topper recebe botas mágicas
Inventario_Torper.push ("escudo mágico"); //Topper encontra escudo mágico
Inventario_Torper.push ("espada mágica"); //Topper encontra espada mágica


// + Drofo ganhou um par de botas mágicas
// - Drofo usou uma poção do sono
// - Torper deu a poção anti-inteligência para Drofo
// - Drofo consumiu a poção anti-inteligência 
// + Drofo encontrou um ovo de dragão
// + Drofo encontrou uma coxinha 


Inventario_Drofo.push("Par de Botas Mágicas"); //Drofo ganhou um par de botas
Inventario_Drofo.splice(3,1);//usou sua poção do sono 
Inventario_Torper.splice(6,1);// Tooper deu a poção anti-inteligencia para Dofus
Inventario_Drofo.push ("poção anti-inteligênciancia") // Drofo recebeu a poção anti-inteligênciancia
Inventario_Drofo.splice(6,1); //Drofo consome a poção anti-inteligênciancia
Inventario_Drofo.push("Ovo de Dragão"); // Drofo encontra um ovo de dragão
Inventario_Drofo.push("Coxinha"); // Drofo enconha uma super coxinha

document.write ("<strong>"+"Inventario do Topper: "+"</strong>"+Inventario_Torper+"<br/>");
document.write("<strong>"+"Inventario do Drofo: "+"</strong>"+Inventario_Drofo);