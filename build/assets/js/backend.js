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
                    $(helpForm)
                        .parsley()
                        .reset();
                }, 5000);
            }
        });
    }

    var paymentForm = document.querySelector('#payment-form');

    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
        });
    }

    var cancelForm = document.querySelector('#cancel-form');

    if (cancelForm) {
        cancelForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (window.openModal) {
                window.openModal('#cancelled');
            }
        });
    }
    var cancelPsychoForm = document.querySelector('#cancel-psycho-form');

    if (cancelPsychoForm) {
        cancelPsychoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (window.openModal) {
                window.openModal('#cancelled-psycho');
            }
        });
    }
    var paymentForm1 = document.querySelector('#payment-form-1');

    if (paymentForm1) {
        paymentForm1.addEventListener('submit', function(event) {
            event.preventDefault();
            if (window.openModal) {
                window.openModal('#payment-done');
            }
        });
    }
    var paymentForm2 = document.querySelector('#payment-form-1');

    if (paymentForm2) {
        paymentForm1.addEventListener('submit', function(event) {
            event.preventDefault();
            if (window.openModal) {
                window.openModal('#payment-failed');
            }
        });
    }
    var deleteCardForm = document.querySelector('#delete-card-form');

    if (deleteCardForm) {
        deleteCardForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (window.openModal) {
                window.openModal('#card-deleted');
            }
        });
    }

    var accountForm = document.querySelector('#account-form');
    var accountSuccess = document.querySelector('.account__success');

    if (accountForm) {
        accountForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (
                $(accountForm)
                    .parsley()
                    .isValid() &&
                accountSuccess
            ) {
                accountSuccess.classList.add('active');
                setTimeout(function() {
                    accountSuccess.classList.remove('active');
                    accountForm.reset();
                    $(accountForm)
                        .parsley()
                        .reset();
                }, 4000);
            }
        });
    }

    var regimeForms = Array.prototype.slice.call(document.querySelectorAll('.account__my-schedule-regime-form'));

    regimeForms.forEach(function(form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            var success = document.querySelector('.account__success');

            if (success) {
                success.classList.add('active');

                setTimeout(function() {
                    success.classList.remove('active');
                }, 2000);
            }
        });
    });

    var validateOnTheFly = Array.prototype.slice.call(document.querySelectorAll('.js-validate-on-the-fly'));

    validateOnTheFly.forEach(function(form) {
        var inputs = Array.prototype.slice.call(form.querySelectorAll('input'));
        var submit = form.querySelector('button[type="submit"]');

        var handleValidation = function() {
            if (
                $(form)
                    .parsley()
                    .isValid()
            ) {
                submit.disabled = false;
            } else {
                submit.disabled = true;
            }
        };

        inputs.forEach(input => {
            if (input.matches('[type="checkbox"], select')) {
                input.addEventListener('change', function() {
                    handleValidation();
                });
            } else {
                input.addEventListener('input', function() {
                    handleValidation();
                });
            }
        });

        handleValidation();
    });

    var formsWithCode = Array.prototype.slice.call(document.querySelectorAll('.js-form-with-code'));

    formsWithCode.forEach(function(form) {
        console.log('Form with code', form);
        var getCodeBtn = form.querySelector('.js-get-code');
        var codePhoneInput = form.querySelector('.js-code-phone-input');
        var getCodeRemark = form.querySelector('.js-get-code-remark');
        var enterCodeRow = form.querySelector('.js-code-row');
        var resendCodeBtn = form.querySelector('.js-code-resend');

        getCodeBtn.addEventListener('click', function(event) {
            event.preventDefault();

            if (
                $(form)
                    .parsley()
                    .validate('phonecode')
            ) {
                getCodeBtn.style.display = 'none';
                getCodeRemark.style.display = 'none';
                codePhoneInput.setAttribute('readonly', '');
                enterCodeRow.style.display = '';
            } else {
                console.log('not valid phone');
            }
        });
    });

    var diaryForm = document.querySelector('#diary-form');
    if (diaryForm) {
        diaryForm.addEventListener('submit', function(event) {
            event.preventDefault();
            window.closeModal();
        });
    }

    var accountForms = [document.querySelector('#account-selfemployed'), document.querySelector('#account-ip')];

    accountForms.forEach(function(form) {
        if (!form) return;
        form.addEventListener('submit', function(event) {
            if (
                $(form)
                    .parsley()
                    .isValid()
            ) {
                event.preventDefault();
                window.openModal('#moderation');

                var status = form.querySelector('.account__status');
                if (status) {
                    status.style.display = '';
                }
            }
        });
    });
});
