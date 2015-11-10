/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $('.content').hide();
    if (localStorage.cedula){
        insertarComponente('inicio.html');
    }else{
        insertarComponente('setPersonalData.html');
    }
    setTimeout(function(){
        $('.content').show();
        $('.mensaje').hide();
    }, 1000);
    $('.btnMenu').click(function(){
        if($('.contentMenu').hasClass('contentMenuVis')){
           close();
        }else{
           show();
        }
    });
    $('.option1').click(function(){
        insertarComponente('inicio.html');
    });
    $('.option2').click(function(){
        if(localStorage.cedula){
            insertarComponente('getDatos.html'); 
        }else{
            insertarComponente('setPersonalData.html');
        }
    });
    $('.option3').click(function(){
        insertarComponente('contactList.html');
    });
    $('.btnHome').click(function(){
        insertarComponente('inicio.html');
        if($('.footAcuerdos').hasClass('footerVis')){
            $('.content').css('bottom', '0px');
            $('.footAcuerdos').removeClass('footerVis');
            $('.buttonSelected').removeClass('buttonSelected');
            $('.menuBar button').addClass('startButton');
        }
    });
    
    $('.btnCloseMenu').click(function(){
        close();
    });
});

function insertarComponente(componente){
    $.ajax({
        mimeType: 'text/html; charset=utf-8', 
        url: componente,
        type: 'GET',
        dataType: "html",
        async: true,
        success: function(data) {
            $('.content').html(data);
            //setTimeout('show()', 20);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
}

function show(){
     $('.contentMenu').addClass('contentMenuVis');
     $('.menu').focus();
}

function close(){
    $('.contentMenu').removeClass('contentMenuVis');
    //setTimeout('deleteMenu()', 30);
}

function deleteMenu(){
    $('.contentMenu').remove();
}