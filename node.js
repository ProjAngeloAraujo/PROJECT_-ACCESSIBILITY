$(document).ready(function(){

    $("#bot-Auditiva").click(function(){
        window.location.href = "Auditiva.html";
    });

    $("#bot-Visual").click(function(){
        window.location.href = "Visual.html";
    });

    $("#bot-Cognitiva").click(function(){
        window.location.href = "Cognitiva.html";
    });

    $("#bot-Motora").click(function(){
        window.location.href = "Motora.html";
    });

    $("#bot-menu").click(function(){
        window.location.href = "index.html";
    });

    // botôes de topico //

    $("#bot-topico1").click(function(){
        $("#bot-topico2, #bot-topico3, #bot-topico4").removeClass("click-bot");
        $("#bot-topico2, #bot-topico3, #bot-topico4").addClass("bot-topico");
        $("#bot-topico1").removeClass("bot-topico");
        $("#bot-topico1").addClass("click-bot");

        $("#paragrafo2, #paragrafo3, #paragrafo4").hide();
        $("#paragrafo1").show();
    });

    $("#bot-topico2").click(function(){
        $("#bot-topico1, #bot-topico3, #bot-topico4").removeClass("click-bot");
        $("#bot-topico1, #bot-topico3, #bot-topico4").addClass("bot-topico");
        $("#bot-topico2").removeClass("bot-topico");
        $("#bot-topico2").addClass("click-bot");

        $("#paragrafo1, #paragrafo3, #paragrafo4").hide();
        $("#paragrafo2").show();
    });

    $("#bot-topico3").click(function(){
        $("#bot-topico2, #bot-topico1, #bot-topico4").removeClass("click-bot");
        $("#bot-topico2, #bot-topico1, #bot-topico4").addClass("bot-topico");
        $("#bot-topico3").removeClass("bot-topico");
        $("#bot-topico3").addClass("click-bot");

        $("#paragrafo2, #paragrafo1, #paragrafo4").hide();
        $("#paragrafo3").show();
    });

    $("#bot-topico4").click(function(){
        $("#bot-topico2, #bot-topico3, #bot-topico1").removeClass("click-bot");
        $("#bot-topico2, #bot-topico3, #bot-topico1").addClass("bot-topico");
        $("#bot-topico4").removeClass("bot-topico");
        $("#bot-topico4").addClass("click-bot");

        $("#paragrafo2, #paragrafo3, #paragrafo1").hide();
        $("#paragrafo4").show();
    });
});