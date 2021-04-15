export default function mobileCalendar() {
    if (!window.matchMedia("(max-width: 768px)").matches) return;

    const openCalendarBtn = document.querySelector('.js-open-calendar');

    if (!openCalendarBtn) return;

   

    const calendarDropdown = document.querySelector('.account__my-notes-calendar-dropdown');

    if (!calendarDropdown) return;

    console.log('Btn', openCalendarBtn);

    const rightCol = calendarDropdown.closest('.account__my-notes-right-col');

    openCalendarBtn.append(calendarDropdown);

    if (rightCol) rightCol.remove();
}