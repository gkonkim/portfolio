$(function(){

var $bnnnum=0;
// 

// .왼쪽 버튼
$(".prev").click(function(){
    if($bnnnum<=0) return false;
    $bnnnum--;
    $book_w=$("#main_image").width();
    $("#main_image ul").animate({left:-$book_w*$bnnnum},500,function(){
        // left:-$book_w*$bnnnum  = 값을 빼는 이유 왼쪽으로 넘기는 것이라서

        $("#book_roll img").attr("src","image/state_out.png");
        $("#book_roll img").eq($bnnnum).attr("src","image/state_over.png");
    });

    // 0보다 작거나 같으면  1씩 마이너스 1보다 작으면 멈춰라

});


// 오른쪽 버튼
$(".next").click(function(){
if($bnnnum>=3) return false;
$bnnnum++;
    // 3보다 크거나 같으면 멈춰라 그렇지 않으면 1씩증가 3보다 크면 멈춰라

    $book_w=$("#main_image").width();
    // #main_image의 width값을 뽑아서 book_w에 넣어라

    $("#main_image ul").animate({left:-$book_w*$bnnnum},500,function(){
     // bnnnum -이미지 넘긴 횟수 그래서 : 1이됨 
    // ul을 애니메이트 leaf시켜라 마이너스너비 *1번 을0.5초동안 넘겨라

    $("#book_roll img").attr("src","image/state_out.png");
    // 일단 모두 회색으로 바꿔라(초기화)
    $("#book_roll img").eq($bnnnum).attr("src","image/state_over.png");
      // 이미지 바꿔라
      // eq 첫번째를 파란색(화성) 이미지로 바꿔라
    });
  });

  //   인디케이터

  /*<div id = "a123">
  var n =.attr("id");
   n = a123 

   서브 스트링 함수
  n.substr(3,1):a123에서 3번 을 뽑기위  3번째 1개
  (몇번째에서 몇개)
  ====>substr():0번부터 시작
   */

  $("#book_roll li a").click(function(){
      
    var strname = ($(this).parent().attr("id"));
    // 현재 선택한 애의 부모의 아이디를 가져와서 strname에 저장시켜라

    slideTarget(strname.substr(3,1));
// 함수 지정
    return false;
    // slidetarger : 
  });
  function slideTarget(n){
      //   function slideTarget(n) ->n인수 임의로 이름 지정

      var pos = Number(n)*-100+'%';
    //   변수 만들어서 숫자로 변경
    $("#main_image ul").animate({left:pos},8000,function(){
        // pos: 0이면 정지 1부터 이동
        $("#book_roll img").attr("src","image/state_out.png");
        $("#book_roll img").eq(n).attr("src","image/state_over.png");
    });
  };

//   자동 으로 이미지  이동

 var btnnum=0;
 setInterval(function(){
     if(btnnum>3) btnnum=0;
     btnnum++;
     $("#book_roll li a").eq(btnnum).trigger("click");
 });

//  3보다 큰경우 다시 0으로 


// trigger:강제로 이벤스 실캥
// a를 누룰때마다 의 클릭이벤트를 강제로 진행 시켜라


});