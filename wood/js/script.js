var mySwiper = new Swiper ('.slider-1', {
    // Optional parameters
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