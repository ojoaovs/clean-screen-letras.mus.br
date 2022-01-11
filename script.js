//Espaçamento inferior dos parágrafos.
var prg = document.querySelectorAll('p');
var i;
for (i = 0; i < prg.length; i++) {
  prg[i].style = "margin-bottom: 4rem; width: 32ch;";
}

//Remoção de Todas as Imagens da Página.
var img = document.querySelectorAll('img');
var x;
for (i = 0; i < prg.length; i++) {
  img[i].remove();
}

//Título da Música
var letra = document.querySelector('.cnt-head').innerHTML;
//Letra da Música
var letra1 = document.querySelector('.cnt-letra').innerHTML;
//Selecionar o Corpo do Site
var bod = document.querySelector('body');
//Setando o Corpo do Site Apenas o Título e a Letra da Música.
bod.innerHTML = letra + letra1;

//BUG RESOLVIDO?? 
//-> Remoção da Div de Contagem de Visualizações
document.querySelector(".cnt-info_exib").remove();

//Estilização no Corpo do Site.
bod.style.cssText = "padding-left: 8rem; padding-bottom: 10rem;";
bod.style.fontSize = "30px";
bod.style.lineHeight = "50px";
document.querySelector("h1").style.cssText = "font-weight: bold; color: #f60; font-size: 40px;"

//Créditos no Console
console.clear();
console.log("############################");
console.log("Clean Screen Letra.mus.br");
console.log("> For Show in Chruch");	
console.log("> Created by: João Silva");
console.log("> Git: github.com/ojoaovs");
console.log("############################");

setTimeout(()=>{alert("Arraste e coloque essa janela na tela que está apresentando e aperte F11. Ajuste o zoom com CTRL + Scroll do Mouse.")}, 500);
