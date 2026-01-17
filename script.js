let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.getElementById('check').addEventListener('click', function ()  {
    const guess = Number(document.getElementById('guess').value);

    if (!guess) {
        document.getElementById('message').textContent = 'Please enter a number!';
        return;
    }

    if (guess === secretNumber) {
        document.getElementById('message').textContent = 'Correct Number! You win!';
        if (score > highscore) {
            highscore = score;
            document.getElementById('highscore').textContent = `Highscore: ${highscore}`;

        }
    } else {
        if (score > 1) {
            document.getElementById('message').textContent =
              guess > secretNumber? 'Too High!' : 'Too Low!';
            score--;
            document.getElementById('score').textContent = `Score: ${score}`;
        } else {
            document.getElementById('message').textContent = 'You lost :(';
            document.getElementById('score').textContent = 'Score: 0';
        }
    }
});

document.getElementById('again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;

    document.getElementById('score').textContent = 'Score: ${score}';
    document.getElementById('message').textContent = 'Start guessing...';
    document.getElementById('guess').value = '';

});
