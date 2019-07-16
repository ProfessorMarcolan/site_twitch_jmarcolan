class Cards {

  constructor(element) {
    console.log(element)
    this.tag_ancora = element
  }

  // precisa melhorar a estrutura dos dados que v'ao para o div.innerHTML
  estruturar_elemento(element) {
    console.log(element)
    console.log("asiudauhsidhis")
    this.element = element

    let div = $(`
    
    <div class="col-sm-4">

    
    <div class="card-container flex-wrap space-between">
      <div class="card">
        <div class="card__img card__img--js" style="background-image: url('${element.imagem_front}');"></div>
        <h2 class="card__title">${element.post_title}</h2>
        <p class="card__description">${element.post_des}</p>
        <div class="card__read">Read more</div>
      </div>
    </div>

  </div>

    `).on("click", () => this.clicou())


    this.tag_ancora.append(div)

  }

  clicou() {
    console.log("cliucouasd")
    window.location.href = this.element.url;

  }

}

class Mostra_cards{
  constructor(url,local_aonde_mostrar)
  {
    this.url = url
    this.local_aonde_mostrar = local_aonde_mostrar
      this.elementos_pagina =[]
      fetch( this.url)
      .then((resp) => resp.json()) // Transform the data into json
      .then((data)=> {
        // componente_cartoes.mostra_interface(data)
        console.log(data)
        
        data.forEach(element => {
          this.mostra(element)
         
          
        });
        
      
        // Create and append the li's to the ul
        })



  }


  mostra(element){
    let ele = new Cards(this.local_aonde_mostrar)


    ele.estruturar_elemento(element)

    this.elementos_pagina.push(ele)
  }

}



