import { lockScroll, unlockScroll } from "./scrollBlocker";

export default function mobileMonthSchedule() {

    if (!window.matchMedia("(max-width: 768px)").matches) return;
    const monthTableDays = Array.from(document.querySelectorAll('.account__schedule-month-table td'));

    monthTableDays.forEach(cell => {
        cell.addEventListener('click', event => {
            const dropdown = cell.querySelector('.account__schedule-month-dropdown');
            console.log('Clicked on cell', cell)

            if (dropdown) {
                dropdown.classList.add('active');
                lockScroll(dropdown);
            } else {
                console.log('Dropdown not found')
            }
        })
    })

    document.addEventListener('click', event => {
        if (event.target.matches('.account__schedule-month-dropdown-close') || event.target.closest('.account__schedule-month-dropdown-close')) {
            event.preventDefault();
            const dropdown = event.target.closest('.account__schedule-month-dropdown');
            if (dropdown && dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
                unlockScroll();
            }
        } else if (event.target.matches('.account__schedule-month-dropdown') || event.target.classList.contains('active')) {
            event.target.classList.remove('active');
            unlockScroll();
        }
    })

    
}