$(function () {

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [
        {
         breakpoint: 1175,
         settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
            }
        }
        ]
    });

    $('.manu__btn').on('click', function () {
        $('.manu__list').toggleClass('manu__list-active')
    })

});