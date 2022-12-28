function SliderBox1__init() {
  const swiper = new Swiper(".slider-box-1 .swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".slider-box-1 .swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-box-1 .swiper-button-next",
      prevEl: ".slider-box-1 .swiper-button-prev"
    }
  });
}

$(function() {
  $(".go-to-top").click(function() { 
  	$('html, body').animate({ scrollTop : 0 // 0 까지 animation 이동합니다. 
  	}, 400); // 속도 400 
return false; 
  }); 
});



SliderBox1__init();


