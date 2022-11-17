<?php 
	// if(empty($_POST['name']) or empty($_POST['number'])) {
	// 	exit('Не все поля не заполнены');
	// }else{
	// 	$name = htmlspecialchars($_POST['name']);
	// 	$age = htmlspecialchars($_POST['number']);
	// }

	// echo $name . " ". $age;


	if (!empty($_POST)) {
		if (empty($_POST['name'])) {
			$errors[] = 'Поле ФИО пустое';
		}

		if (empty($_POST['number'])) {
			$errors[] = 'Не указан номер телефона';
		}

		if (!empty($errors)) {
			foreach ($errors as $err) {
				echo "<strong>$err</strong><br>";
			}
		}
	}

 ?>