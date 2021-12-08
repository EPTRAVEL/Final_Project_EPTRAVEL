window.onload= function(){
  $(document).ready(function () {
    $(".slider-one").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    });
  });
  
  $(document).ready(function () {
    $(".slider-three").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true,
      autoplay: false,
      autoplaySpeed: 7000,
      responsive: [
        {
          breakpoint: 1242,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1010,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ],
      // arrows: false,
      prevArrow:
        '<button type="button" class="slick-prev pull-left"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next pull-right"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></button>',
    });
  });
  
  $(document).ready(function () {
    $(".home__hot-tour--item").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      // dots: true,
      autoplay: true,
      autoplaySpeed: 10000,
      // arrows: false,
      responsive: [
        {
          breakpoint: 1242,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1010,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ],
      prevArrow:
        '<button type="button" class="slick-prev pull-left"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next pull-right"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></button>',
    });
  });
 
}