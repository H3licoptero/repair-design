<?php

$controlName = $_POST["controlName"];
$controlPhone = $_POST["controlPhone"];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
require 'thanks.html';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'furaNeraGrande@gmail.com';                     // SMTP username
    $mail->Password   = 'lineage2Essence';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('furaNeraGrande@gmail.com', 'Виталий');
    $mail->addAddress('h3licoptero@yandex.ru');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body = 'Имя пользователя:' . $controlName . ' Его телефон: ' . $controlPhone;

    $mail->send();
    header('Location: thanks.html');
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}