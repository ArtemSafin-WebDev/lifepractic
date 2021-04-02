export default function selectTimeForm() {
    const elements = Array.from(document.querySelectorAll('.js-select-time-form'));


    elements.forEach(element => {
        const formCheckboxes = Array.from(element.querySelectorAll('input[type="radio"]'));
        const chooseSpecialist = document.querySelector('.choose-specialist')
        element.addEventListener('submit', event => {
          
            const timeSelected = formCheckboxes.find(box => box.checked);

            if (timeSelected) {
                console.log('Time has been selected');
            } else {
                console.log('Time not selected');
                event.preventDefault();
                chooseSpecialist.classList.add('error');

                setTimeout(() => {
                    chooseSpecialist.classList.remove('error');
                }, 3000)
            }
        })
    })
}