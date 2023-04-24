// $('p').mouseenter(function(){
//     // $(this).replaceWith("<p>ceci n'est pas un paragraphe</p>");
//         $(this).html("ceci n'est pas un paragraphe"); //meilleure technique

// });

// $('p').mouseleave(function(){
//     // $(this).replaceWith("<p>ceci est un paragraphe</p>");
//     $(this).html("ceci est un paragraphe"); //meilleure technique
// });

// =====================================================================2
// $('#bloc').mouseenter(function(){
//     console.log("attention vous entrez dans la zone rouge");
// })

// $('#bloc').mousedown(function(){
//     $(this).css("border-color", "lime");
//     $("header").css("color", "lime");
//     // $("header").append("<p>up</p>");
//     var el=$("<p>up</p>");
//     el.click(cacher);
//     $("header").append(el)
// })
// $('#bloc').mouseup(function(){
//     $(this).css("border-color", "red");
//     // $("footer").append("<p>down</p>")
//     $("footer").css("color", "red");
//     // creer un nouvel element p jquery;
//     var el=$("<p>down</p>");
//     el.click(cacher);
//     $("footer").append(el)
// })
// var cacher=function(){
//     $(this).hide();
// }


// =====================================================================3

// $(document).ready(function(){
//     $("ul").hide()
// })

// $('button').click(function(){
//     $("ul").toggle(1000)
//     if($(this).text().trim()=='afficher'){
//         $(this).text("masquer");
//     }
//     else{
//         $(this).text('afficher')
//     }
// });

// ===============================================================3.3

// $(document).ready(function(){
//     $("#b").click(function(){
//       $("p").animate({left: '100px'},2000);
//     });
//   });

// ==========================================================4

// $(document).ready(function(){
//     $('img').hide()
// })
// $(document).ready(function(){
//     var images = $('img');
//     images.first().show()
// })

// ou autre options

// $(document).ready(function () {
//     var images = $('img.perso');
//     var n = images.length
//     images.first().show();
//     var count = 0;
//     var suivant = function () {
//         images.eq(count).hide();
//         count++;
//         if (count == n) {
//             count = 0;
//         }
//         // count = (count+1) %n c'est le if en incrementation circulaire
//         images.eq(count).show();
//     };

//     // window.setInterval(suivant,2000)
//     var dissolve = function () {
//         images.eq(count).fadeOut("slow", function () {
//             count = (count + 1) % n;
//             images.eq(count).fadeIn("slow")
//         });
//     };


//     var rotate = function () {
//         var i = images.eq(count);
//         i.animate({ left: '-500%' }, '5000', function () {
//             i.hide();
//             count = (count + 1) % n;
//                 i=images.eq(count);
//         i.css('left', '500%');
//         i.show();
//         i.animate({ left: '0px' }, '5000');
//     })

//         }

// // $("#suivant").click(rotate);
// window.setInterval(rotate,3000)
// });

// ========================================================================qcm

$("#btn").click(function(){
    if($('.q1r3').is(":checked")){
    $("#r1").html('Bonne reponse');
    $("#r1").css("color", "lime")
}else{
    $("#r1").html('Mauvaise reponse');
    $("#r1").css("color", "red")

    }
});

$("#btn").click(function(){
    if($('.q2r3').is(":checked")){
    $("#r2").html('Bonne reponse');
    $("#r2").css("color", "lime")
}else{
    $("#r2").html('Mauvaise reponse');
    $("#r2").css("color", "red")

    }
});
$("#btn").click(function(){
    if($('.q3r3').is(":checked")){
    $("#r3").html('Bonne reponse');
    $("#r3").css("color", "lime")
}else{
    $("#r3").html('Mauvaise reponse');
    $("#r3").css("color", "red")

    }
});
$("#btn").click(function(){
    if($('.q4r3').is(":checked")){
    $("#r4").html('Bonne reponse');
    $("#r4").css("color", "lime")
}else{
    $("#r4").html('Mauvaise reponse');
    $("#r4").css("color", "red")

    }
});
$("#btn").click(function(){
    if($('.q5r1').is(":checked")){
    $("#r5").html('Bonne reponse');
    $("#r5").css("color", "lime")
}else{
    $("#r5").html('Mauvaise reponse');
    $("#r5").css("color", "red")

    }
});









