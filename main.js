const d = new Date();
const hour = d.getHours();

const setWelcomeMessage = () => {
    const welcomeMessage = document.getElementById('welcome-message');
    if(hour >= 5 && hour < 12) {
        welcomeMessage.innerHTML = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        welcomeMessage.innerHTML = 'Good Afternoon';
    } else if (hour >= 18 && hour < 24) {
        welcomeMessage.innerHTML = 'Good Evening';
    } else if (hour >= 24 && hour < 5) {
        welcomeMessage.innerHTML = 'Good Night';
    }    
}
