const pastaTimes = {
    spaghetti: 8 * 60, // 8 minutes in seconds
    penne: 10 * 60,    // 10 minutes in seconds
    farfalle: 12 * 60, // 12 minutes in seconds
};

let timerInterval;

document.getElementById('start-timer').addEventListener('click', () => {
    const pastaType = document.getElementById('pasta-type').value;
    const timeInSeconds = pastaTimes[pastaType];

    startTimer(timeInSeconds);
});

function startTimer(duration) {
    let timer = duration;
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;

        document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (--timer < 0) {
            clearInterval(timerInterval);
            alert('Pasta is ready!');
        }
    }, 1000);
}