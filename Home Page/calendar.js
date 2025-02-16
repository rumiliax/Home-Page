document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.querySelector(".calendar");
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let selectedDay = new Date().getDate();

    function generateCalendar() {
        const now = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        let firstDay = new Date(year, month, 1).getDay();
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        let prevMonthDays = new Date(year, month, 0).getDate();

        if (selectedDay > daysInMonth) {
            selectedDay = daysInMonth;
        }

        let html = `<div class='calendar-header'>
                    <div class='month-container'>
                        <img class="arrow prev-month" src="Pictures/left-arrow.svg">
                        <div class='month-name'>${monthNames[month]}</div>
                        <img class="arrow next-month" src="Pictures/right-arrow.svg">
                    </div>
                    <div class='year-container'>
                        <img class="arrow prev-year" src="Pictures/left-arrow.svg">
                        <div class='year-number'>${year}</div>
                        <img class="arrow next-year" src="Pictures/right-arrow.svg">
                    </div>
                    </div>
                    <div class='calendar-days'>${daysOfWeek.map(day => `<span>${day}</span>`).join('')}</div>
                    <div class='calendar-grid'>`;

        for (let i = firstDay - 1; i >= 0; i--) {
            html += `<span class='day prev-month'>${prevMonthDays - i}</span>`;
        }

        for (let i = 1; i <= daysInMonth; i++) {
            let selectedClass = i === selectedDay ? "selected-day" : "";
            html += `<span class='day ${selectedClass}' data-day="${i}">${i}</span>`;
        }

        let nextDays = 42 - (firstDay + daysInMonth);
        for (let i = 1; i <= nextDays; i++) {
            html += `<span class='day next-month'>${i}</span>`;
        }

        html += `</div>`;
        calendar.innerHTML = html;

        document.querySelector(".prev-month").addEventListener("click", (e) => {
            e.stopPropagation();
            month--;
            if (month < 0) {
                month = 11;
                year--;
            }
            updateSelectedDay();
            generateCalendar();
        });

        document.querySelector(".next-month").addEventListener("click", (e) => {
            e.stopPropagation();
            month++;
            if (month > 11) {
                month = 0;
                year++;
            }
            updateSelectedDay();
            generateCalendar();
        });

        document.querySelector(".prev-year").addEventListener("click", (e) => {
            e.stopPropagation();
            year--;
            updateSelectedDay();
            generateCalendar();
        });

        document.querySelector(".next-year").addEventListener("click", (e) => {
            e.stopPropagation();
            year++;
            updateSelectedDay();
            generateCalendar();
        });

        document.querySelectorAll(".day").forEach(day => {
            day.addEventListener("click", (e) => {
                selectedDay = parseInt(e.target.getAttribute("data-day"));
                generateCalendar();
            });
        });
    }

    function updateSelectedDay() {
        let daysInNewMonth = new Date(year, month + 1, 0).getDate();
        if (selectedDay > daysInNewMonth) {
            selectedDay = daysInNewMonth;
        }
    }

    generateCalendar();

    const calendarText = document.querySelector(".calendar-text");
    calendarText.addEventListener("click", (e) => {
        e.stopPropagation();
        
        if (calendar.classList.contains("show-calendar")) {
            calendar.classList.remove("show-calendar");
            setTimeout(() => {
                calendar.style.display = "none";
            }, 500);
        } else {
            calendar.style.display = "block";
            setTimeout(() => {
                calendar.classList.add("show-calendar");
            }, 10);
        }
    });
});

