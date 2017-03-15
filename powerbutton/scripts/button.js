$(function () {
    $(".clickable").on("click", function (){
        $("body").toggleClass("bright");
        $(".powerbtn").toggleClass("button-active");
    });
});