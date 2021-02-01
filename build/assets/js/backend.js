document.addEventListener('DOMContentLoaded', function() {
    var helpForm = document.querySelector('#help-form');

    if (helpForm) {
        var helpSuccess = helpForm.querySelector('.modals__help-form-success');
        helpForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (
                $(helpForm)
                    .parsley()
                    .isValid()
            ) {
                helpSuccess.classList.add('active');
                setTimeout(function() {
                    helpSuccess.classList.remove('active');
                    helpForm.reset();
                    $(helpForm).parsley().reset();
                }, 5000);
            }
        });
    }

    var paymentForm = document.querySelector('#payment-form');

    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
        })
    }
});
