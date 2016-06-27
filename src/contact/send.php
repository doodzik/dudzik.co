<?php

function clean_string($string) {
  $bad = array("content-type","bcc:","to:","cc:","href");
  return str_replace($bad,"",$string);
}

if (empty($_POST["username"]) && !empty($_POST["content"]) && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {

  $to      = $_ENV["EMAIL"];
  $from    = $_ENV["EMAILFROM"];
  $subject = 'dudzik.co - form';
  $message = clean_string($_POST["content"]);
  $replyTo = $_POST["email"];

  $headers = "From: $from" . "\r\n" .
      "Reply-To: $replyTo" . "\r\n" .
      'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);
}

header("Location: http://dudzik.co/contact/success");
die();

?> 
