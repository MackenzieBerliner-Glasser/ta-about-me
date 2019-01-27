const quizForm = document.getElementById('quiz-form');
const resultTrue = document.getElementById('result-true');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const pickTrue = quizForm.elements.true.value;
    const pickFalse = quizForm.elements.false.value;

    if(pickTrue) {
        resultTrue.classList.remove('hidden');
    } else {
        resultTrue.classList.remove('hidden');
    }
});
