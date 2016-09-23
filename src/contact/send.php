<?php
require(__DIR__ . '/../../env.php');

function clean_string($string) {
  $bad = array("content-type","bcc:","to:","cc:","href");
  return str_replace($bad,"",$string);
}

if (empty($_POST["username"]) && !empty($_POST["content"]) && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {

  $ip      = $_SERVER['REMOTE_ADDR'];
  $browser = $_SERVER['HTTP_USER_AGENT'];

  $subject = 'dudzik.co - form';
  $replyTo = $_POST["email"];
  $message = clean_string($replyTo) . "\n" . clean_string($ip) . "\n" . clean_string($browser) . "\n\n" . clean_string($_POST["content"]);

  $headers = "From: $from" . "\r\n" .
      "Reply-To: $replyTo" . "\r\n" .
      'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);
}

header("Location: http://dudzik.co/contact/success");
die();

?>
