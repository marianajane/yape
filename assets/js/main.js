var cargarPagina = function () {
	$('#phone-form').submit(validarAcceso);  
    //$("input#icon_telephone").characterCounter();    
};

var validarAcceso = function(){
 e.preventDefault();
var $telefono = $("#telephone_number");
var $check = $("#check");
var $boton = $("#continue");

 if($check.is(":checked") && $telefono.val().length === 10 ){
        disabled();
    } else {
        $boton.attr("disabled");
	};
};
	var disabled = function(){
  		$boton.removeAttr("disabled");
	};

/* if ($('#checkbox').prop('checked')) {

  $('#continue').removeProp('disabled');		
        } 
    });
$(document).ready(cargarPagina);
/*Validación números
function continuar registro() {
    var form = document.getElementById("phone_number");
    var phone = "";
    for (var i = 0; i < form.length ;i++) {
       
    }
}*/
