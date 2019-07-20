class Cards {
  constructor(element) {
    this.tagAnchor = element;
  }

  // precisa melhorar a estrutura dos dados que v'ao para o div.innerHTML
  estruturar_elemento(element) {
    this.element = element;
    
    /*const div = $(`
    <div class="col-sm-4">    
    <div class="card-container flex-wrap space-between">
      <div class="card">
        <div class="card__img card__img--js" style="background-image: url('${element.imagem_front}');"></div>
        <h2 class="card__title">${element.post_title}</h2>
        <p class="card__description">${element.post_des}</p>
        <div class="card__read">Read more</div>
      </div>
    </div>
  </div>`).on("click", () => this.clicou())
    */
    const div = $(this.geraCard(element.imagem_front, element.post_title, element.post_des)).on("click", () => this.clicou())

    this.tagAnchor.append(div)
  }

  geraCard (img_bg, title, content, link = '') {
    //esse método gera um card e retorna o elemento
    let div_outer = document.createElement('div');
    div_outer.className = 'col-sm-4';
    
    let div_inner = document.createElement('div');
    div_inner.className =  'card-container flex-wrap space-between';
    
    let card = document.createElement('div');
    card.className = 'card';
    
    let card_img = document.createElement('div');
    card_img.className = 'card__img card__img--js';
    card_img.style.backgroundImage = `url(${img_bg})`;
    
    let title1 = document.createElement('div');
    title1.className = 'card__title';
    title1.innerHTML = title;
    
    let body = document.createElement('p');
    body.className = 'card__description';
    body.innerHTML = content;

    let more = document.createElement('p');
    //let more = document.createElement('div'); caso queira usar como div
    more.className = 'card__read';
    more.innerHTML = 'Read more';
    more.href = link;
  
    //encapsular

    card.appendChild(card_img);
    card.appendChild(title1);
    card.appendChild(body);
    card.appendChild(more);
    div_inner.appendChild(card);
    div_outer.appendChild(div_inner);
    
    return div_outer;
  }

  clicou() {
    window.location.href = this.element.url;
  }
}

class Mostra_cards {
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