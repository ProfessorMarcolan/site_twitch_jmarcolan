console.log("asdoi mundosad")


const get_nome = async(numero) => {
    let variavel = ["joao","lucas","bernardo"]

    // setTimeout(()=>{},1000)
    let i = 0
    while(i<100000000){i++}
   
    return variavel[numero]
}



const get_nome_by_id = async() =>{

    var a = get_nome(1)
    var b = get_nome(2)

    return Promise.all([a,b])


}


console.log(get_nome_by_id())
