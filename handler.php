<?php

    $to = "techedemy@gmail.com";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $csubject = $_REQUEST['subject'];
    $cmessage = $_REQUEST['message'];

    $headers = "From: $from";
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $from . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $subject = "You have a message from your Industial Template.";

    $logo = 'http://demos.pixelatethemes.com/industrial/images/header/logo-2.png';

	$body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Industrial Mail</title></head><body>";
	$body .= "<table style='width: 100%;'>";
	$body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'><a href='#'><img src='{$logo}' alt=''></a></td></tr></thead><tbody>";
	$body .= "<tr><td style='border:none;'>{$name}</td><td style='border:none;'>Sender: {$from}</td></tr>";
	$body .= "<tr><td style='border:none;'>Subject: {$csubject}</td></tr>";
	$body .= "<tr><td></td></tr>";
	$body .= "<tr><td style='border:none;'>{$cmessage}</td></tr>";
	$body .= "</tbody></table>";
	$body .= "</body></html>";

    $send = mail($to, $subject, $body, $headers);

?>