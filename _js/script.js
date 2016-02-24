$(document).ready(function(){
    
  $(".open-btn").click(function(){
          $(".container").addClass('open-navigate');
   });
    
    $(".close-btn").click(function(){
       $(".container").removeClass("open-navigate"); 
    });
    

            
 $(window).scroll(function (event) {
     var y = $(this).scrollTop();
     if(window.innerWidth >= 555){ 
         var z = $('#header').css('min-height').replace(/[^-\d\.]/g, '');
         if(y > z){
             $('.nav').addClass('color');
             $('.navigation').addClass('fix');
         }else{
             $('.nav').removeClass('color');
             $('.navigation').removeClass('fix');
              }
         }
});
    
});
