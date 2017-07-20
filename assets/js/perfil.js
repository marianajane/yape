$(document).ready(cargarPagina);

function cargarPagina() {
	 $('#index').load('5registro_tarjeta.html');
        setTimeout(function() {
            $('#index').ready(function() {
                $('#splash').remove();
                window.location.href = "5registro_tarjeta.html";
            });
        }, 2000);
}