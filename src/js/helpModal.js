export default function helpModal() {
    const helpModalBtn = document.querySelector('.help-modal-btn');
    const helpModal = document.querySelector('.help-modal');

    if (!helpModal || !helpModalBtn) return;

    let menuOpen = false;

    const openMenu = () => {
        menuOpen = true;
        document.body.classList.add('help-modal-open');
        lockScroll(menu);
    };
    const closeMenu = () => {
        menuOpen = false;
        document.body.classList.remove('help-modal-open');
        unlockScroll();
    };

    helpModalBtn.addEventListener('click', event => {
        event.preventDefault();
        if (!menuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    })
}