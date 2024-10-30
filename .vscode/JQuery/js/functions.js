$(function(){
      //funçãp append() para adicionar conteudo/elementos no final do elemento que selecionamos
      //$('.box div').eq(0).append('<h3>Meu elemento alocado dinamicamente</h3>');

    //  var el = $('<h3>Meu conteudo 3</h3>').appendTo($('.box'));

    //  el.css('color','red');

     // $('.box').prepend('<h3>Olá Mundo!</h3>');

     //var el = $('<h3>Meu conteudo 3</h3>').prependTo($('.box')).css('color','red');

    // var t = '<p>Meu conteudo após a div box</p>';
      //$('.box').after(t);
     //$('.box').before(t);
     //$(t).insertAfter($('.box')).css('color','red');
     //$(t).insertBefore($('.box')).css('color','red');

     setTimeout(function(){
            $('.box').eq(1).remove();
      },3000);
     
});