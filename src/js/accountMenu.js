export default function accountMenu() {
    const btn = document.querySelector('.js-account-menu-burger');


    if (btn) {
        btn.addEventListener('click', event => {
            event.preventDefault();

            document.body.classList.toggle('account-menu-open');
        })
    }
}