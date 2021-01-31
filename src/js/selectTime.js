import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);
export default function selectTime() {
    const elements = Array.from(document.querySelectorAll('.js-select-time'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        new Swiper(container, {
            slidesPerView: 5,
            spaceBetween: 12,
            watchOverflow: true,
            touchStartPreventDefault: false,
            speed: 400,
            threshold: 5,
            navigation: {
                nextEl: element.querySelector('.select-time__arrow--next'),
                prevEl: element.querySelector('.select-time__arrow--prev')
            },
            breakpoints: {
                641: {
                    slidesPerView: 7,
                    spaceBetween: 12,
                }
            }
        });
    });
}
