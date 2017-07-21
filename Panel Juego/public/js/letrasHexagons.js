//llamar los archivos javascript con la primera letra en minúscula y el nombre de las imágenes también
for (var a=[],i=1;i<37;++i) a[i]=i;

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

a = shuffle(a);
for(var i=1; i<37; i++){
	document.getElementById("backImg" + i).style.backgroundImage = 'url(imagenes/' + a[i-1] + '.png)';
}
for(var i=28; i<37; i++){
	document.getElementById("backImg" + i).style.backgroundImage = 'url(imagenes/' + a[i-1] + '.png)';
}
