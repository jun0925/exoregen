$(function(){
    $(".tab").on("click",function(){
        console.log("ok");
        if(!$(this).index() == 0) {
            alert("준비중입니다.");
            return false;
        }

        $(this).addClass("choice");
        $(".tab").not($(this)).removeClass("choice");
    });
});