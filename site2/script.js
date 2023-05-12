//criando a variavel global
let temp
//criando a funcao tempo 
function tempo(){
    //declarando as variaveis 
    let relogios = document.querySelector("#main");//linkando com o id (#)[getelementbyid]usando querySelector
    let hora= new Date();
    //chamando o relogio para a tela com 11 digitos 
    relogios.innerHTML=(hora.toLocaleString()).slice(-8);//innerHTML= document.write
}
//chamando queryselector
document.querySelector("#ligar").addEventListener('click', ()=>{//adiciona um evento no id, no botao +()=>{} [mini funcao chamada dentro da funcao principal, arrow function]
temp = setInterval(tempo,1000)

})
document.querySelector("#desligar").addEventListener('click',()=>{
    clearInterval(temp)//para de executar a atualizacao temporaria 
})