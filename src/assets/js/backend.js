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


    var cancelForm = document.querySelector('#cancel-form');

    if (cancelForm) {
        cancelForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (window.openModal) {
                window.openModal('#cancelled')
            }
        })
    }


    var validateOnTheFly = Array.prototype.slice.call(document.querySelectorAll('.js-validate-on-the-fly'));

    validateOnTheFly.forEach(function(form) {
        var inputs =  Array.prototype.slice.call(form.querySelectorAll('input'));
        var submit = form.querySelector('button[type="submit"]')

        var handleValidation = function() {
            if ($(form).parsley().isValid()) {
                submit.disabled = false;
            } else {
                submit.disabled = true;
            }
        }

        inputs.forEach(input => {
            if (input.matches('[type="checkbox"], select')) {
                input.addEventListener('change', function() {
                    handleValidation();
                })
            } else {
                input.addEventListener('input', function() {
                    handleValidation();
                })
            }
        })

        handleValidation();
    })
});
