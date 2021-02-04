export default function header() {
    const pageHeader = document.querySelector('.page-header');

    if (!pageHeader || !window.matchMedia("(max-width: 640px)").matches) return;


    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 10) {
            pageHeader.classList.add('scrolled');
        } else {
            pageHeader.classList.remove('scrolled');
        }

    }, {
        passive: true
    })



}
