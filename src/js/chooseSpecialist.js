export default function chooseSpecialist() {
    const elements = Array.from(document.querySelectorAll('.js-choose-specialist'));

    elements.forEach(element => {
        const tabBtns = Array.from(element.querySelectorAll('.choose-specialist__choices-item:not(.choose-specialist__choices-item--need-help)'));
        const cardCheckbox = element.querySelectorAll('.select-time__card-checkbox');
        const sum = element.querySelectorAll('.choose-specialist__sum');

        const tabItems = Array.from(element.querySelectorAll('.choose-specialist__schedule'));

        let currentSlide = 0;

        const setActiveTab = (index) => {
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabItems.forEach(item => item.classList.remove('active'));

            tabItems[index].classList.add('active');
            tabBtns[index].classList.add('active');
        }

        setActiveTab(0)

        tabBtns.forEach((btn, btnIndex) => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                setActiveTab(btnIndex);
                currentSlide = btnIndex;
            })
        })

        cardCheckbox.forEach(elem => {
            elem.onclick = () => {
                console.log(currentSlide)
                sum[currentSlide].classList.add('mod-show');
            }
        })
    })
}
