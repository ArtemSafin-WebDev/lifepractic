export default function myDiary() {
    const elements = Array.from(document.querySelectorAll('.js-my-diary'));

    elements.forEach(element => {
        const textarea = element.querySelector('textarea');
        const editBtn = element.querySelector('.modals__my-diary-edit');

        if (!editBtn) return;

        let editMode = false;

        editBtn.addEventListener('click', event => {
            event.preventDefault();
            console.log('Clicked')
            if (!editMode) {
                element.classList.add('edit-mode')
                textarea.removeAttribute('readonly');
                editMode = true;

                
            } else {
                element.classList.remove('edit-mode')
                textarea.addAttribute('readonly');
                editMode = false;
            }
        })
    })
}