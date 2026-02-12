// script.js

// JavaScript functionality for the portfolio

function updateDateTime() {
    const now = new Date();
    const utcString = now.toISOString().replace('T', ' ').substring(0, 19);
    document.getElementById('currentDateTime').innerText = utcString;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Call it immediately to display date and time without waiting 1 second
updateDateTime();