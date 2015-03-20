/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $('li .liTitle').click(function(){
        var parent = $(this).parent();
        var obj = parent.children('.liContent');
        var title = $(this).children('span');
        showContentList(obj, title); 
    });
});

function showContentList(obj, title){
    if(obj.hasClass('liContentVis')){
        obj.removeClass('liContentVis');
        title.css('background-image', "url('../EmergenSyst/css/images/icons-svg/carat-d-white.svg')");
    }else{
        $("li .liContentVis").removeClass('liContentVis');
        $(".iconCollap").css('background-image', "url('../EmergenSyst/css/images/icons-svg/carat-d-white.svg')");
        obj.addClass('liContentVis');
        title.css('background-image', "url('../EmergenSyst/css/images/icons-svg/carat-u-white.svg')");
    }
}
