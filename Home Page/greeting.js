function getGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour >= 5 && hour < 8) {
        greeting = "Good early morning!";
    } else if (hour >= 8 && hour < 11) {
        greeting = "Good morning!";
    } else if (hour >= 11 && hour < 14) {
        greeting = "Good midday!";
    } else if (hour >= 14 && hour < 17) {
        greeting = "Good afternoon!";
    } else if (hour >= 17 && hour < 20) {
        greeting = "Good evening!";
    } else if (hour >= 20 && hour < 23) {
        greeting = "Good night!";
    } else {
        greeting = "Sweet dreams!";
    }

    const usernameElement = document.querySelector(".username");
    if (usernameElement) {
        usernameElement.textContent = greeting;
    }
}

window.onload = getGreeting;
