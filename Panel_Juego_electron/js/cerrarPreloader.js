var container = document.getElementById("container_preloader");
// setTimeout perimite aejecutar algo luego de haber pasado cierto tiempo
setTimeout(function(){
	container.classList.add('cerrar');
	$('#header').fadeIn(2000);
	$('#panel').fadeIn(2000);
},9000);