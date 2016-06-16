// Quotation Slider
var flkty = new Flickity( '.main-gallery', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  autoPlay: 5000
});

// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

//Page Scroll Effect
jQuery(document).ready(function ($) {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 32
        }, 1000);
        return false;
      }
    }
  });
});

// $(document).ready(function () {
//     // bind click event to all internal page anchors
//     $('a[href*="#"]').on('click', function (e) {
//         // prevent default action and bubbling
//         e.preventDefault();
//         e.stopPropagation();
//         // set target to anchor's "href" attribute
//         var target = $(this).attr('href');
//         // scroll to each target
//         $(target).velocity('scroll', {
//             duration: 500,
//             offset: -40,
//             easing: 'ease-in-out'
//         });
//     });
// });


//Intro Text Effect
$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);          
            }
            
        }); 
    
    });
    
});


//Portfolio Effect
$(document).ready(function(){
  $('.nav-item').click(function(){
    // reset active class
    $('.nav-item').removeClass("active");
    // add active class to selected
    $(this).addClass("active");
    // return needed to make function work
    return false;
  });
  
  
  $(function() {
    // create an empty variable
    var selectedClass = "";
    // call function when item is clicked
    $(".nav-item").click(function(){
      // assigns class to selected item
      selectedClass = $(this).attr("data-rel");
      // fades out all portfolio items
      $(".portfolio li").fadeOut(300);
      // fades in selected category
      $(".portfolio li." + selectedClass).delay(300).fadeIn(300);
    });
  });
  
});

var rafId = null;
var delay = 500;
var lTime = 0;

function scroll() {
  var scrollTop = $(window).scrollTop();
  var height = $(window).height()
  var visibleTop = scrollTop + height;
  $('.reveal').each(function() {
    var $t = $(this);
    if ($t.hasClass('reveal_visible')) { return; }
    var top = $t.offset().top;
    if (top <= visibleTop) {
      if (top + $t.height() < scrollTop) {
        $t.removeClass('reveal_pending').addClass('reveal_visible');
      } else {
        $t.addClass('reveal_pending');
        if (!rafId) requestAnimationFrame(reveal);  
      }
    }
  });
}
function reveal() {
  rafId = null;
  var now = performance.now();
  
  if (now - lTime > delay) {
    lTime = now;
    var $ts = $('.reveal_pending');
    $($ts.get(0)).removeClass('reveal_pending').addClass('reveal_visible');  
  }
  
  
  if ($('.reveal_pending').length >= 1) rafId = requestAnimationFrame(reveal);
}

$(scroll);
$(window).scroll(scroll);
$(window).click(function() {
  $('.reveal').removeClass('reveal_visible').removeClass('reveal_pending');
  lTime = performance.now() + 500;
  var top = $(window).scrollTop();
  $(window).scrollTop(top === 0 ? 1 : top-1);
});


