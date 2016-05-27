var main = function(){
    $('.tab').click(function(){
       var x = $(this).attr('id');
        
        if(x == "login"){
            $('#signup').removeClass('active');
            $('#login').addClass('active');
            $('#loginbox').slideDown();
            $('#signupbox').slideUp();
        }else{
            $('#login').removeClass('active');
            $('#signup').addClass('active');
            $('#loginbox').slideUp();
            $('#signupbox').slideDown();
        }
    });
//    $('.nav li').on('click', function() {
//        $(this).addClass('active');
//        $(this).siblings().removeClass('active');
//    });
//    $('.nav li').click(function(){
////        $(this).addClass('active');
////        $(this).siblings().removeClass('active');
//        $(".nav li").find("active").removeClass("active");
//   $(this).parent().addClass("active");
//    });
    
    $('.detail_tab').click(function(){
      
        var id = $(this).attr('id');
        
        if(id == "detail1"){
            
            $("#detail2").removeClass("active");
            $("#detail3").removeClass("active");
            $("#detail1").addClass("active");
            
            $("#description").slideDown();
            $("#specification").slideUp();
            $("#review").slideUp();
        }else if(id == "detail2"){
            
            $("#detail1").removeClass("active");
            $("#detail3").removeClass("active");
            $("#detail2").addClass("active");
            
            $("#description").slideUp();
            $("#specification").slideDown();
            $("#review").slideUp();
        }else{
            
            $("#detail1").removeClass("active");
            $("#detail2").removeClass("active");
            $("#detail3").addClass("active");
            $("#description").slideUp();
            $("#specification").slideUp();
            $("#review").slideDown();
        }
    });
};





$(document).ready(main);