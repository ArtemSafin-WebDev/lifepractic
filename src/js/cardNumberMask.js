import Inputmask from 'inputmask';


export default function cardNumberMask() {
    const phoneInputs = Array.from(document.querySelectorAll('.js-card-number'));
    phoneInputs.forEach(input => {
        const instance = new Inputmask({ mask: '9999 9999 9999 9999' });
        instance.mask(input);
    });
}