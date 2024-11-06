$(function(){


      $('body').on('click','a',function(){
            $('body').css('background','black');
            return false;
      });

      setTimeout(function(){
            $('body').html('<a href="">Meu Link</a>');
      },1000)

      

});