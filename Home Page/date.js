function updateDate() {
    const now = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; 
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0"); 
    seconds = seconds.toString().padStart(2, "0"); 

    const formattedDate = `${day} ${hours}:${minutes} ${ampm}`;
    const dateElement = document.getElementById('date');

    if (dateElement) {
        dateElement.textContent = formattedDate;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateDate();
    setInterval(updateDate, 1000);
});
