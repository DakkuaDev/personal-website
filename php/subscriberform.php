<?php

echo "<pre>";

    print_r($_POST);

echo '</pre';

    // Newsletter POST
    if(isset($_POST['email']) && $_POST['email'] != ''))
    {
        // email validation
        if( filter_var($_POST['email']), FILTER_VALIDATE_EMAIL))
        {
            // submit the form
            $userEmail = $_POST('email');
        
            $to = "daniel.guerra.gallardo99@gmail.com"
            $messageSubject = "¡Me quiero subscribir a tu Newsletter!"
            $body = "";
        
            $body.= "Hola! Me gustaría poder subscribirme a tu contenido :)"
        
            mail($to, $messageSubject, $body);
        }
    }

?>