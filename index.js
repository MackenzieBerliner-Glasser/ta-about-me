const quizForm = document.getElementById('quiz-form');
const resultTrue = document.getElementById('result-true');
const resultFalse = document.getElementById('result-false');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const pickAnswer = quizForm.elements.answer.value;

    if(pickAnswer === 'true') {
        resultTrue.classList.remove('hidden');
    } else {
        resultFalse.classList.remove('hidden');
    }
});
