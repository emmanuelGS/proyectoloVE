'use strict'

var numero = parseInt(prompt('de que numero quieres la tabla?', 1));

//document.write("<h1>Tabla del" + numero + "</h1>");

	for(var i ; i <= 10; i++)
		{
			document.write(i + "x" + numero + "=" + (i * numero) + "<br/>");
		}

	document.write("<h1> Tabla del " + numero + "</h1>");

	for(var i = 1; i <= 10; i++)
	{
		document.write(i + "x" + numero + "=" + (i * numero) + "<br/>");
	}