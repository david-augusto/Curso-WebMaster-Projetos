$(function(){

      $('.box1').addClass('minhaclasse');

      //$('.minhaclasse').remove();

      $('.box1').removeClass('minhaclasse');

      //$('.box1 > .child1 > .child2').css('color', 'purple');
      //$('.box1').find('.child1').find('.child2').css('color','orange');

      var el = $('.box1').find('.child1').find('.child2');
      el.css('color','brown');

      $('minhatag').attr('meuattr','outrovalor');

      alert($('minhatag').attr('meuattr'));

});