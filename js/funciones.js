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

    //tira menu ----------------------------------------
    
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


    //tira tactil V2---------------------------


    var click_ini;
    var current_item = 1;
    var cerrojo = false;


    //MOUSE DOWN
    $(document).on('touchstart', '.ventana', function(e){
        var xPos = e.originalEvent.touches[0].pageX;
        click_ini = xPos;
        cerrojo = true;
    });
    //MOUSEUP
    $(document).on ('touchend', '.ventana', function(e){

    });
    //MOUSEMOVE
    $(document).on ('touchmove', '.ventana', function(e){
        var xPos = e.originalEvent.touches[0].pageX;
        console.log("movimiento")
        console.log(click_ini)
        
        var diferenciaX = click_ini - xPos;

        if (diferenciaX > 200 && cerrojo && current_item <5 ) {
            //console.log("derecha")
            $(".super-container").removeClass("go-item-"+current_item);
            $(".selected-item").removeClass("selected-item")
            current_item = current_item + 1;
            $(".super-container").addClass("go-item-"+current_item);
            $(".item-"+current_item).addClass("selected-item")
            cerrojo = false;

        }
        else if (diferenciaX < -200 && cerrojo && current_item > 1){
            //console.log("izquierda");
            $(".super-container").removeClass("go-item-"+current_item);
            $(".selected-item").removeClass("selected-item");
            current_item = current_item - 1;
            $(".super-container").addClass("go-item-"+current_item);
            $(".item-"+current_item).addClass("selected-item")
            cerrojo = false;
        }
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
            descripcion: "Inspirada en la carteler??a porpagand??stica de tiempos de guerra la colecci??n FIght for your hive (lucha por tu colmena) representan la unidad ante el conflicto mediante insectos humanoides",
            imgs: [
                {type: "imagen", src:"img/ilustracion/fightforyourhive_texture-01.png"},
                {type: "imagen", src:"img/ilustracion/bees.png"},
                {type: "imagen", src:"img/ilustracion/mariposa_baja.png"},
                {type: "imagen", src:"img/ilustracion/escarabajo.png"},
            ]
        }//0
        ,
        {
            hero: "Stupid climate change",
            descripcion: "ese texto bueno ah??",
            imgs: [
                {type: "imagen", src:"img/ilustracion/BlackLagoon_Monster_climate_BAJA.png"}
                ,
            ]
        }//1
        ,
        {
            hero: "Game night gone wild",
            descripcion: "Esta colecci??n se compone de cinco p??sters de car??cter deportivo en los que se representa a sus protagonistas como animales antropom??rficos.\n\nAdem??s de una fuerte influencia por el c??mic, la ilustraci??n de trazos en tinta negra con colores planos recuerda a las revistas de ciencia ficci??n y fantas??a populares en los a??os 60.\n\n Esta colecci??n no tiene m??s prop??sito que el de ser un conjunto de ilustraciones divertidas que unen lo fant??stico y decorativo a la carteler??a deportiva com??n en nuestro imaginario colectivo.",
            imgs: [
                {type: "imagen", src:"img/ilustracion/Boxeo Final_BAJA.jpg"},
                {type: "imagen", src:"img/ilustracion/RugbyFinal_BAJA.png"},
                {type: "imagen", src:"img/ilustracion/TaekwondoFinal_BAJA.png"},
                {type: "imagen", src:"img/ilustracion/TigreHockey_BAJA.png"},
                {type: "imagen", src:"img/ilustracion/Surf_Final-BAJA.png"},
            ]
        }//2
        ,
        {
            hero: "Anax Imperator",
            descripcion: "La ilustraci??n cient??fica es una de las ramas m??s complejas de la ilustraci??n ya que exige un realismo certero a la vez que una funci??n did??ctica, todo esto se resume en una ilustraci??n muy cercana a la realidad y que permita la comprensi??n de lo m??s m??nimos detalles de las especies representadas.\n\nEn este caso se trata de una Anax Imperator o lib??lula emperador. Esta se representa con una vista cenital que nos ayuda a identificar todas sus partes, proporciones y colores a la perfecci??n. Adem??s muestra su estado como larva y sus huevos, informaci??n de gran inter??s para los estudiantes de ciencias naturales.",
            imgs: [
                {type: "imagen", src:"img/ilustracion/AnaxImperator.jpg"}
            ]
        }//3
        ,
        {
            hero: "Searching signal",
            descripcion: "",
            imgs: [
                {type: "imagen", src:"img/ilustracion/Moai.jpg"}
                
            ]
        }//4
        ,
        {
            hero: "Kinda confused",
            descripcion: "",
            imgs: [
                {type: "imagen", src:"img/ilustracion/kinda-confused_BAJA.png"}
            ]
        }//5
        ,
        {
            hero: "Ready to rumble",
            descripcion: "",
            imgs: [
                
                {type: "imagen", src:"img/ilustracion/ReadyToRumble_IG.jpg"}
            ]
        }//6
        ,
        {
            hero: "It came from outer space",
            descripcion: "Ilustraci??n de ciencia ficci??n cl??sica inspirada en las portadas pulp de las resvistas de la d??cada de los 60.\n\nCreada con cinema 4D no busca el realismo si no la est??tica low-poly en forma de decorado teatral.",
            imgs: [
                {type: "imagen", src:"img/ilustracion/RenderGRanero.jpg"}
                
            ]
        }//7
        ,
        {
            hero: "Sand dunes and send nudes",
            descripcion: "",
            imgs: [
                {type: "imagen", src:"img/ilustracion/SanDunes_CUADRADO-02.png"}
                ,
            ]
        }//8
        ,
        {
            hero: "Lo que acecha en el umbral",
            descripcion: "En este trabajo se dise??a la portada del libro ???Lo que acecha en el umbral??? de H.P. Lovecraft.\n\nLa tem??tica de horror c??smico se transmite perfectamente mediante las figuras desconcertantes, pinceladas poco  definidas y juego de luces y composici??n. De esta forma conseguimos transmitir el contenido de la obra no a trav??s de lo que muestra si no a trav??s del sentimiento que genera.\n\nEsto es especialmente complejo con esta tem??tica tan dif??cil de mostrar en im??genes, ya que es un miedo primario no solo a lo desconocido si no tambi??n a lo incomprensible.\n\nLa combinaci??n de los elementos anteriormente mencionados consiguen este efecto adem??s de captar la atenci??n del lector con la mirada de la rana.",
            imgs: [
                {type: "imagen", src:"img/dise??o editorial/Lovecraft.jpg"}
                ,
                
            ]
        }//9
        ,
        {
            hero: "Rackham",
            descripcion: "Rackham es un proyecto editorial que creaba una revista de c??mics a partir de creaciones de usuarios que generaban dichas obras de ficci??n a partir de una frase iniciadora o trigger.\n \nEs un proyecto completamente desarrollado que engloba la investigaci??n previa desde el punto de vista hist??rico y comercial, el desarrollo de la marca a trav??s del manual de identidad corporativa, piezas gr??ficas, publicitarias, editoriales y web.\n \n Respecto al desarrollo de la identidad de marca el naming est?? escogido para que sea rapidamente identificado por los aficionados del c??mic, ya que Rackham es un popular personaje de Tint??n. Adem??s esta r??pida identificaci??n es m??s evidente ya que el logotipo tipogr??fico usa la misma fuente que la portada espa??ola original de Tint??n donde se menciona el nombre Rackham.\n \n Gr??ficamente el logotipo funciona muy bien como cabecera y es vers??til a la hora de combinarlo con otras ilustraciones, lo cual es especialmente importante ya que al ser una revista de c??mic participativa las ilustraciones que se usan no est??n hechas con el prop??sito de acompa??ar al logo.\n \nEn cuanto al resto de caracter??sticas gr??ficas, siempre se usar??an ilustraciones que se identificasen r??pidamente con el mundo del c??mic, ya sea por la forma (estilos de ilustraci??n) o por el contenido tem??tico de dichas ilustraciones."
                ,
            imgs: [
                
                {type: "imagen", src:"img/dise??o editorial/rackham/revista_2.png"}
                ,
                {type: "imagen", src:"img/dise??o editorial/rackham/memoria_y_revista.png"}
                ,
                {type: "imagen", src:"img/dise??o editorial/rackham/manual_2.png"}
                ,
                {type: "imagen", src:"img/dise??o editorial/rackham/manual_1.png"}
                ,
                
            ]
        }//10
        ,
        {
            hero: "Mini",
            descripcion: "En este caso nos enconramos ante una pieza de publicidad exterior para la marca de autom??viles Mini. Para ello se realiz?? la pieza a partir de la marca y un claim (???Un mini siempre est?? lleno de vida???), la gr??fica tiene una composici??n diagonal que junto a la sensaci??n de movimiento la dota de dinamismo y vida.\n \nA nivel creativo el uso del humor es evidente, lo cual genera una sentimiento de simpat??a en el observador y refuerza el impacto, facilitando el recuerdo de la gr??fica.",
            imgs: [
                {type: "imagen", src:"img/publicidad/mini_MU.jpg"}
                ,
                
            ]
        }//11
        ,
        {
            hero: "Irismedia",
            descripcion: "P??gina publicitaria de la agencia de medios Irismedia expresando la transparencia en procesos y servicio y la eficiencia resultante del amplio conocimiento del equipo.",
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
            hero: "Feelin' fine",
            descripcion: "texto intenso",
            imgs: [
                {type: "video", src:"img/animacion/feelinfine.mp4"}
                
            ]
        }//14
        ,
        {
            hero: "Rockin' Island",
            descripcion: "texto intenso",
            imgs: [
                {type: "video", src:"img/animacion/RockinIsland.mp4"}
                ,
                
            ]
        }//15
        ,
        {
            hero: "Thinkink",
            descripcion: "Esta gr??fica fue un proyecto personal en el que se cre?? una marca para un estudio de dise??o desde cero.\n \nEl logotipo esta formado por dos palabras, ???think??? e ???ink???, debido a que el proceso creativo consiste tanto en crear como en plasmar la idea, pero suenan similar a ???thinking???, lo cual dota a la marca de una imagen constante y trabajadora, que no para de crear. As??, ambas palabras se distinguen por sus distintos pesos tipogr??ficos y por los colores corporativos.\n \nSe introdujo el icono de la gota de tinta ya que pod??a tener usos futuros y convertirse en un elemento constante en posteriores campa??as propias de la empresa. El color coincide con el de la palabra ???think??? para dar m??s cohesi??n al logotipo y equilibrarlo.",
            imgs: [
                {type: "imagen", src:"img/thinkink/tarjeta_MU.jpg"}
                ,
                
            ]
        }//16
        ,
    ]

    console.log(coleccion[0]);

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

    //elemento de carga------------------------

    $(window).on("load",function(){
    console.log("cargado");
    $(".elemento_carga").fadeOut(500);
});