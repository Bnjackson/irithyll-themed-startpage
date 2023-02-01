let d = new Date();
let hours = d.getHours();

const displayTime = () => {
    d = new Date();
    hours = d.getHours();
    let minutes = d.getMinutes();
    let currentTime = `${hours < 10 ? "0" + hours : hours} : ${minutes < 10 ? "0" + minutes : minutes} - `;
    let time = document.getElementById("time");
    time.innerText = currentTime;
    setTimeout(displayTime, 1000);
    console.log(currentTime, minutes);
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

displayWelcomeMessage();
displayTime();