document.addEventListener('DOMContentLoaded', () => {

    const prev = document.querySelector('.left'),
        next = document.querySelector('.right'),
        slides = document.querySelectorAll('.slider__item'),
        slideWrapper = document.querySelector('.slider__inner'),
        sldiesField = document.querySelector('.slider__wrapper'),
        width = window.getComputedStyle(slideWrapper).width;
    let offset = 0;

    sldiesField.style.width = 100 * slides.length + '%';

    next.addEventListener('click', () => {
        nextSlide();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }    
        sldiesField.style.transform = `translateX(-${offset}px)`;
    });

    function nextSlide() {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }    
        sldiesField.style.transform = `translateX(-${offset}px)`;
    }

    let timerId = setInterval(() => nextSlide(), 10000);



    $('.salon-slider__wrapper').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
            }
          }
        ]
      });

});