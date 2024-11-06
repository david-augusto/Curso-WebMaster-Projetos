$(function(){

      var func = function(){
            $('input[type=text]').eq($(this).index()).css('background','green');
      }
    /*$('input[type=text]').keyup(func);*/
     $('input[type=text]').keydown(func);

});