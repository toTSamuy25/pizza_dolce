	$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    lazyLoad:true,
    items:1,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    },
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
});

(function($){
  function clock() {
var d = new Date();
var hrs = d.getHours();
console.log(hrs);
if (hrs < 10 || hrs >=23 )
{

$('.zakaz_message').removeClass('hidden');
}
else
{
$('.zakaz_message').addClass('hidden');

}
}
function clock_ng() {
var d = new Date();
var hrs = d.getHours();
var day =d.getDate();
var month =d.getMonth()+1;
/*console.log(hrs);
console.log(day);
console.log(month);
console.log((day==29&&month==12&&hrs >=19 ));
*/
$('.zakaz_message.31_12').addClass('hidden');
$('.zakaz_message.31_12_2').addClass('hidden');
$('.zakaz_message.01_01').addClass('hidden');
$('.zakaz_message.01_02').addClass('hidden');

if (day==31&&month==12&&(hrs < 12 || hrs <18) )
{

$('.zakaz_message.31_12').removeClass('hidden');


}
if (day==31&&month==12&&hrs >=18 )
{
$('.zakaz_message.31_12_2').removeClass('hidden');
$('.good-block .zakaz_butt').addClass('hidden');
}
if (day==1&&month==1)
{
$('.zakaz_message.01_01').removeClass('hidden');
$('.good-block .zakaz_butt').addClass('hidden');

}
if (day==2&&month==1&&hrs < 12)
{
$('.zakaz_message.01_02').removeClass('hidden');
$('.good-block .zakaz_butt').addClass('hidden');

}
}
$( document ).ready(function() {
// clock();
clock_ng()
});
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 150) {
      $(".navbar-custom").css("background" , "rgba(0, 0, 0, 0.8)");
    }
    else{
      $(".navbar-custom").css("background" , "rgba(0, 0, 0)");
    }
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $(document).on("wheel", "input[type=number]", function (e) {
     $(this).blur();
  });

  jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
  jQuery('.quantity').each(function() {
    var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');
    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  //Preloader
  $(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
  });

  $(document).ready(function(){

    //Lightgallery
    $('#lightgallery').lightGallery({
      download: false,
      zoom: false,
      scale: false,
      fullScreen: false
    });

    //Fix background-fixed in iOS
    var deviceAgent = navigator.userAgent.toLowerCase();
    if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
      $('.header').removeClass('bgf');
      $('.popular').removeClass('bgf');
      $('.gotomenus').removeClass('bgf');
      $('.parallax').removeClass('bgf');
    }
    /*
    $('.form-control').on('focus blur', function (e) {
      $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');
    */

    //Hide Address block
    function hideaddress(){
      if ($('[name="delivery"]:checked').attr('id') == 'delivery_1') {
        $("#address").hide();
      }
      else {
        $("#address").show();
          return false;
      }
    }
    window.onload = function () {
      hideaddress();
    };
    $(document).on('change', '[name="delivery"]', function() {
      hideaddress();
    });
    // ScrollUp Button
    $('.scrollup').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });
    
    //Theme checkbox
    /*$('input:checkbox').change(function(){
      if($(this).prop("checked")) {
        $(this).parent().addClass("active");
      } else {
        $(this).parent().removeClass("active");
      }
    });
    $('input:checkbox').each(function(){
      if ($(this).is(':checked')) {
        $(this).parent().addClass("active");
      } else {
        $(this).parent().removeClass("active");
      }
    });
    */
    //Theme radio-buttons
    /*var $customRadio = $('input[type="radio"]');
    $customRadio.click(function() {
      $customRadio.each(function() {
        $(this).parent().toggleClass('active', this.checked);
      });
    });*/
    //Fake Email generate
    /*$('#noemail').click(function(){
      var time = Date.now();
      var fakeemail = time + "@fakemail.com";
      $('#email').val(fakeemail).hide();
      $('#noemail').hide();
    });*/

    var swiperSingle = new Swiper('.singleSlide .swiper-container', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      autoplay: 2500,
      loop: true,
      effect: 'fade'
    });

    var swiperMulti = new Swiper('.multiSlides .swiper-container', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      pagination: '.swiper-pagination',
      paginationClickable: true,
      slidesPerView: 4,
      spaceBetween: 10,
      slideClass: 'swiper-slide',
      wrapperClass: 'swiper-wrapper',
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    });

    var swiper = new Swiper('.singleGallery .swiper-container', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      pagination: '.swiper-pagination',
      paginationType: 'fraction'
    });


    var galleryTop = new Swiper('.galleryTop .swiper-container', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 10,
    });

    $('.galleryThumbs .swiper-container .swiper-wrapper').each( function() {
      var count = $(this).children('.swiper-slide').length;
      if (count <= 1) {
        $(this).addClass('hidden');
        console.log( "blocked because it counts", count );
      } else {
        $(this).removeClass('hidden');
        console.log( "not blocked because it counts", count );
      }
    });
    
    var galleryThumbs = new Swiper('.galleryThumbs .swiper-container', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

  });
})(jQuery);


//Age Verification
var modal_content,
modal_screen;

/*$(document).ready(function() {
  av_legality_check();
});

av_legality_check = function() {
  if ($.cookie('is_legal') == "yes") {
  } else {
    av_showmodal();
    $(window).on('resize', av_positionPrompt);
  }
};

av_showmodal = function() {
  modal_screen = $('<div id="modal_screen"></div>');
  modal_content = $('<div id="modal_content" style="display:none"></div>');
  var modal_content_wrapper = $('<div id="modal_content_wrapper" class="content_wrapper"></div>');
  var modal_regret_wrapper = $('<div id="modal_regret_wrapper" class="content_wrapper" style="display:none;"></div>');
  var content_heading = $('<h2>Вам уже есть 18 лет?</h2>');
  var content_buttons = $('<div class="text-center mt40 mb40"><a href="#nothing" class="btn btn-green btn-lg av_btn" rel="yes">Да</a> <a href="#nothing" class="btn btn-red btn-lg  av_btn" rel="no">Нет</a></div>');
  var content_text = $('<p class="small">На этом сайте продаётся алкоголь</p>');
  var regret_heading = $('<h2>Нам очень жаль, но на сайте продаётся алкоголь</h2>');
  var regret_buttons = $('<div class="text-center mt40 mb40"><a href="#nothing" class="btn btn-black btn-lg av_btn" rel="yes">Мне не нужен алкоголь</a></div>');
  var regret_text = $('<p></p>');

  modal_content_wrapper.append(content_heading, content_buttons, content_text);
  modal_regret_wrapper.append(regret_heading, regret_buttons, regret_text);
  modal_content.append(modal_content_wrapper, modal_regret_wrapper);

  $('body').append(modal_screen, modal_content);
  av_positionPrompt();

  modal_content.find('a.av_btn').on('click', av_setCookie);
};

av_setCookie = function(e) {
  e.preventDefault();

  var is_legal = $(e.currentTarget).attr('rel');

  $.cookie('is_legal', is_legal, {
    expires: 30,
    path: '/'
  });

  if (is_legal == "yes") {
    av_closeModal();
    $(window).off('resize');
  } else {
    av_showRegret();
  }
};

av_closeModal = function() {
  modal_content.fadeOut();
  modal_screen.fadeOut();
};

av_showRegret = function() {
  modal_screen.addClass('nope');
  modal_content.find('#modal_content_wrapper').hide();
  modal_content.find('#modal_regret_wrapper').show();
};

av_positionPrompt = function() {
  var top = ($(window).outerHeight() - $('#modal_content').outerHeight()) / 2;
  var left = ($(window).outerWidth() - $('#modal_content').outerWidth()) / 2;
  modal_content.css({
    'top': top,
    'left': left
  });

  if (modal_content.is(':hidden') && ($.cookie('is_legal') != "yes")) {
    modal_content.fadeIn('slow')
  }
};
*/
jQuery(function() {
var $bg_height=$(".main-top").outerHeight();

$(".fon_top_img").height($bg_height);
});