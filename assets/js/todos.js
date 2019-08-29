$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$('input[type="text"]').keypress(function(event) {
    if(event.which === 13){
        let new_item = $(this).val();
        $(this).val("");
       $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + new_item + "</li>")
    }
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(3000, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$(".fa-plus-square").click(function() {
    $("input[type='text']").fadeToggle();
});
