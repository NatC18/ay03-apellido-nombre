$(document).ready(function(){
    var boton1 = $("#boton1");
    var boton2 = $("#boton2");
    var boton3 = $("#boton3");
    var imagenes = $("img");
    var lista = $("#Animales");

    

    boton1.click(function(){
        $(imagenes).show("slow", "linear");
    });

    boton3.click(function(){
        $(imagenes).hide("slow", "linear");
    });

    boton2.click(function(){
        $("h1").text("HOLA 🐘");
        $(".aparece").hide();
        $(".aparece").text("Scrollea hacia arriba (si quieres)");
        $(".aparece").show("fast", "linear");
    });

    $(lista).mouseenter(function(){
        $("#Animales").css("background-color"," rgb(52, 87, 52)")

    });

    $(lista).mouseleave(function(){
        $("#Animales").css("background-color","rgb(132, 167, 92)")

    });










});