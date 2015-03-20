/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function tamaño(tam){
    tam+="px";
    $('body').css('font-size', tam);
};

$(function() {
        $("#range").mousemove(function() {
            var slide = $(this);
            var tam = slide.val();
            tamaño(tam);
        }).trigger('mousemove');
        $("#range").change(function() {
            var slide = $(this);
            var tam = slide.val();
            tamaño(tam);
        }).trigger('change');
});