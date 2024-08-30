window.onload = function(){

    var num1, num2;

    num1 = 10;
    num2 = 20;


        console.log("Operadores matematicos e lógicos");
        console.log("Adição -> "+num1+" + "+num2+" = "+ (num1+num2));
        console.log("Subtração -> "+num1+" - "+num2+" = "+ (num1-num2));
        console.log("Multiplicação-> "+num1+" x "+num2+" = "+ (num1*num2));
        console.log("Divisão -> "+num1+" / "+num2+" = "+ (num1/num2));

        if(num1 === num2){
            console.log("Se "+num1+" é maior que "+num2+" Esta condição é verdadeira");
        } else {
            console.log("Se "+num1+" é maior que "+num2+" Esta condição é falsa");
        }

        if(num1 == num2){
            console.log("Se "+num1+" é igual "+num2+" Esta condição é verdadeira");
        } else {
            console.log("Se "+num1+" é igual "+num2+" Esta condição é falsa");
        }
        if(num1 != num2){
            console.log("Se "+num1+" é diferente de "+num2+" Esta condição é verdadeira");
        } else {
            console.log("Se "+num1+" é diferente de "+num2+" Esta condição é falsa");
        }

        if(num1 !== num2){
            console.log("Se "+num1+" não é semelhante que "+num2+" Esta condição é verdadeira");
        } else {
            console.log("Se "+num1+" não é semelhante que "+num2+" Esta condição é falsa");
        }

        console.log("Demais operadores são >= <= > <");
    
}