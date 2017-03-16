$(function (){
    $("#messageform").on("submit", function (){
        alert("Your message was sent succesfully:\n\n" + getForm("#messageform")["message"]);
    });
});

function getForm(form){
    return $(form).serializeArray().reduce(function (obj, item){
        obj[item.name] = item.value;
        return obj;
    }, {});
}