$(function () {
  const swiper = new Swiper('.swiper-container', {
    // loop: true,
    // slidesPerView: 2,

    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      520: {
        slidesPerView: 1,
      },
      1065: {
        slidesPerView: 3,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //скрол меню

  $('#menu-order').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#order').offset().top,
      },
      1000,
    );
  });
  $('#menu-hero').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#hero').offset().top,
      },
      1000,
    );
  });
  $('#menu-portfolio').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#portfolio').offset().top,
      },
      1000,
    );
  });
  $('#menu-contacts').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#contacts').offset().top,
      },
      1000,
    );
  });
  // Кнопка показати більше

  $('.portfolio__inner .show-more').on('click', function (e) {
    var $this = $(this);
    $this.find('span').toggleClass('hidden');
    $('.reviews-item:gt(0)').toggle();
  });

  $('.portfolio__inner .show-more').on('click', function (e) {
    var $wrapper = $('.swiper-wrapper');
    $wrapper.toggleClass('show-content');
  });
  //Кнопка меню
  $('.menu__button').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('open');
  });

  $('.menu__button').on('click', function (e) {
    var $menuL = $('.nav__list--first');

    $menuL.toggleClass('close');
  });
  $('.menu__button').on('click', function (e) {
    var $menuL = $('.nav__list--second');

    $menuL.toggleClass('close');
  });

  //Форми
  $('.form__close').on('click', function (e) {
    var $body = $('body');
    var $overlay = $('.overlay');
    $overlay.addClass('hide');
    $body.removeClass('form-open');
  });

  $('.btn-cost').on('click', function (e) {
    var $body = $('body');
    var $overlayC = $('.overlay-cost');
    $overlayC.removeClass('hide');
    $body.addClass('form-open');
  });
  $('.btn-request').on('click', function (e) {
    var $body = $('body');
    var $overlayR = $('.overlay-request');
    $overlayR.removeClass('hide');
    $body.addClass('form-open');
  });
});
