$(function(){

     $.ajax({
          'url':'conteudo.html',
          //'method':'post',
          //data:{'nome':'David','idade':'26'}
     }).done(function(data){
          $('#container').append(data);
     });

});