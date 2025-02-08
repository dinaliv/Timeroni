document.addEventListener("DOMContentLoaded", () => {
    const timerDisplay = document.getElementById("timer-display");
    
    // Pasta types and their cooking times (in minutes)
    const pastaTimes = {
      "penne-rigate": 11,
      "spaghetti": 9,
      "fusilli": 11,
      "linguine": 10
    };
  
    let timer = null; // Store the interval ID
  
    function startTimer(minutes) {
      if (timer) clearInterval(timer); // Reset any existing timer
  
      let timeLeft = minutes * 60; // Convert minutes to seconds
  
      function updateDisplay() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      }
  
      updateDisplay(); // Initialize display
  
      timer = setInterval(() => {
        timeLeft--;
        updateDisplay();
  
        if (timeLeft <= 0) {
          clearInterval(timer);
          timerDisplay.textContent = "00:00"; // Ensure it stays at 00:00
          alert("Timer finished! 🍝"); // Notify the user
        }
      }, 1000);
    }
  
    // Attach event listeners to buttons
    Object.keys(pastaTimes).forEach(pastaType => {
      document.getElementById(pastaType).addEventListener("click", () => {
        startTimer(pastaTimes[pastaType]);
      });
    });
  });
  