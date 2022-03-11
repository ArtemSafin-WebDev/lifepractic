import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);
export default function chooseSpecialistSlider() {
    function createChooseSpecialistSlider(element) {
        return new Swiper(element, {
            slidesPerView: 'auto',
            spaceBetween: 12,
            speed: 400
        });
    }

    window.chooseSpecialistSlider = {};

    window.chooseSpecialistSlider.createSelectTimeSlider = createChooseSpecialistSlider;
    window.chooseSpecialistSlider.sliderInstances = [];

    const elements = Array.from(document.querySelectorAll('.js-choose-specialist-slider'));

    elements.forEach(element => {
        window.chooseSpecialistSlider.sliderInstances.push(createChooseSpecialistSlider(element));
});
}
