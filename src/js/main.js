import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import navLinksHover from './navLinksHover';
import homeAnimations from './homeAnimations';
import mobileMenu from './mobileMenu';
import phoneMask from './phoneMask';
import validation from './validation';
import cornerAnimation from './cornerAnimation';
import onlyNumeric from './onlyNumeric';
import selectTime from './selectTime';
import chooseSpecialist from './chooseSpecialist';
import modals from './modals';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    navLinksHover();
    mobileMenu();
    phoneMask();
    validation();
    onlyNumeric();
    selectTime();
    chooseSpecialist();
    modals();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => {
        document.body.classList.add('animatable');
        if (!window.matchMedia("(max-width: 640px)").matches) {
            homeAnimations();
            cornerAnimation();
        }
    }, 300);
})
