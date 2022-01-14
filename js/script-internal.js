//Mobile menu
$('.menu__btn').click(function() {
  $(this).toggleClass('menu__btn--close');
  $('.menu__list').slideToggle();
});

if (window.innerWidth < 1270) {
  $('.menu__link').click(function() {
    $('.menu__list').slideUp();
    $('.menu__btn').removeClass('menu__btn--close');
  })
}

//Read more
$('.pumping__more').click(function() {
  event.preventDefault();
  $(this).hide();
  $('.pumping__text').slideToggle();
});

//Header scroll
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $('.header').addClass('header--scroll');
  } else {
    $('.header').removeClass('header--scroll');
  };
});
