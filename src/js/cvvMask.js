import Inputmask from 'inputmask';


export default function cvvMask() {
    const phoneInputs = Array.from(document.querySelectorAll('.js-card-cvv'));
    phoneInputs.forEach(input => {
        const instance = new Inputmask({ mask: '999', showMaskOnFocus: false, showMaskOnHover: false, placeholder: "" });
        instance.mask(input);
    });
}