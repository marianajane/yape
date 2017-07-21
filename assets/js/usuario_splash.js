$(document).ready(cargarPagina);

function cargarPagina() {
	 $('#index').load('3_usuario.html');
        setTimeout(function() {
            $('#index').ready(function() {
                $('#splash').remove();
                window.location.href = "3_usuario.html";
            });
        }, 4000);
}