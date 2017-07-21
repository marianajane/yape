var url =  "http://localhost:3000/api/registerNumber";
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


/*
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

$post("http://localhost:3000/api/registerNumber" {
   "phone": "5561184852",
   "terms": true
}).then (function (response) {
    console.log(response)
}).catch (function (error){
    console.log(error)
});
*/
$(document).ready(cargarPagina);

