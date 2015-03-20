/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    
    $('#bEnf').on('change',function(){
         var opc= $('#bEnf');
         var obj = $('#enfs');
         visible(opc,obj);
    });
    
     $('#bCir').on('change',function(){
         var opc= $('#bCir');
         var obj = $('#cirs');
         visible(opc,obj);
    });
    
     $('#bMed').on('change',function(){
         var opc= $('#bMed');
         var obj = $('#meds');
         visible(opc,obj);
    });
    
     $('#bAlg').on('change',function(){
         var opc= $('#bAlg');
         var obj = $('#algs');
         visible(opc,obj);
    });
    
     $('#bAnt').on('change',function(){
         var opc= $('#bAnt');
         var obj = $('#ants');
         visible(opc,obj);
    });
    
    $('.text').on("blur",function(){
        validar($(this));
    });
});

function visible(opc,obj){
    opc= opc.val();
    if (opc==="true"){
        obj.attr({'readOnly':false, 'autofocus':true});
    }else{
        obj.attr('readOnly',true);
    }
} 

function validar(obj){
    if (obj.val() === ""){
        obj.attr('type',"text");
        obj.attr('placeholder',"No se llenó el dato");
        obj.css('border'," 2px #e20c0c inset");
        obj.attr('required',"true");
        obj.css({
            'background-image': "url(css/images/icons-svg/alert-red.svg)", 
            'background-repeat' : 'no-repeat',
            'background-position-y': 'center',
            'background-position-x': 'calc(100% - 5px)',
            'background-size': '25px'
        });
        return false;
    }else{
        obj.css('border',"2px buttonface inset");
        return true;
    }
}

function cambiar(obj) {
    if (obj.type === "text") {
        if (obj.name === "ced") {
            obj.type = "number";
        } else if (obj.name === "fecha") {
            obj.type = "date";
        }
    }
}