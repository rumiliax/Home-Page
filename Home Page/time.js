function updateTime() {
    const now = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()];

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; 
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0"); 
    seconds = seconds.toString().padStart(2, "0"); 

    const formattedTime = `${day} ${hours}:${minutes} ${ampm}`;
    const timeElement = document.getElementById('datetime');
    
    if (timeElement) {
        timeElement.textContent = formattedTime;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    setInterval(updateTime, 1000);
});
