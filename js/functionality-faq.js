const questions = document.querySelectorAll('.questions-wrapper__question-card');

function expandAnswer(event) {

    questionCard = event.target;

    while(!questionCard.classList.contains('questions-wrapper__question-card')) {
        questionCard = questionCard.parentNode;
    }

    questionCard.querySelector('.question__arrow').classList.toggle('question__arrow--active');

    questionCard.querySelector('.question-card__answer').classList.toggle('question-card__answer--active');
}

questions.forEach(button => button.addEventListener('click', (event) => expandAnswer(event)));