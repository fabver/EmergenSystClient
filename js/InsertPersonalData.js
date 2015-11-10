var acciones = (function () {
    "use strict";
    var jsonData;
    var persona = {};
    var _addHandlers = function () {
        $('#btnGuardar').on('click', function () {
            $('.mensaje').show();
            $('#txtMensaje').html('Guardando...');
            $('#imgMensaje').attr('src', 'css/images/ajax-loader.gif');
            var op = false;
            if($(this).nameClass === 'modificar'){
                op = true;
            }
            setTimeout(function(){guardar(op);}, 1000);
        });
    };
    
    $('#btnChangePhoto').change(function(){
        var obj = $(this)[0].files[0];
        processFiles(obj);
    });
    
    var getPersona = function(){
        var url = "http://localhost:1919/api/PersonalData/api/PersonalData/{id}";
        $('.mensaje').show();
        $('#txtMensaje').html('Guardando...');
        $.ajax({
            type: "GET",
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (result) {
                alert(result);
                $('#txtMensaje').html(result);
            },
            error: function (jqXHR, status, error) {
                alert("Ajax" + error + "-" + jqXHR.responseText+status);
            }
        });
        setTimeout(function(){
           $('.mensaje').hide(); 
        }, 1500);
    };

    var guardar = function (op) {
        var band = valForm();
        if (band) {
            getDtPersonales();
            jsonData = JSON.stringify(persona);
            alert(jsonData);
            var ced = $('#txtCed').val();
            if (op){
                //var url = "http://localhost:1919/api/PersonalData/" + $('#txtCed').val();
                var url = "http://localhost:8020/api/PersonalData/" + $('#txtCed').val();
                $.ajax({
                    type: "PUT",
                    url: url,
                    data: jsonData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    success: function (result) {
                        alert(result);
                    },
                    error: function (jqXHR, status, error) {
                        alert("Ajax" + error + "-" + jqXHR.responseText);
                    }
                });
            }else{
                var url = "http://localhost:8020/api/PersonalData";
                var urlPrueba = "http://localhost:1919/api/PersonalData";
                $.ajax({
                    type: "POST",
                    url: url,
                    data: jsonData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: true,
                    success: function (result) {
                        //alert(result);
                        $('#txtMensaje').html(result);
                        if(result === 'Guardado satisfactoriamente'){
                            localStorage["cedula"] = ced;
                            $('#imgMensaje').attr('src', 'css/images/icons-svg/check-white.svg');
                            $('#imgMensaje').html(result);
                            setTimeout(function(){
                               $('.mensaje').hide();
                               insertarComponente('setClinicalData.html');
                            }, 2000);
                        }else{
                            $('#imgMensaje').attr('src', 'css/images/icons-svg/alert-white.svg');
                            setTimeout(function(){
                               $('.mensaje').hide(); 
                            }, 3000);
                        }
                    },
                    error: function (jqXHR, status, error) {
                        //alert("Ajax" + error + "-" + jqXHR.responseText);
                        $('#txtMensaje').html("Error al guradr los datos. Intentelo nuevamente");
                        $('#imgMensaje').attr('src', 'css/images/icons-svg/delete-white.svg');
                        setTimeout(function(){
                           $('.mensaje').hide(); 
                        }, 3000);
                    }
                });
            }
        }else{
            $('#txtMensaje').html("Asegurese de llenar todos los datos");
            $('#imgMensaje').attr('src', 'css/images/icons-svg/alert-white.svg');
            setTimeout(function(){
               $('.mensaje').hide(); 
            }, 3000);
        }
    };

    var valForm = function () {
        if ($('#txtCed').val() !== "" && $('#txtNomb').val() !== "" && $('#txtApell').val() !== "" && $('#dttFecha').val() !== "" && $('#cbxSexo').val() !== "") {
            return true;
        } else { return false; }
    };

    var getDtPersonales = function () {
        persona.cedula = $('#txtCed').val();
        persona.nombres = $('#txtNomb').val();
        persona.apellidos = $('#txtApell').val();
        persona.fNacimiento = $('#dttFecha').val();
        persona.sexo = $('#cbxSexo').val();
        return persona;
    };

    function processFiles(files) {
        var file = files;

        var reader = new FileReader();

        reader.onload = function (e) {
            // Cuando éste evento se dispara, los datos están ya disponibles.
            // Se trata de copiarlos a una área <div> en la página. 
            var output = $("#fileOutput");
            output.css({'backgroundImage' : "url('" + e.target.result + "')"});
            persona.foto = e.target.result;
            console.log(persona.foto);
        };
        reader.readAsDataURL(file);
    }

    return {
        init: function () {
            _addHandlers();
        },
        getRecord: function () {
            return dataRecord;
        }
    };
    
}());


$(document).ready(function () {
	acciones.init();
    //var url = "http://localhost:8020/api/PersonalData";
    //        $.ajax({
    //            type: "GET",
    //            url: url,
    //            contentType: "application/json; charset=utf-8",
    //            dataType: "json",
    //            async: true,
    //            success: function (result) {
    //                alert(result);
    //            },
    //            error: function (jqXHR, status, error) {
    //                alert("Ajax" + error + "-" + jqXHR.responseText+status);
    //            }
    //        });
});
