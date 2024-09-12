$(function(){
        var elWidth = $('.box').width();

        $('.box').width('900');

        $('.box').css('width','500');

        console.log("Width: "+$('.box').width());
        console.log("Inner Width: "+$('.box').innerWidth());
        console.log("Outer Width: "+$('.box').outerWidth(true));

        console.log("Height: "+$('.box').height());
        console.log("Inner Height: "+$('.box').innerHeight());
        console.log("Outer Height: "+$('.box').outerHeight(true));
});