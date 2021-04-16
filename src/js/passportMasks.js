import Inputmask from 'inputmask';

export default function passportMasks() {
    Array.from(document.querySelectorAll('[data-passport-series-mask]')).forEach(item => {
        const im = new Inputmask({
            mask: '9999',
            placeholder: ' ',
            showMaskOnHover: false,
            showMaskOnFocus: false
        });
        im.mask(item);
    });
    Array.from(document.querySelectorAll('[data-passport-number-mask]')).forEach(item => {
        const im = new Inputmask({ mask: '999999', placeholder: ' ', showMaskOnHover: false, showMaskOnFocus: false });
        im.mask(item);
    });
    Array.from(document.querySelectorAll('[data-department-mask]')).forEach(item => {
        const im = new Inputmask({ mask: '999-999', placeholder: ' ', showMaskOnHover: false, showMaskOnFocus: false });
        im.mask(item);
    });
    Array.from(document.querySelectorAll('[data-date-mask]')).forEach(item => {
        const im = new Inputmask({ mask: '99.99.9999', placeholder: ' ', showMaskOnHover: false, showMaskOnFocus: false });
        im.mask(item);
    });
    Array.from(document.querySelectorAll('[data-snils-mask]')).forEach(item => {
        const im = new Inputmask({ mask: '999 999 999 99', placeholder: ' ', showMaskOnHover: false, showMaskOnFocus: false });
        im.mask(item);
    });
    Array.from(document.querySelectorAll('[data-inn-mask]')).forEach(item => {
        const im = new Inputmask({ mask: '999 999 999 999', placeholder: ' ', showMaskOnHover: false, showMaskOnFocus: false });
        im.mask(item);
    });
}
