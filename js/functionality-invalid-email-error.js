const emailInput = document.querySelector('.join__contact-area input');
const errorIcon = document.querySelector('.contact-area__input-wrapper img');

function triggerError(event) {
    event.preventDefault();

    errorIcon.style.display = 'block';
    event.target.style.borderColor = 'hsl(0, 94%, 66%)';
}

emailInput.addEventListener('invalid', (event) => triggerError(event));