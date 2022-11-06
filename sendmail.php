<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->Charset = 'UTF-8';
$mail->setLanguage('ru', 'phphmailer/language/');
$mail->IsHTML(true);

//От кого письмо
$mail->setForm('shaevgleb@mail.ru', 'Глеб-разработчик');
//Кому отправить
$mail->addAddress('glebshaevvv@mail.ru');
//Тема письма
$mail->Subject = 'Привет! Это письмо с сайта!';


//Тело письма

$body = '<h1>Встречайте супер письмо! Заказики!!!</h1>';

if (trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$POST['name'].'</p>';
}
if (trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$POST['email'].'</p>';
}
if (trim(!empty($_POST['phone']))){
    $body.='<p><strong>Телефон:</strong> '.$POST['phone'].'</p>';
}

$mail->Body = $body;

//Отправляем


if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'данные отправлены!';
}


$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>


