$(document).ready(function(){

    $('.fixed-action-btn').floatingActionButton();
    $('.tabs').tabs();
    $('.modal').modal();

    // remove quantidade
    $(".badge").click(function(){

        var val =  $(this).text();
        var remove = parseInt(val);

        if(val=='' || remove<=0){ 
            $(this).text(''); 
            return;
        } 

        $(this).text(remove-2);
    });


    // adiciona um novo item
    $(".collection-item").click(function(){

        $(this).addClass("orange");
        $(this).children().css({color:"white"});

        var val = $(this).children("span").text();

        if(val==='') val=0;
        if(val<0) $(this).removeClass("orange");

        var add = parseInt(val);


        var item = {
            id : $(this).attr('id'),
            nome : $(this).text(),
            quant : add+1
        }

        // funçao declarada em controller.js
        addCarrinho(item);

        $(this).children("span").text(add+1);
      
    });



    $("#check").click(function(){
        update();
        $('#list').html('')

        carrinho.forEach(itens => {

            var htmlString = '<blockquote class="blockquoteColor indigo lighten-5">'+itens.nome+' <span class="right">'+itens.quant+'</span></blockquote>';
            $('#list').append(htmlString)
        });
    });


    $('#pedir').click(function(){
        var parser = JSON.stringify(carrinho);

        if(carrinho.length==0) {
       
        var toastHTML = '<span>Não há itens selecionados';
            M.toast({html: toastHTML});
          return;
    }

    $.ajax('/cadastro-pedidos',{
            'data': parser, 
            'type': 'POST',
            'contentType': 'application/json' ,
            'success' : success()
        });

      
    })

    function success(){
        var toastHTML = '<span>Pedido Realizado</span><a href="#" class="btn-flat toast-action">Ver todos</a>';
        M.toast({html: toastHTML});
          
        carrinho=[];
        $(".collection-item").removeClass("orange");
        $(".badge").text('')
        return;
    }

});

var sidemenu = document.querySelector('.sidenav');
var instance = M.Sidenav.getInstance(sidemenu);


document.addEventListener('DOMContentLoaded', function() {
    var instances = M.Sidenav.init(sidemenu);
  });


