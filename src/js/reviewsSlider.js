import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function reviewsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-reviews-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        const btnsReadCompletely = document.querySelectorAll('.reviews__card-read-more');
        const cardTextElems = document.querySelectorAll('.reviews__card-text');

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

        cardTextElems.forEach((text, i) => {
            const fullTextHeight = text.clientHeight;
            const visibleText = window.getComputedStyle(text).lineHeight.split('px')[0]  * 5
            if (fullTextHeight > visibleText) {
              text.classList.add('mod-crop')
            } else {
                btnsReadCompletely[i].remove();
            }
        })

        btnsReadCompletely.forEach((btn, i) => {
            btn.onclick = () => {
                if (cardTextElems[i].className.includes('mod-crop')) {
                    cardTextElems[i].classList.remove('mod-crop');
                    btn.innerText = 'Скрыть';
                } else {
                    cardTextElems[i].classList.add('mod-crop');
                    btn.innerText = 'Читать полностью';
                }
            }
        })
    });
}
