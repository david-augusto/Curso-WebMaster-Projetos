$(function(){

        /*
        var timer;

        $(window).scroll(function(){
                //quando o scroll ocorre
        })

        $(window).resize(function(){
                console.log("Minha tela está sendo redimensionada!");
                clearTimeout(timer);
             timer =   setTimeout(function(){
                        location.href = "http://127.0.0.1:5501/.vscode/JQuery/index.html";
                },1000);
                
        })

        $('a').click(function(e){
                e.preventDefault();
        })
                */

        $('body').click(function(){
                $('.box').css('backgrounf-color','green');
        })
})