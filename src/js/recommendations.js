import { Swiper, Navigation, EffectFade } from 'swiper';
import gsap from 'gsap';

Swiper.use([Navigation, EffectFade]);

export default function recommendations() {
    if (window.matchMedia('(max-width: 640px)').matches) return;
    const elements = Array.from(document.querySelectorAll('.js-recommendations'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        const nextBtn = element.querySelector('.recommendations__slider-arrow-next');
        const closeBtn = element.querySelector('.recommendations__cross')

       
        const slider = new Swiper(container, {
            effect: 'fade',
            loop: true,
            watchOverflow: true,
          
            fadeEffect: {
                crossFade: true
            },
            autoHeight: true,

            speed: 500,
            on: {
                slideChange: swiper => {
                    autoplay();
                }
            }
        });

        function autoplay() {
            gsap.set(nextBtn, {
                '--slider-progress': 0
            });
            gsap.killTweensOf(nextBtn);
            gsap.fromTo(
                nextBtn,
                { '--slider-progress': 0 },
                {
                    '--slider-progress': 1,
                    duration: 6,
                    ease: 'linear',
                    onComplete: () => {
                        slider.slideNext();
                    }
                }
            );
        }

        nextBtn.addEventListener('click', event => {
            event.preventDefault();
            slider.slideNext();
        });

        closeBtn.addEventListener('click', event => {
            event.preventDefault();
            sessionStorage.setItem('recommendations', 'none');
            document.body.classList.add('no-recommendations');
        });

        if (sessionStorage.getItem('recommendations') === 'none') {
            document.body.classList.add('no-recommendations');
        }

        
    });
}
