;(function IIFE(){
	"use strict";
	alert ("Возведение в квадрат");
	function map(foo, arr){
		var narr = [];
		for(var i=0; i<arr.length; ++i){
			narr.push(square(arr[i]))
		}		
		return narr
	}
	function square(x) { return x * x; } 
	console.log(map(square, [1,2,3,4])); 
	alert ("Массив до возведения: 1,2,3,4");
	alert ("Массив после возведения: 1,4,9,16");
}) ();