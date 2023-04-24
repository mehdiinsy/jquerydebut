$("div.test").add("p.quote").addClass("blue").slideDown("slow");
$.each([1,2,3], function() {document.write(this + 1);});

$(document).ready(function(){
    $(".load_page_on_click").click(function(){
        var email = $("input[name=email]").val();
        $.Ajax({
            async: "true",
            type: "GET",
            url: "mapage.php",
            data: "email=" + encodeURIComponent(email),
            error: function (errordata){
                $("#error").html(errordata);
            },
            success: function (data){
                $("#container").html(data);
                $("#error").append("contenu chargé");
            }
        }); // de Ajax
    }); // de click
}); // de ready