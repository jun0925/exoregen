/***************************************
* file-name: meterial.js
* page-file-location: /meterial.html,meterial-detail.html 
* using: 자료실 관련 페이지 사용 JS
* date: 2021-07-13
****************************************/

$(function(){
    var $pagingBtn = $(".paging");

    $pagingBtn.on("click",function(){
        var choiceClass = "choice";
        $(this).addClass(choiceClass);
        $pagingBtn.not($(this)).removeClass(choiceClass);
    });
});