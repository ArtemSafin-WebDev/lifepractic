export default function cardAutoswitch() {
    const elements = Array.from(document.querySelectorAll('.js-card-autoswitch'));

    elements.forEach(element => {
        const month = element.querySelector('.js-card-month');
        const year = element.querySelector('.js-card-year');
        const cvv = element.querySelector('.js-card-cvv')

        month.addEventListener('input', event => {
            if (event.target.value.length >= 2) {
                console.log('value', event.target.value)
                year.focus();
            }
        })

        year.addEventListener('input', event => {
            if (event.target.value.length >= 2) {
                console.log('value', event.target.value)
                cvv.focus();
            }
        })
    })
}