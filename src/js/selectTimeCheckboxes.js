export default function selectTimeCheckboxes() {
    function handleActivity(checkbox) {
        const input = checkbox.querySelector('input[type="checkbox"], input[type="radio"]');

      
        if (input.checked) {
            checkbox.classList.add('checked');
           
        } else {
            checkbox.classList.remove('checked');
        }
    }
    function updateAllCheckboxes() {
        const checkboxes = Array.from(document.querySelectorAll('.select-time__card-checkbox'));

        checkboxes.forEach(checkbox => {
            handleActivity(checkbox);
        });
    }

    updateAllCheckboxes();

    document.addEventListener('change', event => {
        console.log('Change event happened', event.target)

        const selectTimeCheckbox = event.target.closest('.select-time__card-checkbox')

        if (selectTimeCheckbox) {
            handleActivity(selectTimeCheckbox)
        }
    })
}
