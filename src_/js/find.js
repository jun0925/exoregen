/***************************************
* file-name: find.js
* page-file-location: /find.html
* using: 아이디,비밀번호 찾기 페이지 사용 js
* date: 2021-07-16
****************************************/

$(function(){
    var $findTab = $(".find-tab .tab");

    $findTab.on("click",function(){
        var choiceClass = "choice"
        var $thisId = $(this).attr("id");
        var $findIdBox = $(".find-id-box");
        var $findPwBox = $(".find-pw-box");
        $(this).addClass(choiceClass);
        $findTab.not($(this)).removeClass(choiceClass);

        if($thisId == "findIdTab") {
            $findPwBox.css("display","none");
            $findIdBox.css("display","block");
        } else {
            $findIdBox.css("display","none");
            $findPwBox.css("display","block");
        }
    });
});