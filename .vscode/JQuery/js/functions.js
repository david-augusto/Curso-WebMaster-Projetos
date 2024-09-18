$(function(){

        /*
        var el = $('.box');

        var meutexto = 'Olá Mundo!';
        el.html("<div class=\"teste\">"+meutexto+"</div>");
        el.html(el.html() + '<h1 class="texto1">Meu texto via javascript</h1>');

        $('.box2').text("<div></div>");
        $('.box2').text($('.box2').text() + "Olá mundo");

        console.log($('.box2').text());
        console.log($('.box').text());

        $('input[type=text]').val("Olá Mundo");

        $('textarea').text("Olá mundo");
        */

        $('input[type=button]').click(function(){
                var v = $('input[type=text]').val();
                console.log(v);
        })
});