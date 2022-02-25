import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import navLinksHover from './navLinksHover';
import homeAnimations from './homeAnimations';
import mobileMenu from './mobileMenu';
import phoneMask from './phoneMask';
import validation from './validation';
import './jquery-ui-1.10.4.custom.min'
import './counties';
import './phonecode'
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
import cardAutoswitch from './cardAutoswitch';
import stickySidebar from './stickySidebar';
import myDiary from './myDiary';
import accountMyDataSlider from './accountMyData';
import helpModal from './helpModal';
import faqAccordions from './faqAccordions';
import setScrollbarWidth from './setScrollbarWidth';
import warning from './warning';
import mobileMonthSchedule from './mobileMonthSchedule';
import reviewsSlider from './reviewsSlider';


document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    mobileMenu();
    //phoneMask();
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
    // uploadAvatar();
    selectTimeForm();
    recommendations();
    mobileCalendar();
    videoPlayer();
    passportMasks();
    scheduleRegimes();
    selectTimeCheckboxes();
    cardAutoswitch();
    stickySidebar();
    myDiary();
    accountMyDataSlider();
    helpModal();
    faqAccordions();
    warning();
    mobileMonthSchedule();
    reviewsSlider();
   
    
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    $(function(){
        $('#phone').phonecode({
            preferCo: 'ru'
        });
    });
    setTimeout(() => {
        document.body.classList.add('animatable');
        if (!window.matchMedia("(max-width: 640px)").matches) {
            homeAnimations();
            cornerAnimation();
        }
    }, 300);
})
