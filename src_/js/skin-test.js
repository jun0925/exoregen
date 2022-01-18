$(function(){
    var $testEx = $(".test-ex label");
    var $testPrevBtn = $(".test-prev-btn");
    var $testContWrap = $(".test-wrap");
    var $testFormWrap = $(".test-form-wrap");
    var $testResultWrap = $(".test-result-wrap");
    var testShowClass = "show";
    var choiceClass = "choice";
    var origin = window.location.origin;
    
    $testEx.on("click",function(e){
        
        if(e.target.nodeName == 'LABEL') return;
        
        testActive('next');
        var $otherEx_next = $(this).parent().nextAll().children("label");
        var $otherEx_prev = $(this).parent().prevAll().children("label");
        $(this).addClass(choiceClass);
        $otherEx_next.removeClass(choiceClass);
        $otherEx_prev.removeClass(choiceClass);
        e.stopPropagation();
    });
    
    $testPrevBtn.on("click",function(){

        if($(".test1").hasClass(testShowClass)) {
            window.location.href = origin + "/howtouse03.html";
        } else {
            testActive('prev');
        }
    });
    
    var testBox = document.querySelector(".test-box");
    var testChild = testBox.children;
    var testLength = testChild.length;
    var pagingAll = document.querySelector(".all-page");
    pagingAll.innerHTML = testLength;
    
    // 스킨테스트 선택 
    function testActive(type) {
        var testShowCont = document.querySelector(".test.show");
        var testNextCont = testShowCont.nextElementSibling;
        var testPrevCont = testShowCont.previousElementSibling;
        var resultPaging = document.querySelector(".now-page");
        var num = resultPaging.innerHTML;
        
        if(type === 'next') {
            if(!testNextCont) {
                $testContWrap.css("display","none");
                $testFormWrap.fadeIn();
                return false;
            }
            testShowCont.classList.remove(testShowClass);
            testNextCont.classList.add(testShowClass);
            
            if (num >= testLength) return false;
            num = parseInt(num) + 1;

        } else if (type === 'prev') {
            if(!testPrevCont) return false;
            testShowCont.classList.remove(testShowClass);
            testPrevCont.classList.add(testShowClass);
            
            if (num <= 1) return false;
            num = parseInt(num) - 1;
        }
        
        resultPaging.innerHTML = num;
    }
    
    // 테스트 폼 개인정보 입력 이전 버튼
    $("#testFormPrevBtn").on("click",function(){
        $testFormWrap.css("display","none");
        $testContWrap.fadeIn();
        $(".test").css("display","block").eq(":last-child").addClass(testShowClass);
    });

    // 테스트 폼 결과 확인 버튼

    $("#testFormNextBtn").on("click",function(){
        window.location.href = origin + "/skin-test-a1.html";
    });
});