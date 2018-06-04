$(document).ready(function() {
  $('.karousel').slick({
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }, ]
  });
});

$(document).ready(function() {
  $('.carousel-2').slick({
    infinite: true,
    slidesToScroll: 4,
    slidesToShow: 4,
    slidesPerRow: 4,
    prevArrow: $('.prev-2'),
    nextArrow: $('.next-2'),
    responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  });
});
