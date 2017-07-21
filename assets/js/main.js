var $telefono = $("#telephone_number");
var $check = $("#check");
var $boton = $("#continue");

var cargarPagina = function(){

    $check.click(validarTelefono);
    $telefono.change(validarTelefono);

};

var validarTelefono = function(e){
 e.preventDefault();
 if($check.is(":checked") && $telefono.val().length === 10  ){
        disabled();
    }else {
            $boton.attr("disabled", true);
 };
}
var disabled = function(){
  $boton.removeAttr("disabled");
}


/*var screen_splash = function () {
     $('#index').load('2_codigo.html');
        setTimeout(function() {
            $('#index').ready(function() {
                $('#splash').remove();
                window.location.href = "2_codigo.html";
            });
        }, 2000);
}*/
/*var cargarPagina = function () {
    $('#phone-form').submit(validarAcceso);  
    //$("input#icon_telephone").characterCounter();    
};

var validarAcceso = function(){

 if($check.is(":checked") && $telefono.val().length === 10 ){
        disabled();
    } else {
        $boton.attr("disabled");
    };
};
    var disabled = function(){
        $boton.removeAttr("disabled");
    };

 if ($('#checkbox').prop('checked')) {


//Validar API 
var url =  "http://localhost:3000/api/registerNumber";
*/
$(document).ready(cargarPagina);

