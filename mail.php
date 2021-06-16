<?php
    // $email = htmlentities($_POST['email']);
    // $subject = htmlentities($_POST['subject']);
    // $message = htmlentities($_POST['message']);

    // if(!empty($email) && !empty($subject) && !empty($message)){
    //     if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    //         $sender = "From: vermachakshu@gmail.com";
    //         if(mail($email, $subject, $message, $sender)){
    //             echo "success";
    //         }else{
    //             echo "Failed while sending your message!";
    //         }
    //     }else{
    //         echo "Please enter a valid email!";
    //     } 
    // }else{
    //     echo "All fields are required!";
    // }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_from = "vermachakshu@gmail.com";
    $email_subject = "New email from Portfolio";
    $email_body = "Name: $name.\n".
                    "email: $email.\n".
                        "subject: $subject.\n".
                            "message: $message.\n".

    $to = "vermachakshuofficial@gmail.com";
    $headers = "From: $email_from.\n";
    $headers . = "Reply-To: $email.\n";

    mail($to, $email_subject, $email_body, $headers);
    header("Location: index.html");

?>
