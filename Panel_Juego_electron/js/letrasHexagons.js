//llamar los archivos javascript con la primera letra en minúscula y el nombre de las imágenes también

//Generar un random
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
//almaceno todos los random obtenidos en un array
var random = [];
for(var i=0; i<36; i++){
	random[i]=randomIntFromInterval(63,90);
	if(random[i]==63)
	{
		random[i] = randomIntFromInterval(64,90);
	}
}
// se asigno los random a las imagenes para que aparezca un random en el tablero con las letras
for(var i=1; i<37; i++){
	document.getElementById("backImg" + i).style.backgroundImage = 'url(imagenes/' + random[i-parseInt(1)] + '.png)';
}
