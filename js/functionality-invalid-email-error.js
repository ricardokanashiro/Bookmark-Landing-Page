const emailInput = document.querySelector('.join__contact-area input');
const errorIcon = document.querySelector('.contact-area__input-wrapper img');
const errorMessage = document.querySelector('.contact-area__input-wrapper i');

function triggerError(event) {
    event.preventDefault();

    errorIcon.style.display = 'block';
    event.target.style.borderColor = 'hsl(0, 94%, 66%)';
    errorMessage.style.visibility = 'visible';
}

emailInput.addEventListener('invalid', (event) => triggerError(event));