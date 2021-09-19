//Mobile menu
$('.menu__btn').click(function() {
  $(this).toggleClass('menu__btn--close');
  $('.menu__list').slideToggle();
});

//Read more
$('.pumping__more').click(function() {
  event.preventDefault();
  $(this).hide();
  $('.pumping__text').slideToggle();
});

//Scroll to menu anchor
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('.menu__item a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('.menu__item a').each(function () {
        $(this).removeClass('menu__link--active');
    })
    $(this).addClass('menu__link--active');

    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.menu__link').each(function () {
      event.preventDefault();
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.menu__link').removeClass("menu__link--active");
          currLink.addClass("menu__link--active");
      }
  });
};
