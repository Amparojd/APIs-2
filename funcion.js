'use strict';

if (window.File && window.FileReader && window.FileList) {
  console.log("Todas las API's soportadas");
} else {
  console.log('La API de File no es soportada por este navegador');
}


function handleFileSelected(e) {
  var file = e.target.files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    var src = document.createAttribute('src');
    src.value = e.target.result;
    video.setAttributeNode(src);
    alert('Cargando el video');
  };
  reader.readAsDataURL(file);
}

document.getElementById('videoFile')
document.addEventListener('change', handleFileSelected, false);
