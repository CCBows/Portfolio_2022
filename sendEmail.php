<!-- 
    1. Etiquetas FORM e INPUTS
    2. PETICIONES GET o POST
        
        2.1 GET -- pedir informacion al servidor (filtrado, busqueda...)
        
        dominio.com?nombre=Carlos&email=arcos.moreno94gmail.com&telefono=677158614&asunto=asunto&mensaje=lo que haya escrito

        Tiene la informacion en la url

        2.2 POST -- dar información al servidor (guardar enbase de datos, registro, login, correos, etc.). Se usa para informacion importante

        Datos van en el body de la peticion

    3. RECIBIR Datos de la petición (PHP)
    4. ENVIAR Correo
-->

 <?php
    //Codigo php
    //$numerito = 3;

    //sacar por pantalla
    //echo $numerito;
    //sacar por pantalla cosas complejas como arrays. en este caso lo que se haya puesto con metodo post
    //print_r($_POST);
    //
 ?>

<?php
    // PHP
    // RECOGEMOS Variables POST

    $nombre = $_POST['nombre'];
    $correo = $_POST['email'];
    $mensaje = $_POST['mensaje'];



    // ENVIAR CORREO
    // Receptor
    $to = "arcos.moreno94@gmail.com";
    // Asunto
    $subject = "comprar produtos";

    // Mensaje
    $body = "<html>
            <head></head>
            <body>
                <h1> Consulta en la web </h1>
                <p> $mensaje </p>
            </body>
    </html>";

    // Cabeceras del correo;
    $headers = "MIME-Version: 1.0 \r\n" ;
    $headers .= "Content-type:text/html;charset=UTF-8 \r\n";
    $headers .= "From: $correo \r\n ";

    // Mail devuelve TRUE si envia correo FALSE si algo ha ido mal y no ha enviado correo
    $envioMail = mail( $to, $subject, $body, $headers ); // true / false

    if( $envioMail ){
        echo "Correo enviado con éxito";
    }

?>

