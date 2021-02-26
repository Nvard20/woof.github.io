var mySwiper = new Swiper ('.slider-1', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    parallax: true,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
   
    spaceBetween: 0,
    pagination: {
     
      clickable: true,
    },
  });
  var swiper = new Swiper('.slider-2', {
    direction: 'horizontal',
    loop: true,
    autoplay: false,
    navigation: {
        nextEl: '.next-rev',
        prevEl: '.prev-rev',
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  var btn = $('.scrollink');
  btn.on('click', function(e) {
    e.preventDefault();
  $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 700);
  });