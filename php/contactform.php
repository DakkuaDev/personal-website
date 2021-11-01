<?php

/*
echo "<pre>";

    print_r($_POST);

echo '</pre';

    // Contact Message POST
    if(isset($_POST['email']) && $_POST['email'] != ''))
    {
        // email validation
        if( filter_var($_POST['email']), FILTER_VALIDATE_EMAIL))
        {
            // submit the form
            $userName = $_POST('name');
            $userEmail = $_POST('email');
            $userMessage = $_POST('message');
        
            $to = "daniel.guerra.gallardo99@gmail.com"
            $messageSubject = $userName. " te ha enviado un mensaje por la web"
            $body = "";
        
            $body.= $userMessage;
        
            mail($to, $messageSubject, $body);
        }
    }
    */

    if($_POST['email'] != '')
    {

        // Email del usuario
        $myemail = 'daniel.guerra.gallardo99@gmail.com';
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        
        $to = $myemail;
        $email_subject = "Te han contactado a través de la web. Nuevo mensaje de: $subject";
        $email_body = "Haz recibido un nuevo mensaje de contacto. \n\n Nombre: $name \n Correo: $email \n Mensaje: \n $message";
        $headers = "From: $email";
        
        mail($to, $email_subject, $email_body, $headers);

        // Email de confirmación de la query al usuario
        $conf_subject = 'Mensaje enviado correctamente a Daniel Guerra a través de la web';
        $conf_sender = 'Email <daniel.guerra.gallardo99@gmail.com>';

        $msg = $_POST['name'] . ",\n\nGracias por el mensaje!. Responderé al mismo en la mayor brevedad posible. \n\nUn abrazo. \n\n Daniel Guerra";

        mail( $_POST['email'], $conf_subject, $msg, 'De: ' . $conf_sender );

        echo "<script>window.location = 'https://danielguerragallardo.es/contact.html'</script>";
    }

    //echo "El mensaje se ha enviado correctamente";

?>