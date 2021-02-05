export default function myNotesTabs() {
    const elements = Array.from(document.querySelectorAll('.account__my-notes'));

    elements.forEach(element => {
        const btns = Array.from(element.querySelectorAll('.account__my-notes-tabs-nav-link'));
        const items = Array.from(element.querySelectorAll('.account__my-notes-tab-item'));

        console.log(btns, items)

        const openTab = index => {
            btns.forEach(btn => btn.classList.remove('active'));
            btns[index].classList.add('active');
            items.forEach(item => item.classList.remove('active'));
            items[index].classList.add('active');
        }

        btns.forEach((btn, btnIndex) => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                openTab(btnIndex);
            })
        })

        openTab(0);
    })
}