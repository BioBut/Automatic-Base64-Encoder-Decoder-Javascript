var encode = $("#text_encode");
var decode = $("#text_decode");
$("#update").prop("checked", true);

$(document).ready(function(){
    if($("#update").is(":checked")){
        decode.removeAttr("disabled");
        encode.attr("disabled", true);
    }else{
        encode.removeAttr("disabled");
        decode.attr("disabled", true);
    }  

});
function changedEncode(){
    if($("#update").is(":checked")){
        encode.val(encodeBase($("#text_decode").val()));
    }else{
        decode.val(decodeBase($("#text_encode").val()));
    }
}

function changedSwitch(){
    if($("#update").is(":checked")){
        decode.removeAttr("disabled");
        encode.attr("disabled", true);
    }else{
        encode.removeAttr("disabled");
        decode.attr("disabled", true);
    }  
}

function encodeBase(string){
    var deBase64 = btoa(string);
    return deBase64;
}

function decodeBase(string){
    var deBase64 = atob(string);
    return deBase64;
}