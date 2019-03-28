
var carrinho = [];

function addCarrinho(item){

    if(carrinho.length==0 && item.quant<1){
        carrinho.push({id: item.id, nome: item.nome, quant: item.quant})
        return;
    }
  
    // retorna boolean
    var  verifica = carrinho.some(itens => itens.id === item.id)

    // se existir item igual incrementa apenas quantidade
    if(verifica){
        carrinho.forEach(carArray => {
            if(item.id===carArray.id){
                return carArray.quant=item.quant;
            }
        });
    }else{
       return carrinho.push({id: item.id, nome: item.nome, quant: item.quant})

    }
    update();
    return;
}




function removeCarrinho(item){

    if(carrinho.length==0) return;
    
    // retorna boolean
    var  verifica = carrinho.some(itens => itens.id === item.id)

    // se existir item igual decrementa apenas quantidade
    if(verifica){
        carrinho.forEach(carArray => {
            if(item.id===carArray.id){
                 carArray.quant-=item.quant;
            }
        });

    }

    update();
    return;
}


// Atualiza array remove itens com quantidae = 0
function update(){
    var novoArray = [];

    carrinho.forEach(item=>{
        if(item.quant>0){
            novoArray.push(item);
        }
    })

    return carrinho = novoArray;
}