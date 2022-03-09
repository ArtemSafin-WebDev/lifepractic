export default function cardAutoswitch() {
    const elements = Array.from(document.querySelectorAll('.payment__cards'));

    elements.forEach(element => {
        const number = element.querySelector('.js-card-number');
        const name = element.querySelector('.js-card-name');
        const month = element.querySelector('.js-card-month');
        const year = element.querySelector('.js-card-year');
        const cvv = element.querySelector('.js-card-cvv');

        if (!month || !year || !cvv) return;

        number.addEventListener('input', event => {
            let inputValue =  event.target.value;
            inputValue = inputValue.replace(/_/gmi, '').trim();

            if (inputValue.length >= 19) {
                name.focus();
            }
        })

        month.addEventListener('input', event => {
            if (event.target.value.length >= 2) {
                year.focus();
            }
        })

        year.addEventListener('input', event => {
            if (event.target.value.length >= 2) {
                cvv.focus();
            }
        })
    })
}