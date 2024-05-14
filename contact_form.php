<?php

if(isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$to = "raghulrahu@gmail.com"; // Replace with your email address
	$subject = "New Contact Form Submission";
	$headers = "From: ".$email;
	$body = "Name: ".$name."\nEmail: ".$email."\n\nMessage:\n".$message;

	if(mail($to, $subject, $body, $headers)) {
		http_response_code(200);
	} else {
		http_response_code(500);
	}
}

?>
