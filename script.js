

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.getElementById("clock").innerHTML =
        `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();




function updateCountdown() {

    const nextYear = new Date("January 1, 2027 00:00:00").getTime();

    const now = new Date().getTime();

    const distance = nextYear - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("countdown").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML =
            " Happy New Year!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();