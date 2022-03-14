(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('VHxQ06ygdNE0-kqda');

})();
window.onload = function() {
    // 'contact-form' debe ser el ID de tu FORMULARIO
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        //ocultar el boton
        $("#boton_form").css("display","none");

        event.preventDefault();
        
        emailjs.sendForm('service_2khsdwj', 'template_i0ioj4c', this)
            
            .then(function(success) {
                console.log('SUCCESS!');
                console.log(success);

                // Aquí podríamos cambiar el mensaje de envío de correo con éxito por el formulario

                //Oculatr formulario
                $("#contact-form").css({"display" :"none"});
                //mostrar mensaje de agradecimiento
                $(".exito").css({"display" :"block"});

            }, function(error) {
                console.log('FAILED...', error);
        });
    });
}
