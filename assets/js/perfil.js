$(document).ready(cargarPagina);

function cargarPagina() {
	 $('#index').load('5_registro_tarjeta.html');
        setTimeout(function() {
            $('#index').ready(function() {
                $('#splash').remove();
                window.location.href = "5_registro_tarjeta.html";
            });
        }, 3000);
}