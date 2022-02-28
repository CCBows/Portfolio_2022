$(document).ready(function(){

    console.log("ready");

    $("nav#menu #burger-menu").click (function(){
        $("#desplegable").addClass("show");
        $("#close").addClass("show-close");
        $("nav#menu #burger-menu").css("display","none");
    });
    $("#close").click (function(){
        $("#desplegable").removeClass("show");
        $("#close").removeClass("show-close");
        $("nav#menu #burger-menu").css("display","flex");
    });
    $(".item-1").click(function(){
        $(".super-container").addClass("go-item-1").removeClass("go-item-2").removeClass("go-item-3").removeClass("go-item-4").removeClass("go-item-5");
        $(".item-1").addClass("selected-item");
        $(".item-2").removeClass("selected-item");
        $(".item-3").removeClass("selected-item");
        $(".item-4").removeClass("selected-item");
        $(".item-5").removeClass("selected-item");
    });
    $(".item-2").click(function(){
        $(".super-container").addClass("go-item-2").removeClass("go-item-1").removeClass("go-item-3").removeClass("go-item-4").removeClass("go-item-5");
        $(".item-2").addClass("selected-item");
        $(".item-1").removeClass("selected-item");
        $(".item-3").removeClass("selected-item");
        $(".item-4").removeClass("selected-item");
        $(".item-5").removeClass("selected-item");
    });
    $(".item-3").click(function(){
        $(".super-container").addClass("go-item-3").removeClass("go-item-2").removeClass("go-item-1").removeClass("go-item-4").removeClass("go-item-5");
        $(".item-3").addClass("selected-item");
        $(".item-1").removeClass("selected-item");
        $(".item-2").removeClass("selected-item");
        $(".item-4").removeClass("selected-item");
        $(".item-5").removeClass("selected-item");
    });
    $(".item-4").click(function(){
        $(".super-container").addClass("go-item-4").removeClass("go-item-2").removeClass("go-item-3").removeClass("go-item-1").removeClass("go-item-5");
        $(".item-4").addClass("selected-item");
        $(".item-1").removeClass("selected-item");
        $(".item-2").removeClass("selected-item");
        $(".item-3").removeClass("selected-item");
        $(".item-5").removeClass("selected-item");
    });
    $(".item-5").click(function(){
        $(".super-container").addClass("go-item-5").removeClass("go-item-2").removeClass("go-item-3").removeClass("go-item-4").removeClass("go-item-1");
        $(".item-5").addClass("selected-item");
        $(".item-1").removeClass("selected-item");
        $(".item-2").removeClass("selected-item");
        $(".item-3").removeClass("selected-item");
        $(".item-4").removeClass("selected-item");
    });
    $(".caja").click(function(){
        $(".contenedor_lightbox").toggleClass("display-none");
    });
    $(".fondo_lightbox").click(function(){
        $(".contenedor_lightbox").addClass("display-none");
    });
    $(".contenedor_lightbox .cierre").click(function(){
        $(".contenedor_lightbox").addClass("display-none");
    });
    
    var coleccion = [
        //JSON
        {
            hero: "fight for your hive",
            descripcion: "texto intenso",
            imgs: [
                "img/ilustracion/fightforyourhive_texture-01.png",
                "img/ilustracion/bees.jpg",
                "img/ilustracion/mariposa_baja.png",
                "img/ilustracion/escarabajo.png",
            ]
        }//0
        ,
        {
            hero: "otro",
            descripcion: "ese texto bueno ahí",
            imgs: [
                "img/ilustracion/mariposa_baja.png",
                "img/ilustracion/fightforyourhive_texture-01.png",
                "img/ilustracion/bees.jpg",
                "img/ilustracion/escarabajo.png",
            ]
        }//1
    ]

    console.log(coleccion[0]);

    //ARRAY

    $(".caja").click(function(){
        //asigna valor i basado en el data-number de .caja
        var i = $(this).data ("number");
        console.log(i);
        //borrarlo preventivamente para poder cargar cosas
        $(".titulo_lightbox").html("");
        $(".descripcion_lightbox").html("");
        $(".imgs_lightbox").html("");
        
        coleccion[i].hero;
        $(".titulo_lightbox").append("<h1>"+coleccion[i].hero+"</h1>");

        coleccion[i].descripcion;
        $(".descripcion_lightbox").append("<span>"+coleccion[i].descripcion+"</span>");

        coleccion[i].imgs.forEach (function(imagen){
            
            $(".imgs_lightbox").append("<img src='"+imagen+"'>")

        });
    })
    
    
});