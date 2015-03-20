/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var getDatos = function(cod){
    var url = "http://localhost:8020/api/HistoriaClinica/" + cod;
    var urlPrueba = "http://localhost:1919/api/HistoriaClinica/" + cod;
    //alert(url);
    $('.mensaje').show();
    $('#txtMensaje').html('Cargando...');
    $('#imgMensaje').attr('src', 'css/images/ajax-loader.gif');
    $.ajax({
        type: "GET",
        url: urlPrueba,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: function (result) {
            //alert(result);
            showDatos(result);
        },
        error: function (jqXHR, status, error) {
            //alert("Ajax" + error + "-" + jqXHR.responseText+status);
            $('#txtMensaje').html("Error al cargar los datos del usuario.");
            $('#imgMensaje').attr('src', 'css/images/icons-svg/delete-white.svg');
            setTimeout(function(){
               $('.mensaje').hide(); 
            }, 3000);
        }
    });
};

var showDatos = function(jsonDatos){
    var datos = JSON.parse(jsonDatos);
    var fecha = getDate(datos.persona.fNacimiento);
    $('#foto').css({'backgroundImage' : "url('" + datos.persona.foto + "')"});
    //console.log(datos.persona.foto);
    $('#lblNomb').html('<b>'+datos.persona.nombres + " " + datos.persona.apellidos+'</b>');
    //$('#lblID').html(datos.persona.cedula);
    $('#lblFN').html(datos.persona.edad + " años");
    if(datos.persona.sexo === "M"){
        $('#lblSexo').html("Masculino");
    }else{
        $('#lblSexo').html("Femenino");
    }
    
    if(datos.datosClinicos[0].descripcion !== ""){
        $('#lblAler').html(datos.datosClinicos[0].descripcion);
    }else{
        $('#lblAler').html("Ninguna");
    }
    if(datos.datosClinicos[1].descripcion !== ""){
        $('#lblAnt').html(datos.datosClinicos[1].descripcion);
    }else{
        $('#lblAnt').html("Ninguno");
    }
    if(datos.datosClinicos[2].descripcion !== ""){
        $('#lblCir').html(datos.datosClinicos[2].descripcion);
    }else{
        $('#lblCir').html("Ninguna");
    }
    if(datos.datosClinicos[3].descripcion !== ""){
        $('#lblEnf').html(datos.datosClinicos[3].descripcion);
    }else{
        $('#lblEnf').html("Ninguna");
    }
    if(datos.datosClinicos[4].descripcion !== ""){
        $('#lblMed').html(datos.datosClinicos[4].descripcion);
    }else{
        $('#lblMed').html("Ninguno");
    }
     $('.mensaje').hide();
};

var getDate = function(date){
    d = new Date(date);
    var day = d.getDate()+1;
    var month = d.getMonth()+1;
    var year = d.getFullYear();
    if(day <10 ){
        day = '0'+day;
    }
    if(month <10 ){
        month = '0'+month;
    }
    return [day, month, year].join('/');
};

$(document).ready(function(){
    getDatos(localStorage["cedula"]);
    //getDatos('1065645736');
});
