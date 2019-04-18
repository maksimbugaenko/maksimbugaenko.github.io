;(function(){
	"use strict";
	var playList = [
	{
		author: "LED ZEPPELIN",
		song:"STAIRWAY TO HEAVEN"
	},
	{
		author: "QUEEN",
		song:"BOHEMIAN RHAPSODY"
	},
	{
		author: "LYNYRD SKYNYRD",
		song:"FREE BIRD"
	},
	{
		author: "DEEP PURPLE",
		song:"SMOKE ON THE WATER"
	},
	{
		author: "JIMI HENDRIX",
		song:"ALL ALONG THE WATCHTOWER"
	},
	{
		author: "AC/DC",
		song:"BACK IN BLACK"
	},
	{
		author: "QUEEN",
		song:"WE WILL ROCK YOU"
	},
	{
		author: "METALLICA",
		song:"ENTER SANDMAN"
	}
	];
	var list = document.getElementById("list");
	for(var j = 0; j < playList.length; j++)
	{
		var listItem = document.createElement("li");
		listItem.innerText = playList[j].author + " - " + playList[j].song;
		// listItem.classList.add('num');
		list.appendChild(listItem);
	}

})();