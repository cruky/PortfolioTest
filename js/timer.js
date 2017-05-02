function odliczanie()
	{
		today = new Date();
		<!-- obiekt data jest zestawem zmiennych D M R  -->

		var godzina = today.getHours();
		if(godzina<10) godzina = "0" + godzina
		var minuta = today.getMinutes();
		if(minuta<10) minuta = "0" + minuta
		var sekunda = today.getSeconds();
		if(sekunda<10) sekunda = "0" + sekunda
		document.getElementById("zegar").innerHTML =  
		godzina + ":" + minuta + ":" + sekunda ;
		
		setTimeout("odliczanie()",1000)
	}	
