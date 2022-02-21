$(function() {
    $(".wp1").waypoint(function(){
        $(".wp1").addClass("animated fadeInLeft");
    },{
        offset:"75%"    
        // offset :74% =>아래쪽에 갔을때 나와라
    });

// 아래-위
    $(".wp2").waypoint(function(){
        $(".wp2").addClass("animated fadeInUp");
    },{
        offset:"75%"           
    });


    $(".wp3").waypoint(function(){
        $(".wp3").addClass("animated fadeInUp");
    },{
        offset:"75%"    
    });


    $(".wp4").waypoint(function(){
        $(".wp4").addClass("animated fadeInUp");
    },{
        offset:"75%"    
    });


    // 위아래
    $(".wp6").waypoint(function(){
        $(".wp6").addClass("animated fadeInOut");
    },{
        offset:"75%"    
    });

    $(".wp7").waypoint(function(){
        $(".wp7").addClass("animated fadeInOut");
    },{
        offset:"75%"    
    });

    $(".wp8").waypoint(function(){
        $(".wp8").addClass("animated fadeInOut");
    },{
        offset:"75%"    
    });











	
});