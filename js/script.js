/*************************************************
                Animation During Scroll
**************************************************/
$(function () {
    //animate during scroll
    new WOW().init();
});
/*************************************************
                main-content-hover-color
**************************************************/

$(document).ready(function(){
      // alert('we are good !!!');
      $('.main-content-div').on('mouseenter mouseleave',function(e){
         $(this).toggleClass('highlight');
         $(this).toggleClass('contentDescription');
      });

      // Smooth scrolling using jQuery easing
      $("a.js-scroll-trigger").click(function() {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1500);
      });


    });
