;(function(){
	"use strict";
	

	var login = prompt('Введите логин');
	

	if (login === 'Админ') {
		var password = prompt ('Введите пароль')
	}  else if (login === null) {
		alert ('Вход отменен');
	} else if (password !== 'Чёрный Властелин') {
		alert ('Пароль неверен');
	} else {
		alert ('Я вас не знаю');
	}


	if (password === 'Чёрный Властелин') {
		alert ('Добро пожаловать Чёрный Властелин ')
	} else if (password === null) {
		alert ('Вход отменён');
	}

	
})();