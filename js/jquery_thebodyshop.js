//jquery 부르는 테스트 파일
$(document).ready(function(){
    $("body").css("background-color","#ffffff");  
});
//헤더 슬라이드 영역
img_back = new Array (3);
img_back[0] = "images/main/058ec09d0b10.jpg";
img_back[1] = "images/main/bba8a48-2344-4357-bccf-4faa3add9796.jpg"; 
img_back[2] = "images/main/f487b1a-f9a6-4756-979b-b2eb86c5d4a9.jpg"; 
indexImg = 0;

function showslide(n) {
    slide = document.getElementsByClassName("myslide");
    for(i=0; i<slide.length; i++) { 
        slide[i].style.display="none";
    }
    if(n<=0) slideIndex=slide.length;
    if(n>=4) slideIndex=1;
    slide[slideIndex-1].style.display="block"; 
    }
    slideIndex = 1;
    showslide(slideIndex);  

    //좌우 화살표 누를때
function plussslide(n) { 
    slideIndex= slideIndex+n;
    showslide (slideIndex);
    showNumber();
}
    //자동 슬라이드
setInterval("plussslide(1)",3000);

// 컨텐츠1 슬라이드 영역
// 헤더 슬라이드 영역
//...........모르겠음 ㅠㅠ
img = document.getElementsByClassName("content1slide_content1");
img[0].style.transform="translateX(-345px)";

