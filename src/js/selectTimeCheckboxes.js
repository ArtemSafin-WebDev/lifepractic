import detectIt from 'detect-it';

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

    const resetButtons = Array.from(document.querySelectorAll('.account__my-schedule-regime-reset'));

    resetButtons.forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();

            const form = btn.closest('form');
            form.reset();
            updateAllCheckboxes();
        })
    })

    const regimeFormBlocks = Array.from(document.querySelectorAll('.account__my-schedule-regime-form-block'));
    if (window.matchMedia("(max-width: 640px)").matches || detectIt.hasTouch) return;
    regimeFormBlocks.forEach(block => {
        let pointerDown = false;
        block.addEventListener('pointerdown', (event) => {
            pointerDown = true;

            if (event.target.matches('.select-time__card-checkbox') || event.target.closest('.select-time__card-checkbox')) {
                const label = event.target.matches('.select-time__card-checkbox') ? event.target : event.target.closest('.select-time__card-checkbox');
                if (!label) return;
                const input = label.querySelector('.select-time__card-checkbox-input');

                if (!input) return;

                input.checked = true;

                handleActivity(label);
            }
        })

        block.addEventListener('pointerover', event => {
            if (!pointerDown) return;
            event.preventDefault();
            if (event.target.matches('.select-time__card-checkbox') || event.target.closest('.select-time__card-checkbox')) {
                const label = event.target.matches('.select-time__card-checkbox') ? event.target : event.target.closest('.select-time__card-checkbox');
                const input = label.querySelector('.select-time__card-checkbox-input');

                input.checked = true;

                input.checked = true;

                handleActivity(label);
            }
        })

        block.addEventListener('pointerup', () => {
            pointerDown = false;
        })

        block.addEventListener('pointercancel', () => {
            pointerDown = false;
        })
        block.addEventListener('pointerleave', () => {
            pointerDown = false;
        })
    })
}
