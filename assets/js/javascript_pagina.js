class printando_na_tela{

    constructor(element){
        this.tag_ancora= element
    }

    // precisa melhorar a estrutura dos dados que v'ao para o div.innerHTML
    estruturar_elemento(element){
    let div = $(`
    
    <div class="col-sm-4">

    <h1 class="title">Cards</h1>
    
    <div class="card-container">
      <div class="card">
        <div class="card__img card__img--js"></div>
        <h2 class="card__title">Javascript</h2>
        <p class="card__description">JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
        <div class="card__read">Read more</div>
      </div>
    </div>

  </div>

    `)
 

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