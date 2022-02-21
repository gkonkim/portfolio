$(function(){
    // 햄버거 메뉴
    $(".ham_i").click(function(){
        $("#ham_header").animate({marginLeft:"95%"},300);
    });
    $("#crossx").click(function(){
        $("#ham_header").animate({marginLeft:"0px"})

    });

    // 검색
    $(".fieldback .ser_crox").stop().hide();
    $("form").stop().hide();

    $(".htop_back .main_ser").click(function(){

    $("form").stop().slideDown(400);
        $(".fieldback .ser_crox").stop().show();
        $(".htop_back .main_ser").stop().hide()
    });    

    $(".ser_crox").click(function(){
        $("form").stop().slideUp(400);
        $(".fieldback .ser_crox").stop().hide();
        $(".htop_back .main_ser").stop().show()
    });


    // 배너
    $(function(){
        $(".main").slick({
            autoplay:true,
            autoplaySpeed:4000,
            slidesToShow:1,
            slidesToScroll:1,   
            responsive:[{
                breakpoint:480,
                settings:{
                    slidesToShow:1,
                    slideToScroll:1
                }
            }
        ]
        });
    });


    // 추천레시피
     
$(function(){     
    $('#slide_banner').slick({
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,   
        slidesToScroll: 1, 
        responsive: [
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
        ]
    });  
}); 






    
	

			

});