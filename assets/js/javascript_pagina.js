class printando_na_tela{

    constructor(element){
        console.log(element)
        this.tag_ancora= element
    }

    // precisa melhorar a estrutura dos dados que v'ao para o div.innerHTML
    estruturar_elemento(element){
      console.log(element)
      console.log("asiudauhsidhis")
        this.element = element

    let div = $(`
    
    <div class="col-sm-4">

    
    <div class="card-container">
      <div class="card">
        <div class="card__img card__img--js" style="background-image: url('${element.imagem_front}');"></div>
        <h2 class="card__title">${element.post_title}</h2>
        <p class="card__description">${element.post_des}</p>
        <div class="card__read">Read more</div>
      </div>
    </div>

  </div>

    `).on("click", ()=> this.clicou())
 

    //    <div class="col-sm-4">
    // <div class="card">
    // <div class="card__img card__img--react"></div>
    //   <h2 class="card__title"><p><a href="${element.url}"> ${element.post_title} </a></p></h2>
    //   <p class="card__description">${element.post_des}</p>
    //   <div class="card__read"><a href="${element.url}"> Se aprochega! Vem conferir! </a></div>
    // </div>
    // </div>

    // style="background-image: url('${element.imagem_front}');"

    // <div> <p> Isso deve se tornar um cartao
    // <p/>
    // <p><a href="${element.url}"> ${element.post} </a></p>
    //     <img src="${element.imagem_front}" alt="Minha Figura">	
    // </div>
    this.tag_ancora.append(div)
    // console.log(div)

    // return div
}

clicou(){
    console.log("cliucouasd")
    window.location.href = this.element.url;

}

}



