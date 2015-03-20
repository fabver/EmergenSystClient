var acciones = (function () {
    //jQuery.ajaxSettings.traditional = true;
    "use strict";
    var jsonData;
    var persona = {};
    var _addHandlers = function () {
        $('#btnGuardar').on('click', function () {
            $('.mensaje').show();
            $('#txtMensaje').html('Guardando...');
            $('#imgMensaje').attr('src', 'css/images/ajax-loader.gif');
            guardarNuevo(); 
        });
    };
    $('#txtCed').val(localStorage["cedula"]);
    var guardarNuevo = function () {
            jsonData = JSON.stringify(getDtClinicos());
            alert(jsonData);
            var url = "http://localhost:8020/api/ClinicalData";
            $.ajax({
                type: "POST",
                url: url,
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: true,
                success: function (result) {
                    //alert(result);
                    //insertarComponente('getDatos.html');
                    $('#txtMensaje').html(result);
                    if(result === 'Guardado satisfactoriamente'){
                        //localStorage["cedula"] = ced;
                        $('#imgMensaje').attr('src', 'css/images/icons-svg/check-white.svg');
                        $('#imgMensaje').html(result);
                        setTimeout(function(){
                           $('.mensaje').hide();
                           insertarComponente('getDatos.html');
                        }, 2000);
                    }else{
                        $('#imgMensaje').attr('src', 'css/images/icons-svg/alert-white.svg');
                        setTimeout(function(){
                           $('.mensaje').hide(); 
                        }, 3000);
                    }
                },
                error: function (jqXHR, status, error) {
                    alert("Ajax" + error + "-" + jqXHR.responseText);
                }
            });
    };

    var getDtClinicos = function () {
        var band;
        //var dtClinicos = {};
        var dtClinicos = new Array();
        //band = $('#algs').val();
        //if (band !== '') {
            //console.log('entró en alergias');
            var alergias = { cedula: $('#txtCed').val(), descripcion: $('#algs').val(), tipo: 'Alergia' };
            //dtClinicos.alergias = alergias;
            dtClinicos.push(alergias);
        //}
        //band = $('#ants').val();
        //if (band !== '') {
            //console.log('entró en antecedentes');
            var antecedentes = { cedula: $('#txtCed').val(), descripcion: $('#ants').val(), tipo: 'Antecedente'};
            //dtClinicos.antecedentes = antecedentes;
            dtClinicos.push(antecedentes);
        //}
        //band = $('#cirs').val();
        //if (band !== '') {
            console.log('entró en cirugias');
            var cirugias = { cedula: $('#txtCed').val(), descripcion: $('#cirs').val(), tipo: 'Cirugia' };
            //dtClinicos.cirugias = cirugias;
            dtClinicos.push(cirugias);
        //}
        //band = $('#enfs').val();
        //if (band !== '') {
            //console.log('entró en enfermedades');
            var enfermedades = { cedula: $('#txtCed').val(), descripcion: $('#enfs').val(), tipo: 'Enfermedad' };
            //dtClinicos.enfermedades = enfermedades;
            dtClinicos.push(enfermedades);
        //}
        //band = $('#meds').val();
        //if (band !== '') {
            //console.log('entró en medicamentos');
            var medicamentos = { cedula: $('#txtCed').val(), descripcion: $('#meds').val(), tipo: 'Medicamento' };
            //dtClinicos.medicamentos = medicamentos;
            dtClinicos.push(medicamentos);
        //}

        return dtClinicos;
    };

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
});
