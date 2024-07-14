// quiz.js

function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Retrieve the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // Check if the user has selected an answer
    if (userAnswer === correctAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedbackElement.textContent = "Please select an answer.";
    }
}

// Add an event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
