import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function scheduleRegimes() {
    const elements = Array.from(document.querySelectorAll('.js-schedule-regimes'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        const links = Array.from(element.querySelectorAll('.account__my-schedule-regime-link'));
        const slider = new Swiper(container, {
            effect: 'fade',
            loop: true,
            watchOverflow: true,
            touchStartPreventDefault: false,
            allowTouchMove: false,
            preventClicks: false,
            fadeEffect: {
                crossFade: true
            },
            autoHeight: true,

            speed: 500,
            on: {
                slideChange: swiper => {
                    links.forEach(link => link.classList.remove('active'));
                    links[swiper.realIndex].classList.add('active');

                    if (swiper.realIndex === 1) {
                        element.classList.add('show-arrows');
                    } else {
                        element.classList.remove('show-arrows');
                    }
                }
            }
        });

        links.forEach((link, linkIndex) => {
            link.addEventListener('click', event => {
                event.preventDefault();
                console.log('Clicked index', linkIndex);
                slider.slideToLoop(linkIndex);
            });
        });
    });
}
