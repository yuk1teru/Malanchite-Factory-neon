$(function () {
  const swiper = new Swiper('.swiper-container', {
    // loop: true,
    spaceBetween: 100,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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
  //
  // if ($('.product-item').length > 3) {
  //     $('.product-item:gt(2)').hide().removeClass('aos-init aos-animate');
  //     $('.show-more').show();
  // }
  // $('.catalog-wrapper .show-more').on('click', function (e) {
  //     var $this = $(this);
  //     $this.find('span').toggleClass('hidden');
  //     $('.product-item:gt(2)').toggle();
});
