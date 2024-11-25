// script.js

document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        newTask.addEventListener('click', function() {
            newTask.classList.toggle('completed');
            if (newTask.classList.contains('completed')) {
                showConfetti();
            }
        });

        taskList.appendChild(newTask);
        taskInput.value = ''; // Clear the input
    }
});

// Function to show confetti
function showConfetti() {
    const confetti = document.getElementById('confetti');
    confetti.style.display = 'block';

    // Here, you'd call your confetti animation logic
    // For example, you could use a library like Canvas or a simple animation loop
    // For demonstration, we'll just hide it after a short duration
    setTimeout(() => {
        confetti.style.display = 'none';
    }, 3000); // Adjust duration as needed
}
function sendPanicEmail() {
    const email = "pratyushshubh2003@gmail.com"; // Change to the recipient's email address
    const subject = "Distress Call...I am panickinggggggg";
    const body = "I need help!!! Helpppppppppppp me fastttttttt,,,,jaldiiiii aaaaoooooo";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
const quotes = [
    "Believe in yourself, and all that you are.",
    "You are capable of amazing things.",
    "Stay positive, work hard, make it happen.",
    "Be yourself; everyone else is already taken.",
    "Dream big and dare to fail.",
    "Your only limit is your mind."
];

function displayRandomQuote() {
    const quoteElement = document.getElementById("quote-text");
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = `"${randomQuote}"`;
}

window.onload = displayRandomQuote;

