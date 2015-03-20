/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $('#btnZoom').click(function(){
        if(!$('#rangeCont').hasClass('rangoVis')){
            $('#rangeCont').addClass('rangoVis');
            showFooter();
            setTimeout(function(){$('#range').focus();}, 200);
            closeMenu();
        }
    });
    
    $('#btnContraste').click(function(){
        var cont = $(this).html();
        if (cont === "Establecer alto contraste"){
            $(this).html('Quitar alto contraste');
//            showFooter();
//            closeMenu();
            $('head').append('<link id="highContrastStyle" href="css/highContrast.css" rel="stylesheet" type="text/css"/>');
        }else{
            $(this).html('Establecer alto contraste');
            $('#highContrastStyle').remove();
        }
    });
    
    $('#btnAceptar').click(function(){
        backToMenu();
    });
    
    $('#btnCancelar').click(function(){
        backToMenu();
    });
    
});

 function backToMenu(){
    $('#rangeCont').removeClass('rangoVis');
    closeFooter();
    showMenu();
}

function showMenu(){
    $('.menu').removeClass('menuInv');
}

function closeMenu(){
    $('.menu').addClass('menuInv');
}

function showFooter(){
    $('.footApp').addClass('footerVis');
}

function closeFooter(){
    $('.footApp').removeClass('footerVis');
}