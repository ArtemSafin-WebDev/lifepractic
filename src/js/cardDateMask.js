import Inputmask from 'inputmask';


export default function cardDateMask() {
    const phoneInputs = Array.from(document.querySelectorAll('.js-card-date'));
    phoneInputs.forEach(input => {
        const instance = new Inputmask({ mask: '99' });
        instance.mask(input);
    });
}