let d = new Date();
let hours = d.getHours();

const displayTime = () => {
    d = new Date();
    hours = d.getHours();
    seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let currentTime = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    let timeElement = document.getElementById("time");
    timeElement.innerText = currentTime;
    setTimeout(displayTime, 1000);
}

const displayWelcomeMessage = () => {
    d = new Date();
    hours = d.getHours();
    const welcomeMessage = document.getElementById('welcome-message');
    if(hours >= 5 && hours < 12) {
        welcomeMessage.innerText = 'Good morning';
    } else if (hours >= 12 && hours < 18) {
        welcomeMessage.innerText = 'Good afternoon';
    } else if (hours >= 18 && hours < 24) {
        welcomeMessage.innerText = 'Good evening';
    } else if (hours >= 24 && hours < 5) {
        welcomeMessage.innerText = 'Good Night';
    }
    setTimeout(displayWelcomeMessage, (60 * 1000) * 60);
}

const displayDate = () => {
    const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = d.getDate();
    const dateElement = document.getElementById('date');
    dateElement.innerText = `${day < 10 ? "0" + day : day} ${monthArray[d.getMonth()]} ${d.getFullYear()}`;
    setTimeout(displayDate, (60 * 1000) * 60);
}

displayTime();
displayWelcomeMessage();
displayDate();
