import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function accountMyDataSlider() {
    const elements = Array.from(document.querySelectorAll('.js-account-my-data-slider'));


    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        const checkboxes = Array.from(element.querySelectorAll('.account__my-data-checkbox-input'));
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
                    checkboxes.forEach(checkbox => checkbox.checked = false);
                    checkboxes[swiper.realIndex].checked = true;
                }
            }
        });
    
        checkboxes.forEach((checkbox, checkboxIndex) => {
            checkbox.addEventListener('change', event => {
                event.preventDefault();
                if (checkbox.checked) {
                    slider.slideToLoop(checkboxIndex);
                }
                console.log('Clicked index', checkboxIndex);
              
            });
        });


        const checkedBoxIndex = checkboxes.findIndex(checkbox => checkbox.checked);
        if (checkedBoxIndex !== -1) {
            slider.slideToLoop(checkedBoxIndex);
        } else {
            slider.slideToLoop(0);
        }
    })

  
}
