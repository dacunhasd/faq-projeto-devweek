//buscar os items da tela
const itemsPerguntaseRespostas = document.querySelectorAll("item");
console.log(itemsPerguntaseRespostas)
alert("ola mundo")
//entender que o item foi clicado
itemsPerguntaseRespostas.forEach(function(item) {
    item.addEventListener("click",function(){
        //verificar se a pergunta clicada esta ativa
        const estaAtiva = item.classList.contains("ativo")

    //se a pergunta nao esta ativa
    if(!estaAtiva) {
        //eu preciso fehar  todas
        itemsPerguntaseRespostas.forEach(function(item){
        item.classList.remove("ativo")
            })

            //abrir a reposta atual
            item.classList.add("ativo")
            //se a per
} else {
    item.classList.remove("ativo")
}
    
    })
})
