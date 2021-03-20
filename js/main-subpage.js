(function($) {
  
  "use strict";
  
  /* Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();

  
  /* showcase Slider
  =============================*/
   var owl = $(".showcase-slider");
    owl.owlCarousel({
      navigation: false,
      pagination: false,
      slideSpeed: 1000,
      margin:10,
      stopOnHover: true,
      autoPlay: true,
      items: 5,
      itemsDesktopSmall: [1024, 3],
      itemsTablet: [600, 1],
      itemsMobile: [479, 1]
    });

  /* 
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });


  /* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

  /* Auto Close Responsive Navbar on Click
  ========================================================*/
  function close_toggle() {
      if ($(window).width() <= 768) {
          $('.navbar-collapse a').on('click', function () {
              $('.navbar-collapse').collapse('hide');
          });
      }
      else {
          $('.navbar .navbar-inverse a').off('click');
      }
  }
  close_toggle();
  $(window).resize(close_toggle);

  /* Nivo Lightbox
  ========================================================*/   
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });


}(jQuery));

