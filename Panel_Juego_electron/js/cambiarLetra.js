
// funcion para cambiar letra del elemento que se realizó click
function CambiarLetra ()
{
	var letraCambiar = $('#myModal #ChangeLetra').val().trim().toUpperCase().charCodeAt();
	alert(letraCambiar);
	var idImage = $("#imgActual").text();
	document.getElementById('' + idImage).style.backgroundImage = "url(imagenes/" + letraCambiar +".png)";
}