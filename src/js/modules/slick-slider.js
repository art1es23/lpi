import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function () {
  $(".header-slider").slick({

    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 600,
    autoplay: true,
    responsive: [{}, {
      breakpoint: 769,
      settings: {
        dots: false
      }
    }, {
      breakpoint: 700,
      settings: {
        dots: false
      }
    }, {
      breakpoint: 700,
      settings: {
        arrows: false,
        dots: false
      }
    }, {
      breakpoint: 300,
      settings: "unslick" // destroys slick
    }]
  });

  $(".blog-slider").slick({

    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    speed: 600,
    autoplay: true,
    responsive: [{

    }, {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        arrows: false
      }
    }, {
      breakpoint: 300,
      settings: "unslick" // destroys slick
    }]
  });

})