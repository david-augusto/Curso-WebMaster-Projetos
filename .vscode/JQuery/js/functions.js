$(function(){
        var el = $('.box');

        var meutexto = 'Olá Mundo';
        el.html('<div class="teste">Meu elemento</div>');
        el.html("<div class=\"teste\">"+meutexto+"</div>");

        el.html(el.html() + '<h1 class="texto1">Meu texto via javascript</h1>')

        console.log(el.html);
});