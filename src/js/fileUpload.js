export default function fileUpload() {
    const elements = Array.from(document.querySelectorAll('.js-file-upload'));

    elements.forEach(element => {
        const input = element.querySelector('input[type="file"]');
        const label = element.querySelector('.js-file-upload-text');
        const originalLabelText = label.textContent;

        input.addEventListener('change', () => {
            if (input.files.length) {
                label.textContent = input.files[0].name;
            }
        });

        if (element.matches('.js-photo-upload')) {
            let removePhotoBtn = null;
           
            input.addEventListener('change', () => {
              
                if (input.files.length) {
                    const file = input.files[0];
                    if (file.type && file.type.indexOf('image') === -1) {
                        console.log('File is not an image.', file.type, file);
                        return;
                    }

                    const reader = new FileReader();
                    reader.addEventListener('load', event => {
                        const src = event.target.result;
                        if (removePhotoBtn) {
                            removePhotoBtn.remove();

                        }
                        let closeBtn = document.createElement('div');
                        closeBtn.classList.add('file-photo-delete');

                        closeBtn.innerHTML = `
                            <div class="file-photo-delete-image-container"> 
                                <img src="${src}" alt="Фотография пользователя">
                            </div>
                            <div class="file-photo-delete-image-text">
                                Удалить
                            </div>
                            <svg width="14" height="14" aria-hidden="true" class="icon-cross">
                                <use xlink:href="#cross"></use>
                            </svg>
                        `;

                        removePhotoBtn = closeBtn;
                        element.parentElement.appendChild(closeBtn)
                    });
                    reader.readAsDataURL(file);
                } 
            });

            element.parentElement.addEventListener('click', event => {
                if (event.target.matches('.file-photo-delete') || event.target.closest('.file-photo-delete')) {
                    console.log('Deleting file')
                    input.value = '';
                    label.textContent = originalLabelText;
                    if (removePhotoBtn) {
                        removePhotoBtn.remove();
                    }
                }
            })
        } 
    });
}
