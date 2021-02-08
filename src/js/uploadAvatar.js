export default function uploadAvatar() {
    const elements = Array.from(document.querySelectorAll('.js-upload-avatar'));

    elements.forEach(input => {
        input.addEventListener('change', () => {
            if (input.files && input.files[0]) {
                const reader = new FileReader();

                reader.onload = function(e) {
                    const src = e.target.result;
                    const image = document.querySelector('.account__image');
                    image.src = src;
                };

                reader.readAsDataURL(input.files[0]); 
            }
        });
    });
}
