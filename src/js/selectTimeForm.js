export default function selectTimeForm() {
    const elements = Array.from(document.querySelectorAll('.js-select-time-form'));


    elements.forEach(element => {
        const formCheckboxes = Array.from(element.querySelectorAll('input[type="radio"]'));
        const selectTimeParent = element.closest('.select-time');
        element.addEventListener('submit', event => {
          
            const timeSelected = formCheckboxes.find(box => box.checked);

            if (timeSelected) {
                console.log('Time has been selected');
            } else {
                console.log('Time not selected');
                event.preventDefault();
                selectTimeParent.classList.add('error');

                setTimeout(() => {
                    selectTimeParent.classList.remove('error');
                }, 3000)
            }
        })
    })
}