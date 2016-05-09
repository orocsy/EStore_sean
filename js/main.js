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
    $(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});


}


$(document).ready(main);