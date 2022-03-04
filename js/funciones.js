$(document).ready(function(){

    console.log("ready");
    //menu desplegable----------------------------------------
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
    //headermousemove-----------------------------

    $(".mouse_animate").mousemove(function(event){
        //determino la altura que restarle al hero (la del nav) y el punto medio del width del hero con estas variables
        var altura_nav = $("#menu").height();
        var ancho_hero = $(".hero").width()/2;

        console.log(altura_nav);

        var altura_real = event.pageY - altura_nav;
        var ancho_real = event.pageX - ancho_hero;
        //mover capas en funcion de los valores de position del mouse
        if ($(window).width() > 1200) {
            $("#capa_1").css({
                "top":-altura_real/80 +"%",
                "left":-ancho_real/80 +"%",
            })
            $("#capa_2").css({
                "top":-altura_real/100 +"%",
                "left":-ancho_real/100 +"%",
            })
            $("#capa_3").css({
                "top":-altura_real/100 +"%",
                "left":-ancho_real/100 +"%",
            })
        }
        
    });
    $( ".mouse_animate" ).mouseenter(function(event) {
        var altura_nav = $("#menu").height();
        var ancho_hero = $(".hero").width()/2;

        var altura_real = event.pageY - altura_nav;
        var ancho_real = event.pageX - ancho_hero;

        console.log("dentro");
        // $(".capa").animate({}, 1000, function() {});
        if ($(window).width() > 1200) {
            $("#capa_1").animate({
                "top":0,
                "left":-ancho_real/80 +"%",  
            }, 100, function() {
                // Animation complete.
            });
            $("#capa_2").animate({
                "top":0,
                "left":-ancho_real/100 +"%",  
            }, 100, function() {
                // Animation complete.
            });

            $("#capa_3").animate({
                "top":0,
                "left":-ancho_real/100 +"%",  
                }, 100, function() {
                // Animation complete.
            });
        }
    });
    $( ".mouse_animate" ).mouseleave(function() {
        if ($(window).width() > 1200) {
            $(".capa").animate({
            top: 0,
            left: 0,
            }, 500, function() {
            // Animation complete.
            });
        }
     });

    //tira----------------------------------------
    
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
    
    //lightbox-------------------------------------
    
    $(".fondo_lightbox").click(function(){
        $(".contenedor_lightbox").addClass("display-none");
    });
    $(".contenedor_lightbox .cierre").click(function(){
        $(".contenedor_lightbox").addClass("display-none");
    });

    //coleccion-------------------------------------
    var coleccion = [
        //JSON
        {
            hero: "Fight for your hive",
            descripcion: "texto intenso",
            imgs: [
                {type: "imagen", src:"img/ilustracion/fightforyourhive_texture-01.png"},
                {type: "imagen", src:"img/ilustracion/bees.jpg"},
                {type: "imagen", src:"img/ilustracion/mariposa_baja.png"},
                {type: "imagen", src:"img/ilustracion/escarabajo.png"},
            ]
        }//0
        ,
        {
            hero: "Stupid climate change",
            descripcion: "ese texto bueno ahí",
            imgs: [
                {type: "imagen", src:"img/ilustracion/BlackLagoon_Monster_climate_BAJA"}
                ,
            ]
        }//1
        ,
        {
            hero: "Game night gone wild",
            descripcion: "texto intenso",
            imgs: [
                {type: "imagen", src:"img/ilustracion/Boxeo Final_BAJA.jpg"},
                {type: "imagen", src:"img/ilustracion/RugbyFinal_BAJA.jpg"},
                {type: "imagen", src:"img/ilustracion/TaekwondoFinal_BAJA.jpg"},
                {type: "imagen", src:"img/ilustracion/TigreHockey_BAJA.jpg"},
                {type: "imagen", src:"img/ilustracion/Surf_Final-BAJA.jpg"},
            ]
        }//2
        ,
        {
            hero: "Anax Imperator",
            descripcion: "texto intenso",
            imgs: [
                {type: "imagen", src:"img/ilustracion/AnaxImperator.jpg"}
            ]
        }//3
        ,
        {
            hero: "Searching signal",
            descripcion: "texto intenso",
            imgs: [
                {type: "imagen", src:"img/ilustracion/Moai.jpg"}
                
            ]
        }//4
        ,
        {
            hero: "Kinda confused",
            descripcion: "texto intenso",
            imgs: [
                {type: "imagen", src:"img/ilustracion/kinda-confused_BAJA.png"}
            ]
        }//5
        ,
        {
            hero: "Ready to rumble",
            descripcion: "texto intenso",
            imgs: [
                
                {type: "imagen", src:"img/ilustracion/ReadyToRumble_IG.jpg"}
            ]
        }//6
        ,
        {
            hero: "It came from outer space",
            descripcion: "texto intenso",
            imgs: [
                {type: "imagen", src:"img/ilustracion/RenderGRanero.jpg"}
                
            ]
        }//7
        ,
        {
            hero: "Sand dunes and send nudes",
            descripcion: "texto intenso",
            imgs: [
                {type: "imagen", src:"img/ilustracion/SanDunes_CUADRADO-02.png"}
                ,
            ]
        }//8
        ,
        {
            hero: "Lo que acecha en el umbral",
            descripcion: "texto intenso",
            imgs: [
                {type: "imagen", src:"img/diseño editorial/Lovecraft.jpg"}
                ,
                
            ]
        }//9
        ,
        {
            hero: "Lo que acecha en el umbral",
            descripcion: "texto intenso",
            imgs: [
                
                "img/diseño editorial/Lovecraft.jpg",
                
            ]
        }//10
        ,
        {
            hero: "Mini",
            descripcion: "texto intenso",
            imgs: [
                {type: "imagen", src:"img/publicidad/mini_MU.jpg"}
                ,
                
            ]
        }//11
        ,
        {
            hero: "Irismedia",
            descripcion: "texto intenso",
            imgs: [
                {type: "imagen", src:"img/publicidad/Publicista_MockUp.png"}
                ,
                
            ]
        }//12
        ,
        {
            hero: "Roadkill",
            descripcion: "Roadkill",
            imgs: [
                {type: "video", src:"img/animacion/Roadkill.mp4"}
                
            ]
        }//13
        ,
        {
            hero: "Irismedia",
            descripcion: "texto intenso",
            imgs: [
                {type: "imagen", src:"img/publicidad/Publicista_MockUp.png"}
                
            ]
        }//14
        ,
        {
            hero: "Irismedia",
            descripcion: "texto intenso",
            imgs: [
                {type: "imagen", src:"img/publicidad/Publicista_MockUp.png"}
                ,
                
            ]
        }//15
        ,
        {
            hero: "Thinkink",
            descripcion: "texto intenso",
            imgs: [
                {type: "imagen", src:"img/thinkink/tarjeta_MU.jpg"}
                ,
                
            ]
        }//16
        ,
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
        
       
        $(".titulo_lightbox").append("<h1>"+coleccion[i].hero+"</h1>");

        
        $(".descripcion_lightbox").append("<span>"+coleccion[i].descripcion+"</span>");

        //0
        
        /*
        
        collecion[0] =
                {
                    hero: "Fight for your hive",
                    descripcion: "texto intenso",
                    imgs: [
                        {   
                            type:"imagen",  
                            src:"img/ilustracion/fightforyourhive_texture-01.png"
                        },
                        {   
                            type:"video",  
                            src:"img/ilustracion/fightforyourhive_texture-01.mp4"
                        },
                        {   
                            type:"imagen",  
                            src:"img/ilustracion/fightforyourhive_texture-01.png"
                        },
                        {   
                            type:"imagen",  
                            src:"img/ilustracion/fightforyourhive_texture-01.png"
                        },
                   
                    ]
                }//0
        
        
        */

        coleccion[i].imgs.forEach ( function(imagen){
            /*2  ---> 
                    imagen = {   
                            type:"imagen",  
                            src:"img/ilustracion/fightforyourhive_texture-01.png"
                        }
            */

            if (imagen.type == "imagen"){
                $(".imgs_lightbox").append("<img src='"+imagen.src+"'>")
            }
            else if (imagen.type == "video"){
                $(".imgs_lightbox").append("<video controls autoplay loop src='"+imagen.src+"'></video>")
            }
                        
            

        });
    });

    //formulario--------------------------------------

    var carga = 0;

    $(".info").focusout(function(){
        var input = $(this).val() 
            console.log($(this).val())
        //condicion de que los input tengan mas de 3 caracteres y no tengan la clase validado
        if (input.length >= 3 && !$(this).hasClass("validado")){
            console.log("input bien");
            carga = carga + 20;
            $(".barra_carga").css({"width": carga+"%"});
            $(this).addClass("validado");
        }
        //condicion de que tengan mas de tres caracteres  
        else if (input.length >= 3 && $(this).hasClass("validado")) {

        }
        else {
            carga = carga -20;
            $(".barra_carga").css({"width": carga+"%"});
            $(this).removeClass("validado");
        }

    });
});