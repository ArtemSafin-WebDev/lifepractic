import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function reviewsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-reviews-slider'));

    console.log('Reviews sliders', elements)

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            spaceBetween: 10,
            watchOverflow: true,
            slidesPerView: 4,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            navigation: {
                nextEl: element.querySelector('.reviews__slider-arrow--next'),
                prevEl: element.querySelector('.reviews__slider-arrow--prev')
            }
        });
    });
}
