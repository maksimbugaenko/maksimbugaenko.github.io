;(function(){
	"use strict";
	var login = prompt('Введите логин');
	

	if (login === 'Админ') {
		var password = prompt ('Введите пароль')
	} else if (login === null) {
		alert ('Вход отменен');
	} else {
		alert ('Я вас не знаю');
	}


	if (password === 'Чёрный Властелин') {
		alert ('Добро пожаловать Чёрный Властелин ')
	} else if (password === null) {
		alert ('Вход отменён');
	} else {
		alert ('Пароль неверен');
	}  

	















	// if (login === 'Админ') {
	// 	var password = prompt('Введите пароль');
	// }
	// if (password === 'Черный Властелин') {
	// 	alert('Добро пожаловать!');
	// } else{
	// 	alert ("Пароль не верен");
	// }

	// if (login !== 'Админ')  {
	// 	alert ("Я вас не знаю");
	// }

	// if (login === null) {
	// 	alert ("Вход отменён");
	// }
	
	// if (password === null) {
	// 	alert ("Вход отменен");
	// }
	
	// else if {
	// 	alert ('Пароль не верен');
	// }
	// if (password !== 'Черный Властелин')  {
	// // 	alert ("Пароль не верен");
	// // }
})();