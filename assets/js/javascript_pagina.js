class printando_na_tela{

    constructor(element){
        this.tag_ancora= element
    }

    // precisa melhorar a estrutura dos dados que v'ao para o div.innerHTML
    estruturar_elemento(element){
    let div = document.createElement("div")
    div.innerHTML =`<div> <p> Isso deve se tornar um cartao
    <p/>
    <p><a href="${element.url}"> ${element.post} </a><p/>
        <img src="${element.imagem_front}" alt="Minha Figura">	
    </div>
    `

    return div
}

 mostra_interface(data){

// let lugar = document.getElementById("posts")
data.forEach(element => {
   let elemento =  this.estruturar_elemento(element)

    this.tag_ancora.append(elemento)
});

console.log(data)
}




}