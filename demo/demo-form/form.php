<?php
	$name = $_POST["name"];
	$email = $_POST["email"];
	$code = $_POST["code"];
	
	echo '{"name": "'. $name .'", "email": "'. $email .'", "code": "'. $code .'"}';
?>