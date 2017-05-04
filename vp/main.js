
$(document).ready(function(){




/*************************************************************/

  		
      $(".btna1").click(function() {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
          }, 1000);
          $(".btna1").addClass("active");
          $(".btna2").removeClass("active");
      });

      $(".btna2").click(function() {
          $('html, body').animate({
              scrollTop: $(".contact").offset().top
              }, 1000);
              $(".btna2").addClass("active");
              $(".btna1").removeClass("active");
      });

      // $('html, body').scroll(function(){
      //   $(".btna1").removeClass("active")
      // });

       $("#btnb1").click(function() {
          $('html, body').animate({
              scrollTop: $(".appointment2").offset().top
          }, 1000);
      });

       $("#btnb2").click(function() {
          $('html, body').animate({
              scrollTop: $("#appointment3").offset().top
          }, 1000);
      });

       $("#btnb3").click(function() {
          $('html, body').animate({
              scrollTop: $("#appointment4").offset().top
          }, 1000);
      });

       $("#btnb4").click(function() {
          $('html, body').animate({
              scrollTop: $("#appointment5").offset().top
          }, 1000);
      });

       $("#btnb5").click(function() {
          $('html, body').animate({
              scrollTop: $("#appointment6").offset().top
          }, 1000);
      });

      $("#startover").click(function() {
          $('html, body').animate({
              scrollTop: $(".appointment").offset().top
          }, 1000);
      });

      $("#last").click(function() {
        alert("Thanks for booking an appointment with us! You will recieve a confirmation email shortly.");
      });

    
  	$(window).resize(function(){
    $('span').text(x += 1);
    });

    });