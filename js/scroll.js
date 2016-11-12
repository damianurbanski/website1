  $(window).scroll(function() {
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top;
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
      
      if (objectBottom+100 < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).delay(500).fadeTo(1111,1);}
      } else { 
        if ($(this).css("opacity")==1) {$(this).delay(500).fadeTo(1111,0);}
      }
    });
  });

$(document).ready(function() {
$(".start-page").animate({
    opacity: 1

  }, 1000, function() {

$(".start-span-1").animate({opacity: 1}, 1000);
$("hr").animate({width: "50%"}, 1000,function(){
	
$(".start-span-2").animate({opacity:1,marginTop:"-10px",marginTop:"10px"}, 1000);
$(".start-span-3").animate({opacity:1,marginTop:"-2px"}, 1000);
$(".start-span-4").animate({opacity:1,marginTop:"-2px"}, 1000);
});
  
  
  
  });
  

});