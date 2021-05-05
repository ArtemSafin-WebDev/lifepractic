export default function warning() {
    document.addEventListener('click', event => {
        if (event.target.matches('.warning__close-btn') || event.target.closest('.warning__close-btn')) {
            const warning = document.querySelector('.warning');

            if (warning) {
                warning.classList.remove('shown');
            } else {
                console.error('No warning found');
                return;
            }
        }
    })
}