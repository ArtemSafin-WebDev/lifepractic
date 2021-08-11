import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function reviewsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-reviews-slider'));

    console.log('Reviews sliders', elements);

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            spaceBetween: 10,
            watchOverflow: true,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'row',
            navigation: {
                nextEl: element.querySelector('.reviews__slider-arrow--next'),
                prevEl: element.querySelector('.reviews__slider-arrow--prev')
            },
            pagination: {
                el: element.querySelector('.reviews__slider-pagination'),
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                641: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                    slidesPerColumnFill: 'row'
                },
                1024: {
                    slidesPerView: 4,
                    slidesPerColumn: 2,
                    slidesPerColumnFill: 'row'
                }
            }
        });
    });
}
