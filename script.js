let countdownElement = document.getElementById('countdown');
let countdown = 60;

setInterval(() => {
    if (countdown > 0) {
        countdown--;
        countdownElement.textContent = countdown;
    }
}, 1000);
