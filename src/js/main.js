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
import cardNumberMask from './cardNumberMask';
import cardDateMask from './cardDateMask';
import cvvMask from './cvvMask';
import header from './header';
import accountMenu from './accountMenu';
import customSelects from './customSelects';
import myNotesTabs from './myNotesTabs';
import fileUpload from './fileUpload';
import uploadAvatar from './uploadAvatar';
import selectTimeForm from './selectTimeForm';
import recommendations from './recommendations';
import mobileCalendar from './mobileCalendar';
import videoPlayer from './videoPlayer';
import passportMasks from './passportMasks';
import scheduleRegimes from './scheduleRegimes';
import selectTimeCheckboxes from './selectTimeCheckboxes';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    // navLinksHover();
    mobileMenu();
    phoneMask();
    validation();
    onlyNumeric();
    selectTime();
    chooseSpecialist();
    modals();
    cardNumberMask();
    cardDateMask();
    cvvMask();
    header();
    accountMenu();
    customSelects();
    myNotesTabs();
    fileUpload();
    uploadAvatar();
    selectTimeForm();
    recommendations();
    mobileCalendar();
    videoPlayer();
    passportMasks();
    scheduleRegimes();
    selectTimeCheckboxes();
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
