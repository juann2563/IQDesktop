
// funcion para cambiar letra del elemento que se realizó click
function CambiarLetra ()
{
	var letraCambiar = $('#myModal #ChangeLetra').val().trim().toUpperCase().charCodeAt();
	//alert(letraCambiar);
	//alert(letraCambiar);
	if(isNaN(letraCambiar)){
		letraCambiar = "A";
		letraCambiar = letraCambiar.charCodeAt();
	}
	var idImage = $("#imgActual").text();
	document.getElementById('' + idImage).style.backgroundImage = "url(imagenes/" + letraCambiar +".png)";
}